
import { Route, Routes } from 'react-router-dom'
import Hero from '../components/Hero'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Firstpage from '../pages/Firstpage'
import Products from '../pages/Product' 
import ProductDetailPage from '../pages/ProductDetail'
import Inspiration from '../pages/Inspiration'
import About from '../pages/About'
import Pagenotfound from '../pages/Pagenotfound'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Firstpage />
    </>
  )
}

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />

      <Route path="/inspiration" element={<Inspiration />} />
      <Route path="/about" element={<About />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<Pagenotfound />} />

    </Routes>
  )
}

export default Mainroutes