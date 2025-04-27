import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

function ItemCount({ producto }) {

    const { carrito, setCarrito } = useContext(CartContext)
    const [count, setCount] = useState(1)


    function sumar() {
        count < producto.stock && setCount(count + 1)
    }
    function restar() {
        count > 1 && setCount(count - 1)
    }
    function agregarAlCarrito() {
        const cesta = { ...producto, count }
        const nuevoCarrito = [...carrito]
        const enCarrrito = nuevoCarrito.find((producto) => producto.id === cesta.id)

        if (enCarrrito)
            enCarrrito.count += count
        else
            nuevoCarrito.push(cesta)

        //SetCookies(true)
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito))
        setCarrito(nuevoCarrito)
    }

    return (
        <>
            <div className='div-btnComprar'>
                <button className="btn-product" onClick={agregarAlCarrito}>
                    Añadir al carrito
                </button>
            </div>
            <div className="container-contador">
                <button className='btnCount' onClick={sumar}>+</button>
                <input type="number" readOnly className='inputCount' value={count} />
                <button className='btnCount' onClick={restar}>-</button>
                <p className='stock'>Stock: {producto.stock}</p>
            </div>
        </>
    )
}

export default ItemCount