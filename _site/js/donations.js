var Donation, Donations;

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
  ENV: document.location.hostname == 'localhost' ? 'development' : 'production',
  URLS: {
    production:  'http://campaign.railsgirlssummerofcode.org/donations.json',
    development: 'http://localhost:3000/donations.json'
  },
  COUNT: 100
});
Donations.URL = Donations.URLS[Donations.ENV];

$.extend(Donations.prototype, {
  load: function() {
    var _this = this;
    $.ajax({
      url: Donations.URL,
      crossDomain: true,
      success: function(collection) {
        return _this.pagination = new Pagination(_this, $('.pagination', _this.tbody.parent()), collection, Donations.COUNT);
      }
    });
  },
  clear: function() {
    $(this.tbody).empty();
  },
  render: function(page) {
    var record, _i, _len, _results;
    this.clear();
    _results = [];
    for (_i = 0, _len = page.length; _i < _len; _i++) {
      record = page[_i];
      _results.push(this.tbody.append(new Donation(record).render()));
    }
    return _results;
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
    return $('<td></td>').text('$' + this.data.amount);
  },
  package: function() {
    var text = this.data["package"].camelize();
    var classes = "package " + this.data.package;
    var package = $('<span></span>').attr('class', classes).text(text); // + this.subscription();
    return $('<td></td>').append(package);
  },
  subscription: function() {
    var tag = $('<span></span>');
    if (this.data.subscription) {
      tag.attr('class', 'subscription').attr('title', 'subscription').text('yes');
    }
    return tag;
  },
  date: function() {
    var date = new Date(this.data.created_at).format('mmm d yyyy, h:mmtt');
    return $('<td></td>').text(date);
  },
  comment: function() {
    return $('<td></td>').text(this.data.comment || '');
  }
});

$(function() {
  $.fn.donations = function() {
    return new Donations(this);
  };
  $('#donations').donations();
});

