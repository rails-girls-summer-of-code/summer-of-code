// get information about the organizers

var CurrentStudents = function() {
	this.init();
};

CurrentStudents.prototype = {

	queryUrl: 'https://teams.railsgirlssummerofcode.org/students.json',
	queryData: {},
	// for dynamic roles:
	roles: [],
	// roles: [ "student" ],

	init: function() {
		var self = this;
		$.get(this.queryUrl)
			.done(function(data) {
				this.queryData = data;
				self.getRolesFromData(this.queryData);
				self.getTeamFromData(this.queryData);
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
	getTeamFromData: function(data) {
		var self = this;
		$.each(data, function(k, v){
			$.each(v.roles, function(key, val) {
				console.log(val);
				if($.inArray(val.team.name, self.roles) === -1) {
					self.roles.push(val.team.name);
				}
				console.log(self.roles);
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
					output += val.roles[0].team.name +'<br>';
					// if(val.avatar_url === null) {
					// 	avatar = '/img/default-avatar.jpg';
					// } else {
					// 	avatar = val.avatar_url;
					// }
					// output += '<li><figure><img src="'+ avatar +'" alt="' + val.name_or_handle +'">';
					// output += '</figure><figcaption><p>'+ val.name_or_handle +'<br>';
					// output += val.roles[0].team.name +'<br>';
					// output += '<a href="//github.com/'+ val.github_handle +'"><i class="fa fa-github"></i>'+ val.github_handle +'</a><br>';
					// if(val.twitter_handle !== null) {
					// 	output += '<a href="//twitter.com/'+ val.twitter_handle +'"><i class="fa fa-twitter"></i>'+ val.twitter_handle +'</a><br>';
					// } else {
					// 	output += '<a href="//twitter.com/'+ val.twitter_handle +'"></a><br>';
					// }
					// output += '</p></figcaption></li>';

					// if(vr.name === v ) {
					// 	if(prevRole !== vr.name || prevUser !== val.name_or_handle) {
					//
					// 	}
					// 	prevRole = vr.name;
					// 	prevUser = val.name_or_handle;
					// }

			});
			output += '</ul>';
		});
		$('#js-students').append(output);
	},
	capitalizePluralize: function(string) {
		var suffix = 's';
		if (string === 'coach') {
			suffix = 'es';
		}
		return string.charAt(0).toUpperCase() + string.slice(1) + suffix;
	}

};

if($('#js-students').length > 0) {
	var student = new CurrentStudents();
}
