const Renderer = function(){

    const randomColor = function(){
        const values = '0123456789abcdef';
        let color = '#'
        for(let i = 0; i < 6; i++){
            color += values[Math.floor(Math.random() * 16)]
        }
        return color
    }

    const randomPosition = function($ball){
        $ball.css('top', `${Math.floor(Math.random() * 101)}%`)
        $ball.css('left', `${Math.floor(Math.random() * 101)}%`)
        return $ball
    }

    const createBalls = function(level){
        for (let i = 1; i < 5 + level; i++) {
        let $ball = $(document.createElement('i'));
            $ball.addClass('fas fa-bowling-ball ball')
            $ball.css('color', randomColor())
            $ball = randomPosition($ball)
            // random size ball
            $('#container').append($ball);
        }
    }

    const renderTimer = function(timeLeft){
        const leftInSec = timeLeft / 1000;
        const mins = Math.floor(leftInSec / 60)
        const secs = leftInSec % 60
        $('#timer').text('hello')
        
        console.log(secs)
    }

    const renderLevel = function(level, timeLeft){
        $('#container').empty();
        createBalls(level)
        renderTimer(timeLeft)
    }

    const remove = function(ball){
        // make sound
        ball.remove()
    }

    return {
        renderLevel,
        remove
    }
}