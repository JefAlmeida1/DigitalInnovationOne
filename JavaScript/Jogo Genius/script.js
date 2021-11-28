let order = []
let clickdorder = []
let score = 0

const blue = document.querySelector('.blues')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

let shuffleorder = () =>{
    let colororder = Math.floor(Math.random() = 4)
    order[order.length] = colororder;
    clickdorder = [];

    for(let i in order){
        let elementcolor = createElement(order[i])
        lightColor(elementcolor, Number(i) + 1)
    }
}

let lightColor = (element, number) =>{
    time = time * 500;
    setTimeout(() =>{
        element.classList.add('selected')
    }, tempo -250)
    setTimeout(() =>{
        element.classList.remove('selected')
    })
}

let checkorder = () => {
    for(let i in clickdorder){
        if(clickdorder[i] != order[i]){
            gameover();
            break;
        }
    }
    if(clickdorder.length == order.length){
        alert(`Pontos: ${score}\nVoce acertou! Iniciando próximo nivel!`)
        nextLevel();
    }
}

let click = (color) => {
    clickdorder[clickdorder.length] = color;
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkorder();
    }, 250);
   
}

let createColorElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if (color == 2){
        return yellow;
    }else if  (color == 3){
        return blue;
    }
}

let nextLevel = () => {
    score++;
    shuffleorder();
}

let gameover = () => {
    alert(`Pontos: ${score}!\nVoce perdeu! \nClique em ok para iniciar novamente.`)
    order = [];
    clickdorder = [];

    playgame ();
}

let playgame = () => {
    alert('Bem vindo ao Genesis! Iniciando novo jogo!')
    score = 0;

    nextLevel();
}
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playgame();

//green.addEventListener('click', click(0))
//red.addEventListener('click', click(1))
//yellow.addEventListener('click', click(2))
//blue.addEventListener('click', click(3))

