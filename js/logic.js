const Logic = function(){
    
    let level = 1;
    let timer
    
    const decrementTime = function(leftInSec){
        const mins = Math.floor(leftInSec / 60)
        const secs = leftInSec % 60
        r.renderTimer(mins, secs)
    }
    
    const startTimer = function(){
        let timeLeft = 10000 + 1000 * level
        let leftInSec = timeLeft / 1000;
        decrementTime(leftInSec)
        setInterval(function(){
            leftInSec--
            decrementTime(leftInSec)
        }, 1000)
        return setTimeout(function(){alert('lost')}, timeLeft)
    }

    const startLevel = function(){
        r.renderLevel(level)
        timer = startTimer()
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