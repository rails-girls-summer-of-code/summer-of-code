// get information about the current students

$('#js-students').append('<ul id="students-list" class="list--none list--team Grid--5"></ul>');

function loadStudents() {
	$.getJSON('https://teams.railsgirlssummerofcode.org/students.json')
		.done(function(data){
			var output = '<li><figure>';
			$.each(data, function(key, val) {
				output += '<img src="'+ val.avatar +'" alt="' + val.name_or_handle +'">';
				output += '</figure><figcaption><p>'+ val.name_or_handle +'<br>';
				output += '<a href="//github.com/'+ val.github_handle +'"><i class="fa fa-github"></i>'+ val.github_handle +'</a><br>';
				if(val.twitter_handle !== null) {
					output += '<a href="//twitter.com/'+ val.twitter_handle +'"><i class="fa fa-twitter"></i>'+ val.twitter_handle +'</a><br>';
				} else {
					output += '<a href="//twitter.com/'+ val.twitter_handle +'"></a><br>';
				}
				output += '</p></figcaption></li>';
				$('students-list').html(output);
			});
		}).fail( function () {
			console.log('Darn. JSON not properly loaded.');
		});
}

loadStudents();
