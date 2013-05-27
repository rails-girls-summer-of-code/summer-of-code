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
    _ref = this.values();
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      value = _ref[_i];
      row.append($('<td>' + value + '</td>'));
    }
    return row;
  },
  values: function() {
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
    return '<img src="' + (this.data.gravatar_url || 'http://www.gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e') + '">';
  },
  links: function() {
    return [this.name(), this.github(), this.twitter()].compact().join('');
  },
  name: function() {
    if (this.data.homepage) {
      return "<a href=\"" + this.data.homepage + "\">" + this.data.name + "</a>";
    } else {
      return this.data.name;
    }
  },
  github: function() {
    if (this.data.github_handle) {
      return "<a href=\"https://github.com/" + this.data.github_handle + "\" class=\"github\">" + this.data.github_handle + "</a>";
    }
  },
  twitter: function() {
    if (this.data.twitter_handle) {
      return "<a href=\"https://twitter.com/" + this.data.twitter_handle + "\" class=\"twitter\">" + this.data.twitter_handle + "</a>";
    }
  },
  amount: function() {
    return '$' + this.data.amount;
  },
  "package": function() {
    return ("<span class=\"package " + this.data.package + "\">" + (this.data["package"].camelize()) + "</span>") + this.subscription();
  },
  subscription: function() {
    if (this.data.subscription) {
      return '<span class="subscription" title="subscription">yes</span>';
    } else {
      return '';
    }
  },
  date: function() {
    return new Date(this.data.created_at).format('mediumDate');
  },
  comment: function() {
    return this.data.comment || '';
  }
});

$(function() {
  $.fn.donations = function() {
    return new Donations(this);
  };
  $('#donations').donations();
});

