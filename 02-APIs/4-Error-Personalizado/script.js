const doValidation = () => {
    const name = document.getElementById('name');
    document.getElementById('error').innerHTML = name.checkValidity() ? 'El nombre esta correcto' : 'El nombre es requerido, debes completar este campo'
}

