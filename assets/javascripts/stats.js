Stats = {};
Stats = function(element, data) {
  this.element = element;
  this.data = data;
  this.render();
  return this;
};
$.extend(Stats.prototype, {
  render: function() {
    this.element.text(this.formattedTotal());
  },
  formattedTotal: function() {
    return parseInt(this.data.total()).toLocaleString('EN') + ' USD';
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
  TEAMS_COUNT: 11,
  GOAL:  110000,
  // PER_ITEM: 90000
});

$.extend(Progress.prototype, {
  render: function() {
    for (var i = 0; i < Progress.TEAMS_COUNT; i++) {
      this.goal_element.append($('<i></i>'));
    }
  },
  result: function(data) {
    this.data = data;
    for (var i = 0; i < Progress.TEAMS_COUNT; i++) {
      this.completed_element.append($('<i></i>'));
    }
    this.completed_element.width(this.completed_width());
  },
  completed_percent: function() {
    return parseInt(this.data.total()) / Progress.GOAL * 100;
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
});

$.fn.progress = function(data) {
  return new Progress(this, data);
};

$.fn.stats = function(data) {
  return new Stats(this, data);
};
