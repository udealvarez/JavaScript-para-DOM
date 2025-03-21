console.log('hola mundo')


// GROUP -> agrupa distintos console's
console.groupCollapsed('Mensajes importante agrupados') // -> abro el grupo  |  para poner nombre va en el parametro  | groupCollapsed = agrupado

console.log('este es otro "hola mundo"')
console.log('otro mensaje')
console.warn('advertencia')
console.error('error')

console.groupEnd()                                      // -> cierro el grupo


console.log('Esto esta adentro?')


// CONSOLE TABLE
const array = ['HTML', 'CSS', 'JS', 'REACTJS']
console.table(array)


// TIME
console.time('Cuanto demora 2 bucles?')                 // -> abro el tiempo

for (let i = 0; i < 10000; i++) {

    for (let j = 0; j < 5000; j++) {
        
    }    
}

console.timeEnd('Cuanto demora 2 bucles?')              // -> cierro el tiempo




// TRACE -> RASTREAR | nos sirve para ver donde pincha en el caso de un error ya que vemos cual es el camino que hace
const otherMethod2 = () => {
    console.trace()
}

const otherMethod = () => {
    otherMethod2()
}

const myFunction = () =>{
    otherMethod();
}

