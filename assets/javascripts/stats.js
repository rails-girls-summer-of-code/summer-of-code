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

var Progress = function(element, data) {
  this.element = element;
  this.data = data;
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
    this.goal_element = $('<div class="goal"></div>');
    this.completed_element = $('<div class="completed"></div>');
    this.element.append(this.goal_element).append(this.completed_element);

    for (var i = 0; i < Progress.TEAMS_COUNT; i++) {
      this.goal_element.append($('<i></i>'));
    }
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
  new Progress(this, data);
};

$.fn.stats = function(data) {
  new Stats(this, data);
};
