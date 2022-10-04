// Pratica guiada I

//Criar nova tag li
const itemNovo = document.createElement("li")

//criando conteudo
const conteudoItemNovo = document.createTextNode("Item 0")


//adicionando conteudo na tag
itemNovo.appendChild(conteudoItemNovo)

//definir conteudo de referencia
const elementoReferencia = document.getElementById("lista")

//adicionar na tela
elementoReferencia.insertAdjacentElement("afterbegin", itemNovo)

//-------------------------------------------------------------------------------------------------
//inserindo no final

const itemNovo2 = document.createElement("li")

const conteudoItemNovo2 = document.createTextNode("Item 5")

itemNovo2.appendChild(conteudoItemNovo2)

const elementoReferencia2 = document.getElementById("lista")

elementoReferencia2.insertAdjacentElement("beforeend", itemNovo2)
