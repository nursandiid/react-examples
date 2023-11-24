import { useState } from 'react'
import { useRef } from 'react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const sidebarRef = useRef(null)

  function toggle(modal) {
    modal.classList.toggle('-left-1/2')
    modal.classList.toggle('md:-left-1/4')
    modal.classList.add('left-0')

    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="text-center">
        <button
          className={`btn btn-dark transition-all duration-500 ${isOpen ? 'ml-24' : ''}`}
          onClick={() => toggle(sidebarRef.current)}
        >
          {isOpen ? <span>&times;</span> : 'Open Sidebar'}
        </button>
      </div>

      <div
        className="bg-slate-800 fixed top-0 bottom-0 -left-1/2 md:-left-1/4 w-1/2 sm:w-1/4 transition-all duration-500 ease-in-out"
        ref={sidebarRef}
      ></div>
    </>
  )
}
