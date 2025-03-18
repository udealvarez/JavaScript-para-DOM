
const clickMe = () => {
    //const height = window.innerHeight
    //const width = window.innerWidth
    //console.log('height: ', height, 'width: ', width)

    open('https://www.digitalhouse.com/ar', 'Digital House')
}

const historyBack = () => history.back()
const historyForward = () => history.forward()


document.getElementById('screenH').innerHTML = screen.height + 'px'
document.getElementById('screenW').innerHTML = screen.width + 'px'
document.getElementById('screenC').innerHTML = screen.colorDepth + 'bits'

document.getElementById('URL').innerHTML = location.href

document.getElementById('btn').addEventListener('click', historyBack)
document.getElementById('btn-2').addEventListener('click', historyForward)

document.getElementById('cookies').innerHTML = navigator.cookieEnabled ? 'Si' : 'No'        // IF TERNARIO


