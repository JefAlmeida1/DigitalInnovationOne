constyourShip = document.querySelector('.player-shhoter')
const playArea = document.querySelector('#main-play-area')

function flyShip(event){
    if(event.key === 'ArrowUp'){
        event.preventDefault()
        moveUp()
    }else if(event.key === 'ArroDown'){
        event.preventDefault()
        moveDown()
    }else if(event.key === " "){
        event.preventDefault()
        fireLaser()
    }
}

//up

function moveUp(){
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top')
    if(topPosition === "0px"){
        return
    }else{
        let position = parseInt(topPosition)
        position -= 50
        yourShip.style.top = `${position}px`
    }
}