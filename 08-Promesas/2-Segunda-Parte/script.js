// esto es la promesa
const myPromise = new Promise ((resolve, reject) => {

    /*
        esto se usa para:
            - para lectura de archivos
            - llamada de servicios
            - "cosas que demoren"
    */

    // resolve -> SE RESUELVE POSITIVO

    const random = Math.round(Math.random()*10)

    setTimeout(() => {
        resolve(random)
    }, 500);// medio segundo
})

const isEven = number =>{
    const even = number % 2 == 1 ? 'es impar' : 'es par'

    document.getElementById('loading').innerHTML = ''
    document.getElementById('response').innerHTML = `elumero numero generado ${number} ${even}`
}

document.getElementById('loading').innerHTML = 'cargando...'


// esto es como se resuelve la promesa
myPromise.then(
    isEven      // LE PASO COMO ARGUMENTO UNA FUNCION
).catch(error => {
    document.getElementById('loading').innerHTML = ''
    document.getElementById('response').innerHTML = error
})