// funciones declarativas - declarative functions
/*
function changeThisElement(element){
    element.innerHTML = 'hola mundo desde funcion declarativa';
}
*/

// funciones flechas - arrow functions
const changeThisElement = element => element.innerHTML = 'hola mundo desde funcion flecha';     // esto es lo mas usado


// evento click para la fecha
const displayDate = () => document.getElementById('test').innerHTML = Date()

document.getElementById('btn').onclick = displayDate  // no abro y cierro parentesis pq quiero que se ejecute cuando se de la accion del click
                                                      // cuando hago click, se ejecuta linea 10, la funcion para que dispare la accion


// evento para determinar si estan o no habilitadas las cookies
const checkCookies = () => {
    let text = navigator.cookieEnabled ? 'las cookies estan habilitadas' : 'las cookies no estan habilitadas'
    document.getElementById('testeo').innerHTML = text
}


// evento al escribir en un input -> se escribe todo en mayuscula dentro del input
const upperCase = () => {
    const input = document.getElementById('name');
    input.value = input.value.toUpperCase();
}

// evento del mouse sobre un div
const mouseOver = Element => {
    Element.innerHTML = 'estas sobre el div'
}

const mouseOut = Element => {
    Element.innerHTML = 'saliste sobre el div'
}


// evento de mouse para cuando haces click (foco) en un input se queda de color aqua
const changeStyle = Element =>{
    Element.style.background = 'aqua'
}

