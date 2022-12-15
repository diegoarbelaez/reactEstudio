
const cuenta = {
    saldo: 500,
    titular: 'Diego Arbelaez'
}


function getSaldo ( cuenta ){
    return cuenta.saldo;
}

function getTitular ( cuenta){
    return cuenta.titular
}


export const Funcion = () => {
  return (
    <>
    <div>Obtener Saldo Cuenta</div>
    <div>Saldo: {getSaldo(cuenta)}</div>
    <div>Titular: {getTitular(cuenta)}</div>

    </>
  )
}
