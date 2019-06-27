/// TO DO
// move balls
// bounce balls
// start movement in random direction
// two digits in timer
// limit random position so it will always be on screen


const l = Logic()
const r = Renderer()


const begin = function(outerSel, innerSel, arg){
    $(outerSel).on('click', innerSel, function () {
        l.startLevel(arg)
        $('#container').on('mouseenter', '.ball', function(){
            l.popBall($(this))
        })
})}


begin('#start-btn')

begin('#container', '#retry-btn')

begin('#container', '#restart-btn', 1)

begin('#container', '#next-btn')


