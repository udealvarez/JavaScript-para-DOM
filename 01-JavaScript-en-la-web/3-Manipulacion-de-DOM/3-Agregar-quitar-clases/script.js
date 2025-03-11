const addClass = () => {
    const divClassList = document.getElementById('div').classList
    divClassList.add('red-background')
}

const removeClass = () => {
    const divClassList = document.getElementById('div').classList
    divClassList.remove('red-background')

    // esta es una manera mas simple de escribirlo en una linea
    //document.getElementById('div').classList.remove('red-background')     -> es mejor para no repetir codigo
}

// toggle -> intercambiar estilos, depende si agrega o elimina clase
const toggleClass = () =>{
    document.getElementById('div').classList.toggle('red-background')   
}