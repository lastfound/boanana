import { useState, useEffect } from 'react'
import logoImg from '../assets/logo boanana.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (e) => {
      const ham = document.getElementById('hamburger')
      const drawer = document.getElementById('navDrawer')
      if (ham && drawer && !ham.contains(e.target) && !drawer.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const closeDrawer = () => setIsOpen(false)

  return (
    <>
      {/* navigasi */}
      <nav>
        <div className="nav-logo">
          <img src={logoImg} alt="BOANANA Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#tentang">Tentang</a></li>
          <li><a href="#varian">Varian Rasa</a></li>
          <li><a href="#kemitraan">Kemitraan</a></li>
          <li><a href="#kritik">Kritik & Saran</a></li>
          <li><a href="#kontak">Kontak</a></li>
        </ul>
        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          id="hamburger"
          aria-label="Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* daftar nav di hp */}
      <div className={`nav-drawer ${isOpen ? 'open' : ''}`} id="navDrawer">
        <a href="#tentang"   className="drawer-link" onClick={closeDrawer}>Tentang</a>
        <a href="#varian"    className="drawer-link" onClick={closeDrawer}>Varian Rasa</a>
        <a href="#kemitraan" className="drawer-link" onClick={closeDrawer}>Kemitraan</a>
        <a href="#kritik"    className="drawer-link" onClick={closeDrawer}>Kritik & Saran</a>
        <a href="#kontak"    className="drawer-link" onClick={closeDrawer}>Kontak</a>
      </div>
    </>
  )
}

export default Navbar