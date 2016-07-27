// get information about the organizers

var TeamMembers = function() {
	this.init();
};

TeamMembers.prototype = {

	queryUrl: 'https://teams.railsgirlssummerofcode.org/contributors.json',
	queryData: {},
	// for dynamic roles
	//roles: [],
	roles: [ "organizer", "supervisor", "coach", "mentor" ],

	init: function() {
		var self = this;
		$.get(this.queryUrl)
			.done(function(data) {
				this.queryData = data;
				//self.getRolesFromData(this.queryData);
				self.buildPage(this.queryData);
				$('.is-loading').removeClass('is-loading');

			}).fail(function() {
				console.log('That didn\'t work. Maybe a CORS thing?');
			});
	},
	getRolesFromData: function(data) {
		var self = this;
		$.each(data, function(k, v){
			$.each(v.roles, function(key, val) {
				if($.inArray(val.name, self.roles) === -1) {
					self.roles.push(val.name);
				}
			});
		});
	},
	buildPage: function(data) {
		var self = this;
		var output = '';
		var avatar = '';
		// necessary to check because some organisers
		// have the same role twice
		var prevRole = '';
		var prevUser = '';
		$.each(this.roles, function(k, v) {
			output += '<h2>'+ self.capitalizePluralize(v) +'</h2>';
			output += '<ul class="list--none list--team Grid--5">';
			$.each(data, function(key, val) {
				$.each(val.roles, function(kr, vr) {
					if(vr.name === v ) {
						if(prevRole !== vr.name || prevUser !== val.name_or_handle) {
							if(val.avatar_url === null) {
								avatar = '/img/default-avatar.jpg';
							} else {
								avatar = val.avatar_url;
							}
							output += '<li><figure><img src="'+ avatar +'" alt="">';
							output += '</figure><figcaption><p>'+ val.name_or_handle +'<br>';
							output += '<a href="//github.com/'+ val.github_handle +'"><i class="fa fa-github"></i>'+ val.github_handle +'</a><br>';
							if(val.twitter_handle !== null) {
								output += '<a href="//twitter.com/'+ val.twitter_handle +'"><i class="fa fa-twitter"></i>'+ val.twitter_handle +'</a><br>';
							} else {
								output += '<a href="//twitter.com/'+ val.twitter_handle +'"></a><br>';
							}
							output += '</p></figcaption></li>';
						}
						prevRole = vr.name;
						prevUser = val.name_or_handle;
					}
				});
			});
			output += '</ul>';
		});
		$('#js-team').append(output);
	},
	capitalizePluralize: function(string) {
		var suffix = 's';
		if (string === 'coach') {
			suffix = 'es';
		}
		return string.charAt(0).toUpperCase() + string.slice(1) + suffix;
	}

};

if($('#js-team').length > 0) {
	var team = new TeamMembers();
}
