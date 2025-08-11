

const myPromise = new Promise ((resolve, reject) => {

    /*
        esto se usa para:
            - para lectura de archivos
            - llamada de servicios
            - "cosas que demoren"
    */

    setTimeout(() => {
        const sucess = true     // sucess -> exitoso

        if (sucess) {
            resolve('esta operacion fue exitosa')
        }else{
            reject('fallo la operacion')
        }
    }, 5000);// 5 segundos
})

document.getElementById('loading').innerHTML = 'cargando...'

myPromise.then(res => {
    document.getElementById('loading').innerHTML = 'cargando...'
    console.log(res)
}).catch(error => {
    console.error(error)
}).finally(
    console.log('esto se ejecuta siempre')
)