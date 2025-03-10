let key

const keydown = ($event) => {
    key = $event.getModifierState('capsLock')
    console.log(key)
    document.getElementById('capsLock').innerHTML = key ? 'ten cuidado ten el caps Lock (mayusculas) habilitado' : ''
}
