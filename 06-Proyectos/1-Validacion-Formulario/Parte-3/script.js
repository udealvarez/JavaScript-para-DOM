const submitFunction = (event) =>{
    event.preventDefault()          // SE PREVIENE LA ACTUALIZACION DE LA WEB
    validarFormulario()
}

document.getElementById('formulario').addEventListener('submit', submitFunction)        // ESCUCHA EL ENVIO DEL FORMULARIO

function validarFormulario() {
    
    let camposTexto = document.querySelectorAll('input[type="text"]')    
                           // querySelectorAll -> llama a todos los inputs type="text" y crea una coleccion en camposTexto

    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1))    
                                                    // linea 15 significa -> la palabra error + id con la primera mayuscula
                                                    // charAt -> se concentra en el primer caracter
                                                    // toUpperCase -> para poner letras en mayusculas
        if (campo.value.length == '') {
            mostrarError(errorCampo, 'Este campo es requerido')
            validacionCorrecta = false;
        }else if (campo.value.length > 0 && campo.value.length < 3) {
            mostrarError(errorCampo, 'Este campo debe tener al menos 3 caracteres')
            validacionCorrecta = false;
        }
        else{
            ocultarError(errorCampo)
        }
    })
}

const mostrarError = (elemento, mensaje) =>{
    elemento.textContent = mensaje;
    elemento.style.display = "block"
}

const ocultarError = (elemento) =>{
    elemento.textContent = '';
    elemento.style.display = "none"
}

