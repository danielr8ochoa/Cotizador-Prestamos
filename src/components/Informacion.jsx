import { formatearDinero } from "../helpers"
const Informacion = ({meses, total, pago}) => {
  return (
    <>
      <h2 className="text-2xl font-extrabold text-black text-center">
      Resumen <span className="text-sky-500">de pagos</span>
      </h2>

      <p className="text-2xl text-sky-500 text-center font-bold">{meses} meses</p>
      <p className="text-2xl text-black text-center font-bold">Total a pagar: <span className="text-sky-500">{formatearDinero(total)}</span></p>
      <p className="text-2xl text-black text-center font-bold">Mensualidades: <span className="text-sky-500">{formatearDinero(pago)}</span></p>
    </>
  )
}

export default Informacion