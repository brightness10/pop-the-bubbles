/// TO DO
// limit random position so it will always be on screen
// make balls move
// change cursor
// make win and lose functions in render


const l = Logic()
const r = Renderer()

$('#start-btn').on('click', function () {
    l.startLevel()
});

$('#container').on('mouseenter', '.ball', function(){
    l.popBall($(this))
});


