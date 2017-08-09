const T_TWEET = "https://twitter.com/intent/tweet?text=";
const T_RETWEET = "https://twitter.com/intent/retweet?tweet_id=";
const T_LIKE ="https://twitter.com/intent/like?tweet_id=";

var play = true;
$('#play').show();


display_quote = function () {
    if (play) {
        $('#t_like').hide(); 
        $('#t_retweet').hide(); 
        $('#t_tweet').hide(); 
        var quote = quotes[Math.floor(Math.random() * quotes.length)];
        $('#quote').html(quote.quote);
        $('#author').html('— ' + quote.author)
        var t_quote ='"'+quote.quote+'" - ' +(quote.twitter_handle?'@'+quote.twitter_handle:quote.author);
        $('#t_tweet').attr("href", T_TWEET+t_quote);
        $('#t_tweet').show()
        if(quote.tweet_id){
            $('#t_retweet').attr("href", encodeURI(T_RETWEET+''+quote.tweet_id));
            $('#t_retweet').show()
            $('#t_like').attr("href", encodeURI(T_LIKE+''+quote.tweet_id));
            $('#t_like').show()

        }
    }
}

playStopAction = function(){
        play = !play;
        if (play) {
            $('#play').show();
            $('#pause').hide();
            //display_quote();
        } else {
            $('#play').hide();
            $('#pause').show();
        }    
}

display_quote();
window.setInterval(function () {
    display_quote();
}, 17000);

$('body').keyup(function (e) {
    if (e.keyCode == 32) {
        playStopAction()
    }
    
});

$('#quote').click(function (e) {
        playStopAction()
});

