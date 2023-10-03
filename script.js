let peticion = new XMLHttpRequest()
peticion.open('GET', 'http://127.0.0.1:5500/header.html', true)
peticion.onreadystatechange = () => {
    if (peticion.readyState == 4 && peticion.status == 200) {
        respuesta = peticion.response
        document.body.insertAdjacentHTML("afterbegin", respuesta)
    }
}
peticion.send()