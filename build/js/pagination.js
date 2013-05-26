window.Pagination = function(parent, element, collection, count) {
  this.parent = parent;
  this.element = element;
  this.collection = collection;
  this.currentElement = $('.page .current-page', element);
  this.lastElement = $('.page .last-page', element);
  this.current = 1;
  this.count = this.paged_count = count;
  this.setup(['first', 'previous', 'next', 'last', 'all', 'paged']);
  this.update();
  return this;
};

$.extend(window.Pagination.prototype, {
  setup: function(keys) {
    var _this = this;
    return $.each(keys, function(ix, key) {
      return $('a.' + key, _this.element).click(function() {
        return _this.onClick(key);
      });
    });
  },
  onClick: function(key) {
    this[key]();
    this.update();
    return false;
  },
  first: function() {
    this.current = 1;
    return this.update();
  },
  next: function() {
    this.current += 1;
    if (this.current > this.lastPage()) {
      this.current = 1;
    }
    return this.update();
  },
  previous: function() {
    this.current -= 1;
    return this.update();
  },
  last: function() {
    this.current = this.lastPage();
    return this.update();
  },
  all: function() {
    this.current = 1;
    this.count = this.length();
    return this.update();
  },
  paged: function() {
    this.count = this.paged_count;
    return this.update();
  },
  update: function() {
    this.parent.render(this.page());
    this.element.toggle(!this.isPaged() || this.lastPage() > 1);
    this.element.toggleClass('first_page', this.isFirst());
    this.element.toggleClass('last_page', this.isLast());
    this.element.toggleClass('paged', this.isPaged());
    this.currentElement.html(this.current);
    return this.lastElement.html(this.lastPage());
  },
  isFirst: function() {
    return this.current === 1;
  },
  isLast: function() {
    return this.current === this.lastPage();
  },
  isPaged: function() {
    return this.count === this.paged_count;
  },
  lastPage: function() {
    var current, rest, _ref;
    current = parseInt(this.length() / this.count);
    rest = this.length() % this.count;
    return current + ((_ref = rest > 0) != null ? _ref : {
      1: 0
    });
  },
  length: function() {
    return this.collection.length;
  },
  page: function() {
    return this.collection.slice(this.start(), this.end());
  },
  start: function() {
    return (this.current - 1) * this.count;
  },
  end: function() {
    return this.start() + this.count;
  }
});

