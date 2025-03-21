
const action2 = () => {
    const interval = setInterval(() => {
        console.log('Esta accion sale del boton')
    }, 1000);           // repite la accion en INTERVALOS de 2 segundos 

    setTimeout(() => {
        console.log('Limpiamos el intervalo')
        clearInterval(interval)     // limpiar el intercalo
    }, 5000);                  // despues de 5 segundos

}