// TODO: save in extension options
var append = false;

var tweets = document.getElementsByClassName('tweet');
for (i in tweets) {
	var tweet = tweets[i];
	if (tweet && tweet.dataset && tweet.dataset.screenName == 'stauffermatt') {
		var tweetContent = tweet.getElementsByClassName('tweet-text');
		if (append) {
			tweetContent[0].innerHTML += '<h1>... and I am such a geek!</h1>';
		} else {
			tweetContent[0].innerHTML = '<h1>I am such a geek!</h1>';
		}
	}
}
