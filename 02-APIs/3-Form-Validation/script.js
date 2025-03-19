const doValidation = () => {
    const number = document.getElementById('number');
    document.getElementById('error').innerHTML = number.checkValidity() ? 'El numero esta correcto' : number.validationMessage
}

