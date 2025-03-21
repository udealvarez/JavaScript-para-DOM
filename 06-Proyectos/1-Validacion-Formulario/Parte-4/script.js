const submitFunction = (event) =>{
    
    if (!validarFormulario()) {
        event.preventDefault()          // SE PREVIENE LA ACTUALIZACION DE LA WEB
    }else{
        event.preventDefault() 
        alert(
            'Los datos enviados fueron: \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n' +
            'Apellido: ' + document.getElementById('apellido').value + '\n' +
            'Documento: ' + document.getElementById('documento').value + '\n' +
            'Email: ' + document.getElementById('email').value + '\n' +
            'Edad: ' + document.getElementById('edad').value + '\n' +
            'Actividad: ' + document.getElementById('actividad').value + '\n' +
            'Nivel de estudio: ' + document.getElementById('nivelEstudio').value + '\n' 
        )
    }
}

document.getElementById('formulario').addEventListener('submit', submitFunction)        // ESCUCHA EL ENVIO DEL FORMULARIO

function validarFormulario() {
    
    // VALIDACION DE LOS CAMPOS DE TEXTOS -> INPUTS TYPE TEXT -> NOMBRE , APELLIDO , DOCUMENTO
    const camposTexto = document.querySelectorAll('input[type="text"]')    
                           // querySelectorAll -> llama a todos los inputs type="text" y crea una coleccion en camposTexto

    let validacionCorrecta = true;

    // Al tener varios inputs type text lo que hacemos es recorrer cada uno con un FOREARCH
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

    // VALIDACION DE EMAIL
    const email = document.getElementById('email')
    let errorEmail = document.getElementById('errorEmail')

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {   // REGEX para el campo del email
        ocultarError(errorEmail)
    }else{
        mostrarError(errorEmail, 'Ingresar un correo electronico valido')
    }

    // VALIDACION DE EDAD
    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad')

    if (edad.value < 18) {
        mostrarError(errorEdad, 'Debes ser mayor de 18 anos para registrarte.')
        validacionCorrecta = false
    }else{
        ocultarError(errorEdad)
    }


    // VALIDACION DE ACTIVIDAD
    const actividad = document.getElementById('actividad')
    const errorActividad = document.getElementById('errorActividad')

    if (actividad.value == '') {
        mostrarError(errorActividad, 'Por favor seleccionar una actividad')
        validacionCorrecta = false
    }else{
        ocultarError(errorActividad)
    }


    // VALIDACION DE NIVEL DE ESTUDIO
    const nivelEstudio = document.getElementById('nivelEstudio');
    const errorNivelEstudio = document.getElementById('errorNivelEstudio');

    if (nivelEstudio.value == '') {
        mostrarError(errorNivelEstudio, 'Por favor seleccionar un nivel de estudio')
        validacionCorrecta = false
    }else{
        ocultarError(errorNivelEstudio)
    }


    // VALIDAR LOS TERMINOS Y CONDICIONES
    const aceptoTerminos = document.getElementById('aceptoTerminos')
    const errorAceptoTerminos = document.getElementById('errorAceptoTerminos')

    if (!aceptoTerminos.checked) {
        mostrarError(errorAceptoTerminos, 'Debes aceptar los terminos y condiciones')
        validacionCorrecta = false
    }else{
        ocultarError(errorAceptoTerminos)
    }

    return validacionCorrecta               // esto dira si el formulario completo es o no valido

}

const mostrarError = (elemento, mensaje) =>{
    elemento.textContent = mensaje;
    elemento.style.display = "block"
}

const ocultarError = (elemento) =>{
    elemento.textContent = '';
    elemento.style.display = "none"
}

