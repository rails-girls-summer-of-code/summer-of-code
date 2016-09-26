// get information about the organizers

var CurrentStudents = function() {
	this.init();
};

CurrentStudents.prototype = {

	queryUrl: 'https://teams.railsgirlssummerofcode.org/students.json',
	queryData: {},
	// see getStudentsPerTeam
	teams: [],

	init: function() {
		var self = this;
		$.get(this.queryUrl)
			.done(function(data) {
				this.queryData = data;
				self.getStudentsPerTeam(this.queryData);
				self.buildPage(this.queryData);
				$('.is-loading').removeClass('is-loading');

			}).fail(function() {
				console.log('That didn\'t work. Maybe a CORS thing?');
			});
	},
	// Iterates over data and creates an array
	getStudentsPerTeam: function(data) {
		var self = this;
		$.each(data, function(k, v) {
			// Structure for this array:
			// [{teamName: name, teamMembers: [{respective students from data}]}]
			var teamName = v.roles[0].team.name;

			// empty variable, which is filled in the for loop and
			// used in the if statement
			var existingTeam;
			for (var i = 0; i < self.teams.length; i++) {
				// Saves recent entry into variable 'team'
				var team = self.teams[i];
				// if recent team name is equal to the one in teamName
				if(team.Name === teamName) {
					// save the whole object entry in var 'existingTeam'
					existingTeam = team;
					// stop the for loop
					break;
				}
			}
			// If: Object with a team name already exists, use the existing object
			// and just add the next member
			// else: create a new object inside the teams-array
			if (existingTeam) {
				existingTeam.Members.push(v);
			}else {
				var team = {Name: teamName, Members: [v]};
				self.teams.push(team);
			}
		});
	},
	buildPage: function(data) {
		var self = this;
		var output = '';
		var avatar = '';
		console.log(this.teams);
		// Structure is:
		// [{teamName: name, teamMembers: [{respective students from data}]}]
		$.each(this.teams, function(k, v) {
			output += '<h2>'+ 'Team ' + v.Name +'</h2>';
			output += '<ul class="list--none list--team Grid--5">';
			$.each(v.Members, function(key, val) {
				if(val.avatar_url === null) {
				avatar = '/img/default-avatar.jpg';
				} else {
					avatar = val.avatar_url;
				}
				output += '<li><figure><img src="'+ avatar +'" alt="' + val.name_or_handle +'">';
				output += '</figure><figcaption><p>'+ val.name_or_handle +'<br>';
				output += '<a href="//github.com/'+ val.github_handle +'"><i class="fa fa-github"></i>'+ val.github_handle +'</a><br>';
				if(val.twitter_handle !== null) {
					output += '<a href="//twitter.com/'+ val.twitter_handle +'"><i class="fa fa-twitter"></i>'+ val.twitter_handle +'</a><br>';
				} else {
					output += '<a href="//twitter.com/'+ val.twitter_handle +'"></a><br>';
				}
				output += '</p></figcaption></li>';
			});
			output += '</ul>';
		});
		$('#js-students').append(output);
	},
};

if($('#js-students').length > 0) {
	var student = new CurrentStudents();
}
