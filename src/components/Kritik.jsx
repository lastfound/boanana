import { useState } from 'react'
import { spawnBanana } from '../App'

function Kritik() {
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowToast(true)
    e.target.reset()
    spawnBanana(window.innerWidth / 2, window.innerHeight / 2)
    setTimeout(() => setShowToast(false), 5000)
  }

  return (
    <>
      {/* kritik dan saran */}
      <section id="kritik">
        <div className="kritik-wrap">
          <span className="section-pill">Suara Kamu!</span>
          <h2 className="section-title">Kritik & Saran 💬</h2>
          <p style={{ color: '#666', marginBottom: '36px', fontSize: '1.05rem' }}>
            Kami masih baru dan masukan kamu sangat berharga banget! Bantu kami hadir dengan produk terbaik untuk Purwokerto dan sekitarnya. 🍌
          </p>

          <form id="feedbackForm" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="fg">
                <label>Nama Kamu</label>
                <input type="text" placeholder="Nama kamu..." required />
              </div>
              <div className="fg">
                <label>Email</label>
                <input type="email" placeholder="email@kamu.com" />
              </div>
            </div>
            <div className="form-row">
              <div className="fg">
                <label>Varian yang Dicoba</label>
                <select>
                  <option value="">Pilih varian...</option>
                  <option>Matcha</option>
                  <option>Bubble Gum</option>
                  <option>Coklat</option>
                  <option>Taro</option>
                  <option>Original</option>
                  <option>Strawberry</option>
                </select>
              </div>
              <div className="fg">
                <label>Jenis Masukan</label>
                <select>
                  <option>Kritik</option>
                  <option>Saran</option>
                  <option>Pujian 🎉</option>
                  <option>Pertanyaan</option>
                </select>
              </div>
            </div>
            <div className="fg">
              <label>Rating Kamu ⭐</label>
              <div className="star-row">
                <input type="radio" id="s5" name="rating" value="5" /><label htmlFor="s5">⭐</label>
                <input type="radio" id="s4" name="rating" value="4" /><label htmlFor="s4">⭐</label>
                <input type="radio" id="s3" name="rating" value="3" /><label htmlFor="s3">⭐</label>
                <input type="radio" id="s2" name="rating" value="2" /><label htmlFor="s2">⭐</label>
                <input type="radio" id="s1" name="rating" value="1" /><label htmlFor="s1">⭐</label>
              </div>
            </div>
            <div className="fg">
              <label>Pesan Kamu</label>
              <textarea placeholder="Ceritain pengalaman atau saran kamu di sini..."></textarea>
            </div>
            <button type="submit" className="btn-send">Kirim Masukan 🍌</button>
            {showToast && (
              <div className="toast" style={{ display: 'block' }}>
                🎉 Yeay! Makasih banyak! Masukan kamu udah kami terima dan sangat berarti buat BOANANA!
              </div>
            )}
          </form>
        </div>
      </section>

      {/* ombak: kritik -> kontak */}
      <div className="wave-wrap" style={{ background: '#FFF9EC' }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 C360,0 1080,60 1440,10 L1440,60 L0,60 Z" fill="#FFD000"/>
        </svg>
      </div>
    </>
  )
}

export default Kritik
