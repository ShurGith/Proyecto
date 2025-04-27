import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Icon } from '@iconify-icon/react';
import './css/carrito.css'


function Carrito() {
    const { carrito, setCarrito, SetCookies } = useContext(CartContext)

    function cantidadCarrito(id, operacion,) {
        const nuevoCarrito = carrito.map((producto) => {
            if (producto.id === id) {
                if (operacion === 'sumar')
                    producto.count++
                else if (operacion === 'restar' && producto.count >= 1)
                    producto.count--
            }
            return producto
        })
        setCarrito(nuevoCarrito)
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito))
    }


    function eliminarProducto(id) {
        if (window.confirm('Seguro que deseas eliminar el producto?')) {
            const nuevoCarrito = carrito.filter((producto) => producto.id !== id)
            setCarrito(nuevoCarrito)
            localStorage.setItem('carrito', JSON.stringify(nuevoCarrito))
        }
    }

    function eliminarCarrito() {
        if (window.confirm('Seguro que deseas eliminar el carrito?')) {
            localStorage.removeItem('carrito')
            setCarrito([])
        }
    }

    function redondear(num) {
        return Math.ceil(num * 100) / 100;
    }


    return (<>
        <h1 className="titulo-carrito">Carrito</h1>
        {carrito.length === 0 && <h2 className="titulo-carrito">No hay productos en el carrito</h2>}
        {carrito.length > 0 &&
            <div className="div-carrito-page">
                <div className="div-carrito-productos">
                    <div className="div-carrito-producto">
                        <div className="div-carrito-textos">
                            <h2 className="carrito-titulo" >Imagen</h2>
                            <h2 className="carrito-titulo">Producto</h2>
                        </div>
                        <div className="div-carrito-cuentas">
                            <p className="carrito-count">Cantidad</p>
                            <p className="carrito-precio">Precio Unitario</p>
                            <p className="carrito-total">Total</p>
                        </div>
                    </div>
                    {carrito.map((producto) => (
                        <div className="div-carrito-producto" key={producto.id}>
                            <div className="div-carrito-textos">
                                <img className="carrito-imagen" src={producto.thumbnail} alt={producto.title} />
                                <h2 className="carrito-titulo">{producto.title}</h2>
                            </div>
                            <div className="div-carrito-cuentas">
                                <div className="div-carrito-contador">
                                    <Icon icon="mingcute:up-fill"
                                        onClick={() => { cantidadCarrito(producto.id, "sumar") }}
                                        width="25" height="25"
                                        className="carrito-icon" />
                                    <p className="carrito-count">{producto.count}</p>
                                    <Icon icon="mingcute:down-fill"
                                        onClick={() => { cantidadCarrito(producto.id, "restar") }}
                                        width="25" height="25"
                                        className="carrito-icon" />
                                </div>
                                <p className="carrito-precio">{producto.price}</p>
                                <p className="carrito-total">Total: {redondear(producto.price * producto.count)}</p>
                            </div>
                            <div className="div-carrito-eliminar">
                                <Icon icon="oi:trash"
                                    onClick={() => { eliminarProducto(producto.id) }}
                                    width="20" height="20"
                                    className="carrito-icon carrito-eliminar-icon" />
                            </div>
                        </div>
                    ))
                    }
                </div>
                <div className="div-carrito-total">
                    <div className="div-carrito-total-textos">
                        <button className="btn-fin-carrito btn-vaciar" onClick={eliminarCarrito}>
                            <Icon icon="pepicons-print:cart-off" width="24" height="24" />
                            Vaciar Carrito
                        </button>
                    </div>
                    <div className="div-carrito-total-textos">
                        <h2 className="carrito-total-texto">
                            Total: {redondear(carrito.reduce((acc, producto) => acc + producto.price * producto.count, 0))}€
                        </h2>
                        <button className="btn-fin-carrito btn-comprar">
                            <Icon icon="twemoji:shopping-cart" width="30" height="30" />
                            Finalizar Compra
                        </button>
                    </div>
                </div>
            </div>
        }
    </>
    )
}

export default Carrito