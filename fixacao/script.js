function insereItem(event){
    
    const conteudoNovaFruta= document.createElement("li")
        console.log(conteudoNovaFruta)

    const input = document.getElementById("meu-input")
        console.log(input)

    conteudoNovaFruta.innerHTML=input.value

    let referencia = document.getElementById("lista")
    referencia.insertAdjacentElement("beforeend", conteudoNovaFruta)

    input.value = ""
    
}