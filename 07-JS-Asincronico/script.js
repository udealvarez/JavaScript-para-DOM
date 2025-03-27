const users = ['Vicente', 'Eduardo', 'Junior', 'John']

const sendNotification = (userName) => {
    console.log(`como estas ${userName}? te enviamos una notificacion`)
}

function sendToUser(array, action) {
    array.map(e => action(e))   // MAP -> que haga un barrido de todo lo que recibe el array y en cada uno de los barridos haga una accion
    console.log('La tarea ha concluido')
}



// una funcion que recibe otra funcion
sendToUser(users, sendNotification)     // aca esta la callback -> sendNotification es enviada por parametros
                                        // envio una array y una accion