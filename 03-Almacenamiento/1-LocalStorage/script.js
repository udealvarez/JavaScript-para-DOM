

const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const job = document.getElementById('job')

document.getElementById('welcome').innerHTML = localStorage.getItem('userName') == null ? '' : 'Bienvenido ' + localStorage.getItem('userName')


const save = () => {
    localStorage.setItem('userName', firstName.value + ' ' + lastName.value)
    localStorage.setItem('job', job.value)
}