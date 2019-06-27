const Renderer = function(){
    const $con = $('#container')

    const parseNum = function(variable){
        variable = Number(variable.replace('px', ''))
        return variable
    }

    const userLost = function(){
        $('#field').append(`<div class="modal lost">
        <h3>You've Lost!</h3>
        <button id="retry-btn">Retry Level</button>
        <button id="restart-btn">Restart Game</button>
        </div>`)
    }

    const userWon = function(){
        $('#field').append(`<div class="modal won">
        <h3>You've Won!</h3>
        <button id="next-btn">Next Level</button>
        </div>`)
    }

    const randomNum = function(min,max){
        return min + Math.floor(Math.random() * (max - min + 1))
    }

    const randomPosition = function($ball){
        let topDis = randomNum(0,95)
        let leftDis = randomNum(0,95)
        $ball.css('top', topDis + '%')
        $ball.css('left', leftDis + '%')
        return $ball
    }

    const sizeBall = function($ball){
        const height = $ball.css('top').replace('%', '')
        let size = 10 + height / 2
        $ball.css('font-size', size + 'px')
        return $ball        
    }

    // const controlMovement = function($ball, counter){
    //     $ball.css('left', counter) // setting left as counter
    //     return counter++
        
    // }

    const moveBall = function($ball, direction){
        let distance = $ball.css(direction) // current distance
        distance = parseNum(distance) // return only the number
        let flag = randomNum(0,1)
        setInterval(function(){
            $ball.css(direction, distance) // setting distance as left value
            let disToWall
            (direction === 'left') ?  disToWall = $('#field').css('width') : (direction === 'top') ?  disToWall = $('#field').css('height'): console.log('hi')
            disToWall = parseNum(disToWall)
            let size = $ball.css('font-size') // grab ball size
            size = parseNum(size) // return only number from size
                if(flag){
                    distance++
                    if(distance >= disToWall - size){
                        flag = false
                    }
                }else{
                    distance--
                    if(distance < 0)
                    flag = true
                }
        }, randomNum(1,10))
    }

    const createBalls = function(level){
        for (let i = 1; i < 5 + level; i++) {
            let $ball = $(document.createElement('i'));
            $ball.addClass('fas fa-bowling-ball ball')
            $ball.css({'color': `rgb(${randomNum(0,256)},${randomNum(0,256)},${randomNum(0,256)})`, 'opacity': randomNum(3, 10) / 10})
            $ball = randomPosition($ball)
            $ball = sizeBall($ball)
            $('#field').append($ball);
            moveBall($ball, 'left')
            moveBall($ball, 'top')
        }
    }

    const colorTimer = function(){
        $('#timer').css('color', '#e74c3c')
    }

    const renderTimer = function(mins, secs){
        $('#timer').empty() // erase this line once #timer is placed inside #container
        $('#timer').text(`${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`)
    }

    const ballsLeft = function(){
        $('#balls-left').remove()
        $('header').append(`<div id="balls-left">${$('.ball').length} Balls left</div>`)
    }

    const renderHeader = function(level){
        $('header').remove()
        $con.prepend(`<header>
        <div id="timer"></div>
        <h1 class="heading">Level ${level}</h1>
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
        userWon,
        colorTimer
    }
}