import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import reactSvg from './assets/react.svg'
import Product from './pages/product'
import { Sun } from 'react-feather'
import { Moon } from 'react-feather'
import { useToggleThemeContext } from './context/toggle-theme.context'

function App() {
  const [theme, toggleTheme] = useToggleThemeContext()

  return (
    <div className="dark:bg-slate-800 h-screen dark:text-slate-200">
      <div className="container px-4 m-auto md:max-w-5xl">
        <BrowserRouter>
          <ul className="flex items-center py-2">
            <Link to="/" className="inline-block mr-4">
              <img src={reactSvg} alt="react" />
            </Link>
            <Link
              href="javascript:void(0)"
              className="inline-block ml-auto"
              onClick={toggleTheme}
            >
              {theme === 'light' ? <Moon /> : <Sun />}
            </Link>
          </ul>

          <Routes>
            <Route path="/" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
