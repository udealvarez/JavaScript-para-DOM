const number = prompt('completar con un numero del 1 al 10')

// esto es la promesa
const myPromise = new Promise ((resolve, reject) => {

    /*
        esto se usa para:
            - para lectura de archivos
            - llamada de servicios
            - "cosas que demoren"
    */

    const random = Math.round(Math.random()*10)

    setTimeout(() => {
        //const sucess = true     // sucess -> exitoso

        if (random == number) {
            resolve('ganaste el juego')
        }else if(random > number){
            reject(`el numero ${number} fue mas pequeno que ${random} `)
        }else{
            reject(`el numero ${number} fue mas grande que ${random} `)
        }
    }, 500);// medio segundo
})

document.getElementById('loading').innerHTML = 'cargando...'


// esto es como se resuelve la promesa
myPromise.then(res => {
    document.getElementById('loading').innerHTML = ''
    document.getElementById('response').innerHTML = res
}).catch(error => {
    document.getElementById('loading').innerHTML = ''
    document.getElementById('response').innerHTML = error
})