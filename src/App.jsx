import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'
import UnicoDetails from './components/UnicoDetails'
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import Nosotros from './pages/Nosotros'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { CartContext } from './context/CartContext'
import Carrito from './components/Carrito'
//import Cookies from 'js-cookie';
//import { chekarCookie } from './helpers/cookieHelpler'

function App() {

  const carritoInicial = JSON.parse(localStorage.getItem('carrito')) || [];
  const [carrito, setCarrito] = useState(carritoInicial);

  function calcTotal() {
    return carrito.reduce((acc, producto) => acc + producto.count, 0)
  }
  /*
    function SetCookies(eliminar = false) {
  
      if (eliminar) {
        Cookies.remove('carrito')
      } else {
        Cookies.set('carrito', JSON.stringify(carrito))
      }
    }
  
  
    if (chekarCookie()) {
      setCarrito([])
      const carritoIni = JSON.parse(Cookies.get('carrito'))
      Cookies.remove('carrito')
      setCarrito(carritoIni)
    } else {
      SetCookies()
    }
  */
  return (
    <CartContext.Provider value={{ carrito, setCarrito, calcTotal }}>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<UnicoDetails />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/' element={<Home />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='*' element={<h1>404</h1>} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>

    </CartContext.Provider>
  )
}

export default App
