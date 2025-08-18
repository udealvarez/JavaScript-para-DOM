function changetext(text){
    document.getElementById('async-text').innerHTML = text
}

//se ve como una funcion normal usando ASYNC
async function myFunction() { // una funcion asincrona devuelve una promesa
    return 'hola mundo'
}

// Se usa THEN csi es positivo como una promesa 
myFunction().then(
    function(value){
        changetext(value)
    }
)

