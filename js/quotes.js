const T_TWEET = "https://twitter.com/intent/tweet?hashtags=wisdom";
const T_RETWEET = "https://twitter.com/intent/retweet?tweet_id=";
const T_LIKE ="https://twitter.com/intent/like?tweet_id=";

var timer_in_sec=17;
var play = true;
$('#play').show();

display_quote = function (hash) {
    console.log("play = "+play)
    if (play) {
        $('#t_like').hide(); 
        $('#t_retweet').hide(); 
        $('#t_tweet').hide();
        var quote
        if(hash){
            quote = quotes.find(function(q) {
                return "#"+btoa(escape(encodeURIComponent(q.quote)))===hash
            });
            playStopAction()
        } else {
            quote = quotes[Math.floor(Math.random() * quotes.length)];
        }
        $('#quote').html(quote.quote);
        $('#author').html('— ' + quote.author)
        var t_quote ='"'+quote.quote+'" - ' +(quote.twitter_handle?'@'+quote.twitter_handle:quote.author);
        
        $('#t_tweet').attr("href", T_TWEET+`&text=${t_quote}&url=https://goo.gl/1H11p8`);
        $('meta[property="og:description"]').attr("content",t_quote)
        $('meta[property="og:url"]').attr("content", window.location)
        $('#t_tweet').show()

        window.location.hash=btoa(escape(encodeURIComponent(quote.quote)))
        if(quote.tweet_id){
            $('#t_retweet').attr("href", encodeURI(T_RETWEET+''+quote.tweet_id));
            $('#t_retweet').show()
            $('#t_like').attr("href", encodeURI(T_LIKE+''+quote.tweet_id));
            $('#t_like').show()
        }

        $('.progress-bar').css('width','100%')
        $('.progress-bar').attr('i',timer_in_sec)
    }
}

playStopAction = function(){
        play = !play;
        if (play) {
            $('#play').show();
            $('#pause').hide();
            timer_in_sec = parseInt($("#timer-sec").val());
            $('.progress-bar').attr('i',timer_in_sec)
        } else {
            $('#play').hide();
            $('#pause').show();
        }    
}


var progressBarHandler = function(){
    i = parseInt($('.progress-bar').attr("i"))
    console.log(i)
    if(play && i>0){
        $('.progress-bar').css('width', (i/timer_in_sec)*100+'%')
        $('.progress-bar').attr('i',i-1)
    }else{
        $('.progress-bar').css('width','0px')
        console.log("reset")
        display_quote();
    }
}


display_quote(window.location.hash);
window.setInterval(progressBarHandler,1000)      

$('body').keyup(function (e) {
    if (e.keyCode == 32) {
        playStopAction()
    }
    
});

$('#quote').click(function (e) {
        playStopAction()
});
