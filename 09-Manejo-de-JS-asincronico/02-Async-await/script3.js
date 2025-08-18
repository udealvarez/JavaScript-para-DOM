const changetext = async () => {

    const myPromise = new Promise(resolve => {
        
        setTimeout(() => {
            resolve('hola mundo')       
        }, 3000);
    })

    document.getElementById('async-text').innerHTML = await myPromise
}

changetext()