

const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const job = document.getElementById('job')

document.getElementById('welcome').innerHTML = localStorage.getItem('userName') == null ? '' : 'Bienvenido ' + localStorage.getItem('userName')

// CONTROL + F2 -> seleccionando localStorage y usamos el atajo, nos selecciona todos los localStorage

const save = () => {
    localStorage.setItem('userName', firstName.value + ' ' + lastName.value)
    localStorage.setItem('job', job.value)
}


const logOut = () =>{
//  localStorage.removeItem('userName')     -> con removeItem podemos borrar 1
    localStorage.clear()
    sessionStorage.clear()              //  -> con clear borramos todos los inputs de ingreso de datos
}    

