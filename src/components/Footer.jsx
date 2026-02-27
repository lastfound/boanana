import React from 'react';
import logoImg from '../assets/logo boanana.png'

function Footer() {
  return (
    <footer>
      <img src={logoImg} alt="BOANANA" />
      <div className="footer-links">
        <a href="#tentang">Tentang</a>
        <a href="#varian">Varian Rasa</a>
        <a href="#kemitraan">Kemitraan</a>
        <a href="#kritik">Kritik & Saran</a>
        <a href="#kontak">Kontak</a>
      </div>
      <p>🍌 Startup Keripik Pisang Kekinian · Lahir & Besar di Purwokerto</p>
      <p style={{ marginTop: '8px' }}>© 2025 BOANANA. All rights reserved.</p>
    </footer>
  )
}

export default Footer