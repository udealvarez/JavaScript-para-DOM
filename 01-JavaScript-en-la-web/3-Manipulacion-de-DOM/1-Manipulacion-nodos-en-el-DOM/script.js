// creando un nodo de parrafo
const paragraph = document.createElement('p')

// aca creamos un elemento o nodo de texto
const node = document.createTextNode('Este es contenido nuevo')     // el nodo tiene texto

// incorporamos el elemento de texto al nodo del parrafo
paragraph.appendChild(node) // en el parrafo vamos a incorporar este nodo del texto
// appendChild -> incorporar un hijo

// en la variable container tenemos el DIV
const container = document.getElementById('div1')
const p1 = document.getElementById('p1')
container.insertBefore(paragraph, p1)   // insertar antes del p1 ( el parrafo, antes del p1)
// insertBefore -> insertar antes


// para borrar 2 elementos se puede hacer de 2 maneras
const p2 = document.getElementById('p2')

// manera 1
p2.remove()

// manera 2
container.removeChild(p1)

// reemplazar uno por otro
const p3 = document.getElementById('p3')
container.replaceChild(paragraph, p3)   // (elemento reeplazado, texto a reemplar)


