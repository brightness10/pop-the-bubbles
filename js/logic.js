const Logic = function(){
    
    let level = 1;
    let interval
    
    const loserUser = function(){
        clearInterval(interval)
        $('#container').off('mouseenter', '.ball')
        r.userLost()
    }

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
                loserUser()
            } else if(leftInSec < 6){
                r.colorTimer()
            }
        }, 1000)
    }

    const startLevel = function(chosenLevel){
        level = chosenLevel || level
        r.renderLevel(level)
        startTimer()
    }

    const popBall = function(ball){
        r.remove(ball) // remove from display
        r.ballsLeft() // refresh ball count
        checkWin() // check if won
    }

    const checkWin = function(){
        if(!($('.ball').length)){
            clearInterval(interval)
            r.userWon()
            level++
            // startLevel()
        }
    }

    return {
        startLevel,
        level,
        popBall
    }
}