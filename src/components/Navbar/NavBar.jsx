import './NavBar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { useState } from 'react'

function NavBar() {

  const [menu, setMenu] = useState('home')

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className='logo' />
      <ul className="navbar-menu">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "activate" : ""}>Home</li>
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? "activate" : ""}>Menu</li>
        <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "activate" : ""}>Mobile-app</li>
        <li onClick={() => setMenu("contato")} className={menu === "contato" ? "activate" : ""}>Contato</li>
      </ul>
      <ul className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Login</button>
      </ul>
    </div>
  )
}

export default NavBar
