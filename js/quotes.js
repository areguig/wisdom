
var play = true;
$('#play').show();

display_quote = function () {
    if (play) {
        var quote = quotes[Math.floor(Math.random() * quotes.length)];
        $('#quote').html(quote.quote);
        $('#author').html('— ' + quote.author)
    }
}

playStopAction = function(){
        play = !play;
        if (play) {
            $('#play').show();
            $('#pause').hide();
            display_quote();
        } else {
            $('#play').hide();
            $('#pause').show();
        }    
}

display_quote();
window.setInterval(function () {
    display_quote();
}, 20000);

$('body').keyup(function (e) {
    if (e.keyCode == 32) {
        playStopAction()
    }
    
});

$('#quote').click(function (e) {
        playStopAction()
});

