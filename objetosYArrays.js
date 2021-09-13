// Práctica integradora Objetos y Arrays

// Ejercicio 1: Crear un objeto CuentaBancaria mediante una función constructora que contenga los siguientes datos:
//              Nombre del titular. Número de cuenta. Apellido del titular. Saldo. Movimientos.
console.log("-------Ejercicio 1-------");

function CuentaBancaria (nombreTitular,numeroCuenta,apellidoTitular,saldo) {
    this.nombreTitular = nombreTitular;
    this.numeroCuenta = numeroCuenta;
    this.apellidoTitular = apellidoTitular;
    this.saldo = saldo;
    this.movimientos = [];
    this.totales = [];
    this.mostrarNombre = function(){
        console.log("Nombre completo del titular: " + this.nombreTitular + " " + this.apellidoTitular)
    }
    this.debitarDinero = function(dinero) {
        if (dinero > this.saldo) {
            return "No tiene suficiente saldo para debitar."
        }
        this.movimientos.push('Se debitaron $' + dinero)
        this.totales.push(dinero)
        this.saldo -= dinero
        return this.saldo
    }
    this.acreditarDinero = function(dinero) {
        this.movimientos.push('Se acreditaron $' + dinero)
        this.totales.push(dinero)
        this.saldo += dinero
        return this.saldo
    }
    this.mostrarSaldo = function() {
        console.log('Saldo de la cuenta ' + this.numeroCuenta + ': ')
        console.log(this.saldo)
    }
    this.mostrarMovimientos = function() {
        console.log('Movimientos de la cuenta ' + this.numeroCuenta + ': ')
        console.log(this.movimientos)
    }
    this.movimientosCredito = function(){
        let creditos = []
        this.movimientos.forEach(item => {
            if (item.includes('acreditaron')) {
                creditos.push(item)
            }
        })
        return creditos
    }
    this.movimientosDebito = function(){
        let debitos = []
        this.movimientos.forEach(item => {
            if (item.includes('debitaron')) {
                debitos.push(item)
            }
        })
        return debitos
    }
}

let cuentaUno = new CuentaBancaria ("Melina",001,"Tabor",3000)

// Ejercicio 2: Crear métodos para: Mostrar el nombre completo del titular. Debitar dinero de la cuenta. 
//              (Si no tiene saldo suficiente tiene que mostrar un mensaje por consola y no realizar la operación)
//              Acreditar dinero en la cuenta. Mostrar el saldo de la cuenta. Mostrar el historial de movimientos.
console.log("-------Ejercicio 2-------");

cuentaUno.mostrarNombre()
cuentaUno.debitarDinero(300)
cuentaUno.acreditarDinero(4000)
cuentaUno.mostrarSaldo()
cuentaUno.mostrarMovimientos()

// Ejercicio 3: Crear dos o tres cuentas, mostrar por consola el saldo inicial, realizar operaciones, mostrarlas 
//              por consola y luego mostrar el saldo final.
console.log("-------Ejercicio 3-------");

let cuentaDos = new CuentaBancaria ("Agustin",002,"Cavalotto",20000)
let cuentaTres = new CuentaBancaria ("Nicolas",003,"Guglielmo",15000)

console.log("El saldo inicial de las cuentas es: ")
cuentaUno.mostrarSaldo()
cuentaDos.mostrarSaldo()
cuentaTres.mostrarSaldo()

cuentaDos.debitarDinero(100)
cuentaTres.acreditarDinero(1500)
cuentaTres.debitarDinero(200)
cuentaDos.acreditarDinero(100000)
cuentaUno.acreditarDinero(350)

cuentaUno.mostrarMovimientos()
cuentaDos.mostrarMovimientos()
cuentaTres.mostrarMovimientos()

console.log("El saldo final de las cuentas es: ")
cuentaUno.mostrarSaldo()
cuentaDos.mostrarSaldo()
cuentaTres.mostrarSaldo()

// Ejercicio 4: Luego de realizar los movimientos de crédito y débito, mostrar un historial de movimientos 
//              solo de créditos y otro solo de débitos y mostrarlos por consola.
console.log("-------Ejercicio 4-------")

console.log(cuentaUno.movimientosCredito())
console.log(cuentaDos.movimientosCredito())
console.log(cuentaTres.movimientosCredito())

console.log(cuentaUno.movimientosDebito())
console.log(cuentaDos.movimientosDebito())
console.log(cuentaTres.movimientosDebito())

// Ejercicio 5: Calcular y mostrar en consola el total de dinero debitado y el total de dinero acreditado.

console.log("-------Ejercicio 5-------")

let totalAcreditado = function(cuenta){
    let totalcreditos = 0
    let i = 0
    cuenta.movimientos.forEach(item => {
        if (item.includes('acreditaron')) {
            totalcreditos += cuenta.totales[i]
        }
        i ++
    })
    return totalcreditos
}

let totalDebitado= function(cuenta){
    let totaldebitos = 0
    let i = 0
    cuenta.movimientos.forEach(item => {
        if (item.includes('debitaron')) {
            totaldebitos += cuenta.totales[i]
        }
        i ++
    })
    return totaldebitos
}

console.log('El total acreditado es: $'+ (totalAcreditado(cuentaUno)+totalAcreditado(cuentaDos)+totalAcreditado(cuentaTres)))
console.log('El total debitado es: $'+ (totalDebitado(cuentaUno)+totalDebitado(cuentaDos)+totalDebitado(cuentaTres)))