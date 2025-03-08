document.getElementById('test').innerHTML = 'Hola mundo desde JS'
    //  'test' = se selecciona el nodo por ID
    //  getElementById = tomar un elemento por identificador
    //  innerHTML = vamos a ingresar un nuevo valor al html -> <P> y le ponemos una cadena de string

console.log(document.getElementById('test'))            // esto selecciona uno solo y por eso es modificable

console.log(document.getElementsByClassName('test1'))    // esto selecciona VARIOS        
                    //   ELEMENTOS
                    //   esto es un array de ELEMENTOS

console.log(document.getElementsByTagName('p'))         // selecciona todos los P, sea por ID o CLASS



document.getElementById('testeo').style.color = 'blue'     // JS permite manipular estilos ademas de CSS

document.getElementById('testeoDos').setAttribute('class', 'colorado')      // al poner una clase de parametro, el archivo CSS lo interpreta