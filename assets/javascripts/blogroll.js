var BlogRoll = function(element, url) {
  this.element = element;
  this.url = url;
  this.load();
}

$.extend(BlogRoll.prototype, {
  load: function() {
    $.ajax({ url: this.url, crossDomain: true, success: $.proxy(this.render, this) });
  },
  render: function(data) {
    for(var i = 0; i < data.length; i++) {
      var blog = data[i];
      this.element.append(this.renderItem(blog.url, blog.title));
    }
  },
  renderItem: function(url, title) {
    var item = $('<li></li>');
    item.append(this.renderLink(url, title));
    return item;
  },
  renderLink: function(url, title) {
    title = (title || '').split('|')[0].trim();
    return $('<a></a>').attr('href', url).text(title);
  }
});

$(function() {
  $.fn.blogroll = function() {
    return new BlogRoll(this, 'https://teams.railsgirlssummerofcode.org/sources.json?kind=blog');
  };
  $('.blogroll').blogroll();
});

