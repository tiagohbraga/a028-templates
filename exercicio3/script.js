function checaCaps(event){
    const paragrafo = document.getElementById("mensagem")
        if (event.shiftKey) {
            paragrafo.innerHTML = "ATENÇÃO: SEGURANADO A TECLA SHIFT"
        }else {
            paragrafo.innerHTML = ""
        }
}