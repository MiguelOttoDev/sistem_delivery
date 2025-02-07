import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar/NavBar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOlder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    
    <div className='app'>
    <NavBar/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/order' element={<PlaceOlder />} />
      <Route path='*' element={"404"} />
    </Routes>

    </div>
    <Footer/>
    </>
  )
}

export default App
