window.mousegame = {
    speed: 0.1,
}

var gi = document.getElementById.bind(document);

window.addEventListener('load', function() {
    var speedRange = gi('speed-range')
    var multiplier = 0.01;
    speedRange.value = window.mousegame.speed / multiplier;
    speedRange.addEventListener('input', function() {
        var val = speedRange.value;
        window.mousegame.speed = val * multiplier;
    });


    // audio

    var audio = new Audio('/media/mouse-sound.mp3');
    var mouseInner = gi('mouse-inner');
    mouseInner.addEventListener('mousedown', audio.play.bind(audio));

    // fullscreen request
    gi('btn-fullscreen').addEventListener('click', getRequestFullScreenMethod());
});

function getRequestFullScreenMethod() {
    if (document.body.requestFullscreen)
        return document.body.requestFullscreen.bind(document.body);
    else if (document.body.webkitRequestFullscreen)
        return document.body.webkitRequestFullscreen.bind(document.body);
}

if (! getRequestFullScreenMethod()) {
    gi('btn-fullscreen').style = 'display: none';
}