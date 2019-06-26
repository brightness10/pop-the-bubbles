/// TO DO
// limit random position so it will always be on screen
// make balls move


const l = Logic()
const r = Renderer()

$('#start-btn').on('click', function () {
    l.startLevel()
});

$('#container').on('mouseenter', '.ball', function(){
    l.popBall($(this))
});


