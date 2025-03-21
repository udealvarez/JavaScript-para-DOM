// podemos pasar una variable
const variable = 'Este es otro texto'
const text = `Este es un texto de una variable: ${variable}`

console.log(text)   // ademas de pasar texto plano podemos pasar una variable que contiene texto


// podemos pasar un array
const array = ['HTML', 'JS', 'REACTJS', 'CSS']

console.log(array)
console.log('Array:', array)    // -> string + array | en el parametro



// podemos pasar un objeto 
const objet ={
    name: 'Ude Alvarez',
    job: 'Desarrollador'
}

console.log('Objeto:', objet)   // string + objeto | en el parametro


// css en consola
const css = 'color: red; font-size: 30px'
const css2 = 'color: green; font-size: 30px'

// %c -> nos va a permitir modificar el texto
console.log('%cEste texto va a tener estilo', css)
console.log('%cEste texto directamente esta en la consola', 'color:orange; font-size:60px')
console.log('%cEste texto va a tener estilo y %cEste otro texto de otro estilo', css, css2)


// ASSERT
const a = 5
const b = 4

console.assert(a + b == 11, 'No es igual a 11')


// CLEAR
//console.clear() // -> borramos todo lo que esta en la consola


// COUNT
const arreglo = [1,2,3,4]

for (let i = 0; i < arreglo.length; i++) {

    console.count('Mi array tiene: ')       // por cada vuelta que da el ciclo hace una cuenta e imprime
                                            // cuenta la cantidad de elementos del array
}


// ERROR
console.error('Este es un texto que sirve para mostrar en caso de que fuera un error')

// ERROR EN UN OBJETO
const arrayError = {
    error: 'Mensaje de error'
}

console.error(arrayError)


// INFO
console.info('Este console se usa para mandar informacion')


// WARN
console.warn('Este se usa para dar una ADVERTENCIA sin necesidad de ser un error')

