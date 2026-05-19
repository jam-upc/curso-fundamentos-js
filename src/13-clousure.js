// Clousure

function crearCuentaBancaria (saldoInicial){
    let saldo = saldoInicial;

    return {
        depositar(cantidad){
            saldo += cantidad;
            return `Depositado ${cantidad}$, Saldo actual: ${saldo}$`
        },
        retirar(cantidad){
            if (cantidad > saldo){
                return 'Fondos insuficientes';
            }else{
                saldo -= cantidad;
                return `Retirado ${cantidad}$ Saldo actual: ${saldo}$`;
            }
        },
        consultarSaldo(){
            return `Saldo: ${saldo}$`;
        }
    }
}


const miCuenta = crearCuentaBancaria(1000);
console.log(miCuenta.consultarSaldo);
console.log(miCuenta.depositar(500));
console.log(miCuenta.retirar(200));
