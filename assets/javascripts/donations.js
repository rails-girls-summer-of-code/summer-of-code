var Donation, Donations, Stats;

String.prototype.camelize = function() {
  return this.slice(0, 1).toUpperCase() + this.slice(1);
};

Array.prototype.compact = function() {
  var _this = this;
  return $.each(this, function(ix, value) {
    if (!value) {
      return _this.splice(ix, 1);
    }
  });
};

Donations = function(element, data) {
  this.element = element;
  this.render(data);
};
$.extend(Donations, {
  //ENV: document.location.hostname == 'localhost' ? 'development' : 'production',
  ENV: 'production',
});

$.extend(Donations.prototype, {
  render: function(data) {
    this.element.empty();
    $.each(data, $.proxy(function(ix, record) {
      this.element.append(new Donation(record).render());
    }, this));
  },
});

Donations.Data = function(callback) {
  this.url = Donations.Data.URLS[Donations.ENV];
  this.defer = $.Deferred();
  this.defer.promise(this).done('loaded', function(event, data) {
    callback(data);
  });

  return this.load(callback);
};
$.extend(Donations.Data, {
  URLS: {
    production:  'https://campaign.railsgirlssummerofcode.org/donations.json',
    development: 'http://localhost:3000/donations.json'
  },
  PACKAGES: {
    'Trailblazer':  5000,
    'Pioneer':      2500,
    'Innovator':    1000
  },
  PARTNERS: [
    {
      amount: undefined,
      package: 'Partner',
      name: 'Travis CI',
      github_handle: 'travis-ci',
      twitter_handle: 'travisci',
      homepage: 'http://travis-ci.com',
      gravatar_url: '/img/sponsors/travis_avatar.png',
      comment: 'Proud to sponsor 1.5 fulltime organizer positions',
      created_at: '2018-01-01T00:00:00Z'
    }
  ]
});

$.extend(Donations.Data.prototype, {
  load: function() {
    $.ajax({
      url: this.url,
      crossDomain: true,
      success: $.proxy(function(data) {
        this.data = this.normalize_data(data);
        this.defer.resolve('loaded', this);
      }, this)
    });
  },
  total: function () {
    return this.data.reduce(function(result, donation) {
      return result + (donation.amount || 0);
    }, 0);
  },
  donations: function() {
    var donations = $.grep(this.data, function(donation) {
      return donation.package === 'Custom';
    });
    return donations.sort(this.sortByIndex);
  },
  sponsors: function() {
    var sponsors = $.grep(this.data, function(donation) {
      return donation.package !== 'Custom';
    });
    sponsors = sponsors.sort(this.sortByAmount);
    $.each(Donations.Data.PARTNERS, function(ix, partner) {
      sponsors.unshift(partner);
    });
    return sponsors;
  },
  normalize_data: function(data) {
    $.each(data, function(ix, item) {
      item.index = ix;
      // if(item.amount === undefined) {
      //   item.hidden = true
      //   item.amount = Donations.PACKAGES[item.package];
      // }
    });
    return data;
  },
  sortByAmount: function(lft, rgt) {
    if(lft.amount === undefined) {
      return 1;
    }
    if(rgt.amount === undefined) {
      return -1;
    }
    if(lft.amount > rgt.amount) {
      return -1;
    } else if(rgt.amount > lft.amount) {
      return 1;
    } else {
      return 0;
    }
  },
  sortByIndex: function(lft, rgt) {
    if(lft.index > rgt.index) {
      return 1;
    } else if(rgt.index > lft.index) {
      return -1;
    } else {
      return 0;
    }
  },
});

Donation = function(data) {
  this.data = data;
  return this;
};

$.extend(Donation.prototype, {
  render: function() {
    row = $('<tr></tr>');
    $.each(this.cells(), function(ix, cell) {
      row.append(cell);
    });
    return row;
  },
  cells: function() {
    var values = [];
    $.each(['gravatar', 'links', 'amount', 'package', 'date', 'comment'], $.proxy(function(ix, name) {
      values.push(this[name]());
    }, this));
    return values;
  },
  gravatar: function() {
    var src = this.data.gravatar_url || 'http://www.gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e';
    var img = $('<img>').attr('src', src);
    return $('<td></td>').append(img);
  },
  links: function() {
    var cell = $('<td></td>');
    $.each([this.name(), this.github(), this.twitter()].compact(), $.proxy(function(ix, tag) {
      cell.append(tag);
    }, this));
    return cell;
  },
  name: function() {
    var name = this.data.name || this.data.twitter_handle || this.data.github_handle || 'Anonymous';
    if (this.data.homepage) {
      return $('<a></a>').attr('href', this.data.homepage).attr('title', name).text(name);
    } else {
      return $('<span></span>').attr('title', name).text(name);
    }
  },
  github: function() {
    if (this.data.github_handle) {
      var href = this.usernameOrUrl(this.data.github_handle, "https://github.com/");
      var text = this.data.github_handle;
      return $('<a class="github"></a>').attr('href', href).text(text);
    }
  },
  twitter: function() {
    if (this.data.twitter_handle) {
      var href = this.usernameOrUrl(this.data.twitter_handle, "https://twitter.com/");
      var text = this.data.twitter_handle;
      return $('<a class="twitter"></a>').attr('href', href).text(text);
    }
  },
  amount: function() {
    var amount = $('<td></td>')
    if(this.data.amount && !this.data.hidden) {
      amount.text('$' + this.data.amount);
    } else {
      amount.text('hidden');
    }
    return amount;
  },
  package: function() {
    var package = this.data.package || '';
    var text = package.camelize();
    var classes = 'package ' + package.toLowerCase();
    var tag = $('<span></span>').attr('class', classes).text(text); // + this.subscription();
    return $('<td></td>').append(tag);
  },
  subscription: function() {
    var tag = $('<span></span>');
    if (this.data.subscription) {
      tag.attr('class', 'subscription').attr('title', 'subscription').text('yes');
    }
    return tag;
  },
  date: function() {
    var date = new Date(this.data.created_at).format('mmm d yyyy, h:MMtt');
    return $('<td></td>').text(date);
  },
  comment: function() {
    return $('<td></td>').text(this.data.comment || '');
  },
  usernameOrUrl: function(data, url) {
    if (new RegExp(url).test(data)) {
      return data;
    } else {
      return url + data;
    }
  }
});
