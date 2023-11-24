import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import reactSvg from './assets/react.svg'
import Home from './pages/home'
import Product from './pages/product'
import Countdown from './pages/countdown'

function App() {
  const menus = [
    { href: '/products', label: 'Product' },
    { href: '/countdown', label: 'Countdown' },
  ]

  return (
    <div className="container px-4 m-auto md:max-w-5xl">
      <BrowserRouter>
        <ul className="flex items-center py-2">
          <Link to="/" className="inline-block mr-4">
            <img src={reactSvg} alt="react" />
          </Link>
          {menus.map((menu) => (
            <Link
              key={menu.href}
              to={menu.href}
              className="rounded-lg px-3 py-1 hover:bg-slate-200 duration-300 inline-block"
            >
              {menu.label}
            </Link>
          ))}
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/countdown" element={<Countdown />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
