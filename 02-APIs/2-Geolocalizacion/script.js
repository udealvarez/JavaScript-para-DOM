const geolocation = document.getElementById('ubicacion')

const showPosition = position =>{
    geolocation.innerHTML = 'La latitud es: ' + position.coords.latitude + '<br> La longitud es: ' + position.coords.longitude;
}

const getLocation = () =>{
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)      // callback -> es una funcion que le pasamos a una funcion como parametro
    }else{
        geolocation.innerHTML = 'La geolocalizacion esta apagada o no es soportada por este navegador'
    }
}