import { Link } from 'react-router-dom'
import reactSvg from '../../assets/react.svg'

export default function NavBar() {
  const menus = [
    { href: '/smooth-scroll', label: 'Smooth Scroll' },
    { href: '/student', label: 'Student' },
    { href: '/toggle-modal', label: 'Modal' },
    { href: '/toggle-sidebar', label: 'Toggle Sidebar' }
  ]

  return (
    <div className="flex flex-wrap items-center py-2">
      <div className="grow text-center sm:text-start">
        <Link to="/" className="inline-block">
          <img src={reactSvg} alt="react" />
        </Link>
      </div>
      <ul className="space-x-2 text-center">
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
    </div>
  )
}
