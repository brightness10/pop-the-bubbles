const Logic = function(){
    
    let level = 1;
    let interval
    
    const decrementTime = function(leftInSec){
        const mins = Math.floor(leftInSec / 60)
        const secs = leftInSec % 60
        r.renderTimer(mins, secs)
    }
    
    const startTimer = function(){
        let timeLeft = 10000 + 1000 * level
        let leftInSec = timeLeft / 1000;
        decrementTime(leftInSec)
        interval = setInterval(function(){
            leftInSec--
            decrementTime(leftInSec)
            if(!leftInSec){
                alert('lost')
            }
        }, 1000)
    }

    const startLevel = function(){
        r.renderLevel(level)
        startTimer()
    }

    const popBall = function(ball){
        r.remove(ball) // remove from display
        checkWin() // check if won
    }

    const checkWin = function(){
        if(!($('.ball').length)){
            alert('winner')
            clearInterval(interval)
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