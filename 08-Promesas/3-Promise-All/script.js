


const promise1 = new Promise( (res, rej)=> {
    setTimeout(() => {
        
        res('respuesta de la promesa 1')

    }, 5000);  // 5 segundos
})

const promise2 = new Promise( (res, rej)=> {
    setTimeout(() => {
        
        res('respuesta de la promesa 2')

    }, 2000);  // 2 segundos
})

const promise3 = new Promise( (res, rej)=> {
    setTimeout(() => {
        
        res('respuesta de la promesa 3')

    }, 3000);  // 3 segundos
})

Promise.all([promise1, promise2, promise3])
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.log(error)
    })