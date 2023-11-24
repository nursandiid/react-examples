import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/ui/NavBar'
import Home from './pages/home'
import SmoothScroll from './pages/smooth-scroll'
import Student from './pages/student'
import OpenModal from './pages/open-modal'
import ToggleSidebar from './pages/toggle-sidebar'

function App() {
  return (
    <>
      <div className="container m-auto px-4">
        <BrowserRouter>
          <NavBar />

          <main className="py-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/smooth-scroll" element={<SmoothScroll />} />
              <Route path="/student" element={<Student />} />
              <Route path="/toggle-modal" element={<OpenModal />} />
              <Route path="/toggle-sidebar" element={<ToggleSidebar />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
