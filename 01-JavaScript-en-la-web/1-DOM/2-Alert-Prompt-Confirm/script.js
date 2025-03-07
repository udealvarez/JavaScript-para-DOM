// uso de ALERT
alert('Este mensaje esta hecho desde JavaScript')


// uso de CONFIRM
confirm('Hiciste los cursos de maquetacion web y programacion imperativa?')     // en esta linea hace lo mismo que el alert


// uso de CONFIRM con variable -> nos da un booleano
const ready = confirm('Hiciste los cursos de maquetacion web y programacion imperativa?')   // boolean
console.log(ready)      // podemos imprimir el mensaje por medio del console.log


// uso del PROMPT -> se usa para preguntar algo, al tener el promp puedo ingresar texto y se almacena en la variable
const respuesta = prompt('cual es tu lenguaje de programacion favorito?', 'JavaScript')
console.log(respuesta)