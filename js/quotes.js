const T_TWEET = "https://twitter.com/intent/tweet?text=";
const T_RETWEET = "https://twitter.com/intent/retweet?tweet_id=";
const T_LIKE ="https://twitter.com/intent/like?tweet_id=";


const TIME_ON_SCREEN = 17;

var timer_var
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
        var t_quote ='"'+quote.quote+'" - ' +(quote.twitter_handle?'@'+quote.twitter_handle:quote.author) + '#wisdom';
        $('#t_tweet').attr("href", T_TWEET+t_quote);
        $('#t_tweet').show()

        //window.location.hash=encodeURI(btoa(quote.quote));
        if(quote.tweet_id){
            $('#t_retweet').attr("href", encodeURI(T_RETWEET+''+quote.tweet_id));
            $('#t_retweet').show()
            $('#t_like').attr("href", encodeURI(T_LIKE+''+quote.tweet_id));
            $('#t_like').show()
        }

        $('.progress-bar').css('width','100%')
        $('.progress-bar').attr('i',TIME_ON_SCREEN)
       
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


timer = function(totaltime){
    setInterval(function(){    
        i = $('.progress-bar').attr("i") 
        if(i>=0){
            i--
            if(play){$('.progress-bar').css('width', (i/totaltime)*100+'%')};
            $('.progress-bar').attr('i',i)
            console.log(i)
        }
    }, 1000);
}

display_quote();
timer(TIME_ON_SCREEN-1)      
window.setInterval(function () {
    display_quote();
}, TIME_ON_SCREEN*1000);

$('body').keyup(function (e) {
    if (e.keyCode == 32) {
        playStopAction()
    }
    
});

$('#quote').click(function (e) {
        playStopAction()
});

