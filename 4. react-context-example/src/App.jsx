import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import reactSvg from './assets/react.svg'
import Home from './pages/home'
import Product from './pages/product'
import Countdown from './pages/countdown'
import { Sun } from 'react-feather'
import { Moon } from 'react-feather'
import { useToggleThemeContext } from './context/toggle-theme.context'

function App() {
  const menus = [
    { href: '/products', label: 'Product' },
    { href: '/countdown', label: 'Countdown' }
  ]
  const [theme, toggleTheme] = useToggleThemeContext()

  return (
    <div className="dark:bg-slate-800 h-screen dark:text-slate-200">
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
                className="rounded-lg px-3 py-1 hover:bg-slate-200 dark:hover:bg-slate-600 duration-300 inline-block"
              >
                {menu.label}
              </Link>
            ))}
            <Link
              href="javascript:void(0)"
              className="inline-block ml-auto"
              onClick={toggleTheme}
            >
              {theme === 'light' ? <Moon /> : <Sun />}
            </Link>
          </ul>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/countdown" element={<Countdown />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
