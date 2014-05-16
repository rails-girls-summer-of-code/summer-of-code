var Donation, Donations, Stats;

// var ENV = document.location.hostname == 'localhost' ? 'development' : 'production';
var ENV = 'production';

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

Donations = function(table, pagination) {
  this.tbody = $('tbody', table);
  this._pagination = pagination;
  return this.load();
};

$.extend(Donations, {
  URLS: {
    production:  'http://campaign.railsgirlssummerofcode.org/donations.json',
    development: 'http://localhost:3000/donations.json'
  },
  COUNT: 50,
  PACKAGES: {
    'Platinum': 10000,
    'Gold':      5000,
    'Silver':    2500,
    'Bronze':    1000
  }
});
Donations.URL = Donations.URLS[ENV];

$.extend(Donations.prototype, {
  load: function() {
    var _this = this;
    $.ajax({
      url: Donations.URL,
      crossDomain: true,
      success: function(collection) {
        _this.normalize_data(collection);
        collection.sort(_this.sort);
        return _this.pagination = new Pagination(_this, $('.pagination', _this.tbody.parent()), collection, Donations.COUNT);
      }
    });
  },
  clear: function() {
    $(this.tbody).empty();
  },
  render: function(page) {
    var record, _i, _len, _results;
    var tbody = $('<tbody></tbody>');
    for (_i = 0, _len = page.length; _i < _len; _i++) {
      record = page[_i];
      if (record.package != "Custom" && !page[_i - 1]) {
        tbody.append($('<tr class="heading"><td colspan="6" class="stats">Sponsors</td></tr>'));
      }
      tbody.append(new Donation(record).render());
      if (record.package != "Custom" && page[_i + 1] && page[_i + 1].package == "Custom") {
        tbody.append($('<tr class="heading"><td colspan="6" class="stats">Individual Donors</td></tr>'));
      }
    }
    this.tbody.html(tbody.html());
  },
  normalize_data: function(collection) {
    for(var i = 0; i < collection.length; i++) {
      var item = collection[i];
      item.index = i;
      if(item.amount === undefined) {
        item.hidden = true
        item.amount = Donations.PACKAGES[item.package];
      }
    }
  },
  sort: function(lft, rgt) {
    var sortByAmount = function(lft, rgt) {
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
    };

    var sortByIndex = function(lft, rgt) {
      if(lft.index > rgt.index) {
        return 1;
      } else if(rgt.index > lft.index) {
        return -1;
      } else {
        return 0;
      }
    }

    if(lft.package != 'Custom' || rgt.package != 'Custom') {
      return sortByAmount(lft, rgt);
    } else {
      return sortByIndex(lft, rgt);
    }
  }
});

Donation = function(data) {
  this.data = data;
  return this;
};

$.extend(Donation.prototype, {
  render: function() {
    var row, value, _i, _len, _ref;
    row = $('<tr></tr>');
    _ref = this.cells();
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      cell = _ref[_i];
      row.append(cell);
    }
    return row;
  },
  cells: function() {
    var name, _i, _len, _ref, _results;
    _ref = ['gravatar', 'links', 'amount', 'package', 'date', 'comment'];
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      name = _ref[_i];
      _results.push(this[name]());
    }
    return _results;
  },
  gravatar: function() {
    var src = this.data.gravatar_url || 'http://www.gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e';
    var img = $('<img>').attr('src', src);
    return $('<td></td>').append(img);
  },
  links: function() {
    var links = [this.name(), this.github(), this.twitter()].compact();
    var cell = $('<td></td>');
    for (_i = 0, _len = links.length; _i < _len; _i++) {
      tag = links[_i];
      cell.append(tag);
    }
    return cell;
  },
  name: function() {
    var name = this.data.name || this.data.twitter_handle || this.data.github_handle || 'Anonymous';
    if (this.data.homepage) {
      return $('<a></a>').attr('href', this.data.homepage).text(name);
    } else {
      return $('<span></span>').text(name);
    }
  },
  github: function() {
    if (this.data.github_handle) {
      var href = "https://github.com/" + this.data.github_handle;
      var text = this.data.github_handle;
      return $('<a class="github"></a>').attr('href', href).text(text);
    }
  },
  twitter: function() {
    if (this.data.twitter_handle) {
      var href = "https://twitter.com/" + this.data.twitter_handle;
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
  }
});

Stats = function(element) {
  this.element = element;
  this.defer = $.Deferred();
  this.defer.promise(this);
  this.load();
  return this;
};

$.extend(Stats, {
  URLS: {
    production:  'http://campaign.railsgirlssummerofcode.org/donations/stats.json',
    development: 'http://localhost:3000/donations/stats.json'
  },
  COUNT: 100
});
Stats.URL = Stats.URLS[ENV];

$.extend(Stats.prototype, {
  load: function() {
    var _this = this;
    $.ajax({
      url: Stats.URL,
      crossDomain: true,
      success: $.proxy(function(data) {
        this.data = data;
        this.render();
        this.defer.resolve('loaded', this);
      }, this)
    });
  },
  render: function() {
    $('.total', this.element).text(this.total() + ' USD');
  },
  total: function () {
    return Math.round(this.data.total / 100);
  }
});

var Progress = function(element) {
  this.element = element;
  this.render();
}

$.extend(Progress, {
  TEAMS_COUNT: 10,
  GOAL:  88000,
  // PER_ITEM: 90000
});

$.extend(Progress.prototype, {
  render: function() {
    this.goal_element = $('<div class="goal"></div>');
    this.completed_element = $('<div class="completed"></div>');
    this.element.append(this.goal_element).append(this.completed_element);

    for (var i = 0; i < Progress.TEAMS_COUNT; i++) {
      this.goal_element.append($('<i></i>'));
    }
  },
  render_progress: function(stats) {
    this.stats = stats;
    // console.log('total_width', this.total_width())
    // console.log('item_width', this.item_width())
    // console.log('completed_percent', this.completed_percent())
    // console.log('completed_width', this.completed_width())
    for (var i = 0; i < Progress.TEAMS_COUNT; i++) {
      this.completed_element.append($('<i></i>'));
    }
    this.completed_element.width(this.completed_width());
  },
  completed_percent: function() {
    return parseInt(this.stats.total()) / Progress.GOAL * 100;
  },
  completed_width: function() {
    return parseInt(this.total_width() * this.completed_percent() / 100);
  },
  total_width: function() {
    return Progress.TEAMS_COUNT * this.item_width();
  },
  item_width: function() {
    return $('i', this.goal_element).outerWidth();
  },
  // item_count: function() {
  //   return parseInt(Progress.GOAL / Progress.PER_ITEM);
  // },
});


$(function() {
  $.fn.donations = function() {
    return new Donations(this);
  };
  $.fn.stats = function() {
    return new Stats(this);
  };
  $.fn.campaign_progress = function(stats) {
    return new Progress(this, stats);
  };
  var donations = $('#donations').donations();
  var stats = $('.stats').stats();
  var progress = $('#campaign-progress').campaign_progress();

  console.log(progress);

  stats.defer.done('loaded', function(event) {
    progress.render_progress(stats);
  });
});
