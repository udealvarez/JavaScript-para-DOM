// querySelectorAll = seleccion completa de las consultas, por lo cual vamos a poner una consulta, un string y en base a eso va a hacer una consulta

const saludations = document.querySelectorAll('p.saludo')   // esto seria lo P que tengan clase saludo

document.getElementById('test').innerHTML = 'En este parrafo vamos a estar escribiendo el primero de los saludos, el cual es: '
    + saludations[0].innerHTML  // es CERO por que es el primer elemento de un array
            // al [0] solo toma el de la posicion 0, es decir, "HOLA MUNDO"


const form = document.forms['form1'];
let text = '';

for (let i = 0; i < form.length; i++) {     // el FORM en este caso es un ARRAY de INPUTS, es un array de todo lo que tiene el formulario en el html
    text += form.elements[i].value + '<br>';    
}

document.getElementById('testeo').innerHTML = text;

