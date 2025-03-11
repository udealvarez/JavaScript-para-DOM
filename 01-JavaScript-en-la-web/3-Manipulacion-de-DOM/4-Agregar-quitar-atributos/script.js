const paragraph1 = document.getElementById('paragraph1')
const paragraph2 = document.getElementById('paragraph2')

// IF TERNARIO
let text = paragraph1.getAttribute('class') ? paragraph1.getAttribute('class') : paragraph2.getAttribute('class')
                                            // si paragraph1 tien algo, pone eso. SINO pone el de paragraph2

document.getElementById('atribute').innerHTML = text


// otro ejemplo 2
const paragraph3 = document.getElementById('paragraph3')
let textO = paragraph3.getAttribute('class')
paragraph3.setAttribute('class','red-background') // (tipo de atriburo, valor del atriburo)
document.getElementById('atribute').innerHTML = text

// otro ejemplo 3
const input = document.getElementById('input')
input.setAttribute('value', 'JUNIOR') // yo le estoy asignado a este input un value y se esa forma le doy valor
                    // esto nos sirve para cargar los datos de un usuario que ya sabemos


// para remover el atributo del ejemplo 3
const inputUno = document.getElementById('input-1')
inputUno.removeAttribute('value')