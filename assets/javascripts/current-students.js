// get information about the organizers

var CurrentStudents = function() {
	this.init();
};

CurrentStudents.prototype = {

	queryUrl: 'https://teams.railsgirlssummerofcode.org/students.json',
	queryData: {},
	// see getTeamFromData
	teams: [],

	init: function() {
		var self = this;
		$.get(this.queryUrl)
			.done(function(data) {
				this.queryData = data;
				// self.getRolesFromData(this.queryData);
				// self.getTeamFromData(this.queryData);
				self.getStudentsPerTeam(this.queryData);
				self.buildPage(this.queryData);
				$('.is-loading').removeClass('is-loading');

			}).fail(function() {
				console.log('That didn\'t work. Maybe a CORS thing?');
			});
	},
	// iterates over data and creates an array of all team names
	// TODO: might be overwritten by getStudentsPerTeam!
	// And indeed not be necessary, since team name is part of the array there.
	// getTeamFromData: function(data) {
	// 	var self = this;
	// 	$.each(data, function(k, v){
	// 		$.each(v.roles, function(key, val) {
	// 			if($.inArray(val.team.name, self.teams) === -1) {
	// 				self.teams.push(val.team.name);
	// 			}
	// 		});
	// 	});
	// },

	// Iterates over data and creates an array
	getStudentsPerTeam: function(data) {
		var self = this;
		$.each(data, function(k, v) {
			// Aiming for this array:
			// [{teamName: YEW, teamMembers: [{jeweilige Students aus data'}]}]
			var teamName = v.roles[0].team.name;


			// leere Variable, die in der for-loop befüllt und im if-Statement
			// genutzt wird
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
			// If: wenn Objekt mit dem TeamNamen bereits vorhanden, dann nimm das existierende
			// und hänge Student in das Member-Array rein
			// else: kreiere ein neues Objekt

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
		// [{teamName: YEW, teamMembers: [{jeweilige Students aus data'}]}]
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
