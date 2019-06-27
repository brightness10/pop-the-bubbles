const Renderer = function(){
    const $con = $('#container')

    const userLost = function(){
        $('#field').append(`<div class="modal">
        <h3>You've Lost!</h3>
        <button id="retry-btn">Retry Level</button>
        <button id="restart-btn">Restart Game</button>
        </div>`)
    }

    const randomNum = function(min,max){
        return min + Math.floor(Math.random() * (max - min + 1))
    }

    const randomPosition = function($ball){
        $ball.css('top', `${randomNum(0,95)}%`)
        $ball.css('left', `${randomNum(0,95)}%`)
        return $ball
    }

    const determineSize = function($ball){
        const height = $ball.css('top').replace('%', '')
        let size = 10 + height / 2
        return size + 'px'
    }

    const sizeBall = function($ball){
        $ball.css('font-size', determineSize($ball))        
        return $ball        
    }

    const createBalls = function(level){
        for (let i = 1; i < 5 + level; i++) {
        let $ball = $(document.createElement('i'));
            $ball.addClass('fas fa-bowling-ball ball')
            $ball.css('color', `rgb(${randomNum(0,256)},${randomNum(0,256)},${randomNum(0,256)})`)
            $ball = randomPosition($ball)
            $ball = sizeBall($ball)
            $('#field').append($ball);
        }
    }

    const colorTimer = function(){
        $('#timer').css('color', '#e74c3c')
    }

    const renderTimer = function(mins, secs){
        $('#timer').empty() // erase this line once #timer is placed inside #container
        $('#timer').text(`${mins}:${secs}`)
    }

    const ballsLeft = function(){
        $('#balls-left').remove()
        $('header').append(`<div id="balls-left">${$('.ball').length}</div>`)
    }

    const renderHeader = function(level){
        $('header').remove()
        $con.prepend(`<header>
        <h1 class="heading">Level ${level}</h1>
        <div id="timer"></div>
        </header>`)
        ballsLeft()
    }

    const renderLevel = function(level){
        $con.empty();
        $con.append('<div id="field"></div>')
        createBalls(level)
        renderHeader(level)
    }

    const remove = function(ball){
        // make sound
        ball.remove()
    }

    return {
        renderLevel,
        remove,
        renderTimer,
        ballsLeft,
        userLost,
        colorTimer
    }
}