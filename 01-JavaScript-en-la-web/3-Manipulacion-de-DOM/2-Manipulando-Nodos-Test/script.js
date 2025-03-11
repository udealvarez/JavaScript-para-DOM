// primero creo los elementos
let nodo1 = document.createElement("li")
let nodo2 = document.createElement("li")

// segundo creo los textos
let peras = document.createTextNode("peras")
let manzanas = document.createTextNode("manzanas")

// tercero, agrego a los nodos, los elementos
nodo1.appendChild(peras)
nodo2.appendChild(manzanas)

// cuarto, busco el nodo raiz -> LISTA
let lista = document.getElementById("lista")

// quinto, agrego al nodo padre, los nodos creados con sus textos
lista.appendChild(nodo1)
lista.appendChild(nodo2)




