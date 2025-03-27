document.addEventListener('DOMContentLoaded', function(){       // DOMContentLoaded -> escucha apenas carga el documento
                                                                // addEventListener -> escucha
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    loginForm.addEventListener ('submit', function(event){      // addEventListener -> necesitamos escuchar del loginForm

        event.preventDefault();     // preventDefault -> lo hacemos para que NO se actualice la pagina
        validateForm();
    })     
        
    emailInput.addEventListener('blur', function(){                   // blur -> cuando salimos del formulario va a escuchar este evento

        validateEmail()
    })

    emailInput.addEventListener('change', function(){                 // change -> cualquier cambio que haya va a limpiar el error

        clearError(emailError)        
    })

    passwordInput.addEventListener('change', function(){              // change -> cualquier cambio que haya va a limpiar el error

        clearError(passwordError)        
    })

    confirmPasswordInput.addEventListener('change', function(){       // change -> cualquier cambio que haya va a limpiar el error

        clearError(confirmPasswordError)        
    })

    function validateForm() {
        
        const isValidEmail = validateEmail()
        const isValidPassword = validatePassword()
        const passwordMatch = validatePasswordMatch()

        // estos metodos de VALIDATE devuelven un bool

        if (isValidEmail && isValidPassword && passwordMatch) {
            // guardar mail en el local storage y generar un JSON en consola
            alert('Has ingresado con exito')
        }

    }

    function validateEmail() {
        
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        const emailValue = emailInput.value.trim()                  // trim -> elimina espacios vacios al comienzo y al final del input
                                                                    //          limpia lo que haya delante y atras de la palabra ingresada en el input


        if (!emailRegex.test(emailValue)) {     // si no pasa la validacion del emailRegex
            showError(emailError, 'Ingresa un Emial valido')
            return false;
        }

        return true;
    }

    function validatePassword() {
        
        const passwordValue = passwordInput.value.trim();

        if (passwordValue.length < 6) {
            showError(passwordError, 'Ingresa una constrasena de al menos 6 caracteres')
            return false;
        }

        return true;
    }

    function validatePasswordMatch() {
        
        const passwordValue = passwordInput.value.trim();
        const confirmPasswordValue = confirmPasswordInput.value.trim()

        if (passwordValue != confirmPasswordValue) {
            showError(confirmPasswordError, 'Las contrasenas no coinciden')
            return false;
        }
        return true;
    }

    function showError(errorElement, message) {
        
        errorElement.innerHTML = message;
        errorElement.style.display = 'block';
    }

    function clearError(errorElement, message) {
        
        errorElement.innerHTML = '';
        errorElement.style.display = 'none';
    }



}) 