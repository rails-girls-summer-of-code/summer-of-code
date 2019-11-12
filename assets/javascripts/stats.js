var Stats = function(element, total) {
  this.element = element;
  this.total = total;
  this.render();
  return this;
};
$.extend(Stats, {
  //ENV: document.location.hostname == 'localhost' ? 'development' : 'production',
  ENV: 'production',
});
$.extend(Stats.prototype, {
  render: function() {
    this.element.text(this.formattedTotal());
  },
  formattedTotal: function() {
    return parseInt(this.total).toLocaleString('EN') + ' USD';
  }
});

Stats.Data = function(callback) {
  this.url = Stats.Data.URLS[Stats.ENV];
  this.defer = $.Deferred();
  this.defer.promise(this).done('loaded', function(event, data) {
    callback(data.total());
  });
  this.load();
  return this;
};
$.extend(Stats.Data, {
  URLS: {
    production:  'https://2018.campaign.railsgirlssummerofcode.org/donations/stats.json',
    development: 'http://localhost:3000/donations/stats.json'
  },
});

$.extend(Stats.Data.prototype, {
  load: function() {
    $.ajax({
      url: this.url,
      crossDomain: true,
      success: $.proxy(function(data) {
        this.data = data;
        this.defer.resolve('loaded', this);
      }, this)
    });
  },
  total: function() {
    return Math.round(this.data.total / 100);
  }
});

var Progress = function(element) {
  this.element = element;
  this.goal_element = $('.goal', this.element);
  this.completed_element = $('.completed', this.element);
  this.render();
  return this;
}

$.extend(Progress, {
  TEAMS_COUNT: 13,
  GOAL:  80000, // hacked in order to show a reached goal
  // PER_ITEM: 10000
});

$.extend(Progress.prototype, {
  render: function() {
    for (var i = 0; i < Progress.TEAMS_COUNT; i++) {
      this.goal_element.append($('<i></i>'));
    }
  },
  result: function(total) {
    this.total = total || 0;
    for (var i = 0; i < Progress.TEAMS_COUNT; i++) {
      this.completed_element.append($('<i></i>'));
    }
    $('#progress .goal i').width(this.item_goal_width);
    $('#progress .completed i').width(this.item_completed_width)
    this.completed_element.width(this.completed_width());
  },
  completed_percent: function() {
    return parseInt(this.total) / Progress.GOAL * 100;
  },
  completed_width: function() {
    return parseInt(this.completed_percent()) + '%'
  },
  total_width: function() {
    return Progress.TEAMS_COUNT * this.item_completed_width();
  },
  item_goal_width: function() {
    return parseInt(100 / Progress.TEAMS_COUNT) + '%';
  },
  item_completed_width: function() {
    return $('#progress .goal i').width()
  }
});

$.fn.progress = function(total) {
  return new Progress(this, total);
};

$.fn.stats = function(total) {
  return new Stats(this, total);
};

$(window).on('resize', function() {
  $('#progress .completed i').width($('#progress .goal i').width());
})
