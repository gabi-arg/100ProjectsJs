let min = 20;
let seg = 0;

function segundos() {
    if (seg > 0) {
        seg = seg - 1;
    } else if (min > 0) { 
        seg = 59;
        min = min - 1;
    } else {
        alert("¡Tiempo terminado!");
        clearInterval(intervalId);
    }
    document.getElementById('timer').innerText = `${min}:${seg < 10 ? '0' + seg : seg}`;
}
function start(){
    intervalId = setInterval(segundos, 1000);
}
function stop(){
    clearInterval(intervalId);
}
function reset(){
    clearInterval(intervalId);
    min = 20;
    seg = 0;
    document.getElementById('timer').innerText = `${min}:00`;
} 