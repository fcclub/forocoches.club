var startTime;
var seconds;
var minutes;
var hours;
var days;
var texto="Todo va a cambiar";

function timeCounter() {
    var startTime = new Date();
    var timeDiff = endTime - startTime;
    timeDiff /= 1000;
    seconds = Math.round(timeDiff % 60);
    timeDiff = Math.floor(timeDiff / 60);
    minutes = Math.round(timeDiff % 60);
    timeDiff = Math.floor(timeDiff / 60);
    hours = Math.round(timeDiff % 24);
    timeDiff = Math.floor(timeDiff / 24);
    days = timeDiff;

    $(".days number").text(days);
    $(".hours number").text(hours);
    $(".minutes number").text(minutes);
    $(".seconds number").text(seconds);
    setTimeout(timeCounter, 1000);
}

function share_facebook() {
    window.open(
        'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent("http://forocoches.club"),
        'facebook-share-dialog',
        'width=626,height=436');
    return false;
}

function share_twitter() {
    window.open(
        'https://twitter.com/intent/tweet?url='+encodeURIComponent("http://forocoches.club")+'&text='+encodeURIComponent(texto),
        'twitter-share-dialog',
        'width=550,height=420');
    return false;
}

$('document').ready(function(){
    endTime = new Date(1476914400000);
    setTimeout(timeCounter, 1000);
});