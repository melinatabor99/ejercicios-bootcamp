// Repaso de JavaScript (Práctica integradora) --> Melina Tabor

// Ejercicio 1: Crear una función constructora la cual vamos a llamar Computadora
function Computadora (ram,cpu,disco,monitor,gpu){
    this.ram = ram;
    this.cpu = cpu;
    this.disco = disco;
    this.monitor = monitor;
    this.gpu = gpu;
}


// Ejercicio 2: Crear 5 computadoras distintas y guardarlas (Array) de manera que luego podamos consultar cuántas computadoras tenemos y poder mostrarlas 
//              por consola. Además queremos ver el detalle de cada computadora por consola.
console.log("-------Ejercicio 2-------");
let computadoras = [];

computadoras.push( new Computadora ('16GB', 'AMD Ryzen 9 5900X', 'SSD', 'LED', false))
computadoras.push( new Computadora ('8GB', 'AMD Ryzen 7 5800X', 'HDD', 'IPS', true))
computadoras.push( new Computadora ('32GB', 'Intel Core i9-11900K', 'M.2', 'LCD', false))
computadoras.push( new Computadora ('64GB', 'Intel Core i7-11700K.', 'HDD', 'LED', false))
computadoras.push( new Computadora ('6GB', 'Intel Core i7-11700KF', 'SSD', 'LED', true))

function consultarComputadoras (computadoras) {
    console.log("La cantidad de computadoras es: " + computadoras.length)
    console.log("El detalle por computadora es el siguiente: " )
    console.log(computadoras)
}
consultarComputadoras(computadoras);


// Ejercicio 3: Crear un nuevo Array a partir del primero, donde vamos a guardar solamente las computadoras con gpu.
console.log("-------Ejercicio 3-------");
let computadorasConGpu = computadoras.filter(computadoras => computadoras.gpu == true);

console.log("Las computadores que poseen GPU son: ");
console.log(computadorasConGpu);


// Ejercicio 4: Crear una función que calcule cuántos litros de nafta gasta un auto que consume 2 litros cada 100km, ingresando por parámetro 
//              la cantidad de kilómetros del recorrido a realizar. Luego crear una función que, a partir de ese dato, devuelva cuánto significa 
//              eso en pesos ingresando por parámetro el precio del litro de nafta.
console.log("-------Ejercicio 4-------");
function calcularLitrosNafta (cantKm) {
    return (cantKm * 2)/100
}
console.log("Gasta " + calcularLitrosNafta(89) + " litros de nafta");

// Misma funcion resumida:
// let calcularLitrosNafta = (cantKm) => (cantKm*2)/100;
// console.log(calcularLitrosNafta(89))

function calcularPrecioNafta(precio,litros) {
    return  precio * litros 
}

let litros = calcularLitrosNafta(150);
console.log("El precio de " + litros + " litros de nafta es: $" + calcularPrecioNafta(40,litros));


// Ejercicio 5: Crear un array que contenga números del 1 al 100. Retornar un nuevo array que contenga todos los números 
//              multiplicados por dos
console.log("-------Ejercicio 5-------");

let array = [];

for (let i=0; i<100; i++){
    array.push(i+1)
};

let arrayNuevo = array.map (function(array) {
    return array * 2
})
console.log(arrayNuevo);


// Ejercicio 6: Del array que devuelve el ejercicio número 5, filtrar los que sean mayores a 5
console.log("-------Ejercicio 6-------");

let mayoresCinco = arrayNuevo.filter(arrayNuevo => arrayNuevo > 5);
console.log(mayoresCinco);


// Ejercicio 7: Del array que devuelve el ejercicio 6, buscar el primero que sea mayor a 10
console.log("-------Ejercicio 7-------");

let mayorDiez = mayoresCinco.find(mayoresCinco => mayoresCinco > 10);
console.log(mayorDiez);


// Ejercicio 8:  Dado el siguiente array filtremos a los pokemones con poder menor a 10
console.log("-------Ejercicio 8-------");

let pokemones = [ { nombre: 'pikachu', poder: 12 }, { nombre: 'bulbasaur', poder: 6 }, { nombre: 'charizard', poder: 19 }, { nombre: 'squirtle', poder: 3 }, { nombre: 'mewto', poder: 6 }, ]
let pokemonesPoder = pokemones.filter(pokemones => pokemones.poder > 10);
console.log(pokemonesPoder);
