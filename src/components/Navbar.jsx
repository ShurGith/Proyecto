import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Icon } from '@iconify-icon/react';
import './navbar.css'

function Navbar() {
    const { calcTotal } = useContext(CartContext)
    return (
        <nav className="navbar">
            <NavLink to="/" className="logo-link">ReactCurso</NavLink>
            <ul className="menu">
                <li><NavLink to="/" className="menu-link">Inicio</NavLink></li>
                <li><NavLink to="/productos" className="menu-link">Productos</NavLink></li>
                <li><NavLink to="/nosotros" className="menu-link">Nosotros</NavLink></li>
                <li><NavLink to="/contacto" className="menu-link">Contacto</NavLink></li>
            </ul>
            <div className="nav-carrito">
                <div className="carrito">
                    {calcTotal() > 0 &&
                        <NavLink to="/carrito" className="carrito-link">
                            <Icon className="icon-carrito" icon="material-symbols:shopping-cart" />
                            <p className="carrito-cantidad">{calcTotal()}</p>
                        </NavLink>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar