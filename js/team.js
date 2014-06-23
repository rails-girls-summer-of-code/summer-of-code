// get information about the organizers

var TeamMembers = function() {
	this.init();
};

TeamMembers.prototype = {

	//queryUrl: 'http://teams.railsgirlssummerofcode.org/contributors.json',
	queryUrl: '/js/teamdata.json',
	queryData: {},
	roles: [],

	init: function() {
		console.log(this.roles);
		var self = this;
		$.get(this.queryUrl)
			.done(function(data) {

				console.log(data);
				this.queryData = data;
				self.getRolesFromData(this.queryData);
				self.buildPage(this.queryData);

			}).fail(function() {
				console.log('whoopsie');
			}).always(function() {
				console.log('always');
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
		$.each(this.roles, function(k, v) {
			output += '<h2 class="color--red">'+ self.capitalizePluralize(v) +'</h2>';
			output += '<ul class="list--none list--team Grid--5">';
			$.each(data, function(key, val) {
				$.each(val.roles, function(kr, vr) {
					if(vr.name === v) {
						output += '<li><figure><img src="'+ val.avatar_url +'" alt="">';
						output += '</figure><figcaption><p>'+ val.name +'<br>';
						//output += '<a href="#"><i class="fa fa-twitter"></i>'+ val.twitter +'</a><br>';
						output += '<a href="#"><i class="fa fa-github"></i>'+ val.github_handle +'</a></p></figcaption></li>';
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

