

document.querySelector('#hand-paper').addEventListener('click', handsClick);
document.querySelector('#hand-scissors').addEventListener('click', handsClick);
document.querySelector('#hand-stone').addEventListener('click', handsClick);
let message = document.querySelector('#message')
let contUser = document.querySelector('#contUser')
let contAleatorio = document.querySelector('#contAleatorio')
let contadorUser = 0
let contadorAleatorio = 0
function handsClick(event) {
    
    let numberAleatorio = Math.floor(Math.random() * 3);
   
    let userChoice = parseInt(event.currentTarget.getAttribute('data-value'));
   
    if (userChoice === numberAleatorio) {
        message.innerText = 'Empate!'
    } else if ((userChoice === 0 && numberAleatorio === 2) ||
               (userChoice === 1 && numberAleatorio === 0) ||
               (userChoice === 2 && numberAleatorio === 1)) {
         message.innerText = 'Ganaste!'
         contadorUser++
         contUser.innerText = contadorUser
              

    } else {
         message.innerText = 'Pierdes!'
         contadorAleatorio++
         contAleatorio.innerText = contadorAleatorio
    }
}

