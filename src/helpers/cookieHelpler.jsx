

function obtenerCookie(nombre) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const [clave, valor] = cookies[i].split('=');
        if (clave === nombre) {
            return valor;
        }
    }
    return null;
}


const chekarCookie = () => {
    if (obtenerCookie('carrito') !== null)
        if (obtenerCookie('carrito').length > 4)
            return true
    return false
}

export { obtenerCookie, chekarCookie }