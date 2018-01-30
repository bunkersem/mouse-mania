window.addEventListener('load', function() {
    var mouseField = gi('mouse-field');
    var mouse = gi('mouse');

    var mx, my, trgtx, trgty;
    mx = trgtx = window.innerWidth / 2;
    my = trgty = window.innerHeight / 2;

    window.addEventListener('mousemove', function() {
        trgtx = event.clientX;
        trgty = event.clientY;
    });

    var refreshRate = 1000 / 60;
    var ns, abs, cx, cy, nx, ny, rot;
    setInterval(function() {
        ns = refreshRate * window.mousegame.speed;
        abs = Math.sqrt(Math.pow(trgtx - mx, 2) + Math.pow(trgty - my, 2));
        if (abs < 10)
            return;

        cx = (trgtx - mx) / Math.max(abs, 1);
        cy = (trgty - my) / Math.max(abs, 1);

        nx = cx * ns;
        ny = cy * ns;

        rot = Math.atan2(trgty - my, trgtx - mx) + Math.PI * .5;
        console.log(rot);

        mx += nx;
        my += ny;

        // render
        mouse.style = 'transform: translate(' + mx + 'px, ' + my + 'px) rotate(' + rot + 'rad)';
    }, refreshRate);
});



