const Logic = function(){
    
    let level = 1;
    let timer
    let timeLeft

    const startTimer = function(level){
        return setTimeout(function(){alert('lost')}, timeLeft)
    }

    const startLevel = function(){
        timeLeft = 10000 + 1000 * level
        r.renderLevel(level, timeLeft)
        timer = startTimer(timeLeft)
    }

    const popBall = function(ball){
        r.remove(ball) // remove from display
        checkWin() // check if won
    }

    const checkWin = function(){
        if(!($('.ball').length)){
            clearTimeout(timer)
            alert('winner')
            level++
            startLevel()
        }
    }

    return {
        startLevel,
        level,
        popBall
    }
}