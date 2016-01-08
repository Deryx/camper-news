$(function() {
	var camperNews = "http://www.freecodecamp.com/news/hot";
	$.getJSON(camperNews, function(json) {
		$.each(json, function() {
			var avatar = "<img src='" + this.author.picture + "' />";
			
			var username = "<p class='user'><a href='http://www.freecodecamp.com/" + this.author.username + "' target='_blank'>" + this.author.username + "</a></p>"
			
			var headlineLink = this.link;
			this.headline = this.headline.replace(/\//g, " - ");
			var headline = "<p><a href='" + headlineLink + "' target='_blank'>" + this.headline + "</a></p>";
			
			var numberUpvotes = this.upVotes.length
			var upVotes = "<p class='votes'>upvotes&nbsp;&nbsp;" + numberUpvotes + "</p>";
			
			var card = "<div class='news'>";
			
			card += avatar;
			card += username;
			card += headline;
			card += upVotes;
			
			card += "</div>";
			
			$('#container').append(card);
		});
	});
});