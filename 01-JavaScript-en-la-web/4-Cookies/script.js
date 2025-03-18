
const user = getCookies('username')

function getCookies(cname){
    let name = cname + "=";
    let decodeCookie = decodeURIComponent(document.cookie);
    let ca = decodeCookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];

        while (c.charAt(name) == 0) {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length. c.length);
        }

        return "";        
    }

}

confirm(`Este es su nombre de usuario? ${user}`)