import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function Nosotros() {

    const { carrito } = useContext(CartContext)
    console.log(carrito)

    return (
        <div>
            <h1>nosotros</h1>
            <h2>Carrito: {carrito.title}</h2>
            <h2>Precio: {carrito.price}</h2>
            <h2>Cantidad: {carrito.cantidad}</h2>
        </div>
    )
}

export default Nosotros