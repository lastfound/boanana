import { useState } from 'react'
import { spawnBanana } from '../App'

function Kontak() {
  const [btnText, setBtnText] = useState('Kirim Pesan 🍌')
  const [btnGreen, setBtnGreen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setBtnText('✅ Pesan Terkirim!')
    setBtnGreen(true)
    e.target.reset()
    spawnBanana(window.innerWidth / 2, window.innerHeight / 2)
    setTimeout(() => {
      setBtnText('Kirim Pesan 🍌')
      setBtnGreen(false)
    }, 4000)
  }

  return (
    <>
      {/* kontak */}
      <section id="kontak">
        <div className="kontak-wrap">
          <div>
            <span className="section-pill">Hubungi Kami</span>
            <h2 className="section-title">Yuk Ngobrol! 📱</h2>
            <p style={{ color: 'var(--brown)', opacity: 0.75, marginBottom: '30px', fontSize: '1.05rem' }}>
              Punya pertanyaan, ingin jadi mitra pertama, atau sekadar penasaran? Hubungi kami kapan saja — kami senang banget diajak ngobrol! 😊
            </p>

            <div className="kontak-item reveal">
              <div className="k-icon">📍</div>
              <div className="k-text">
                <strong>Lokasi</strong>
                <p>Purwokerto, Jawa Tengah</p>
              </div>
            </div>
            <div className="kontak-item reveal">
              <div className="k-icon">📱</div>
              <div className="k-text">
                <strong>WhatsApp</strong>
                <p>+62 812-BOANANA</p>
              </div>
            </div>
            <div className="kontak-item reveal">
              <div className="k-icon">📧</div>
              <div className="k-text">
                <strong>Email</strong>
                <p>Halo.Boanana@gmail.com</p>
              </div>
            </div>
            <div className="kontak-item reveal">
              <div className="k-icon">🚀</div>
              <div className="k-text">
                <strong>Status</strong>
                <p>Segera Hadir di Purwokerto!</p>
              </div>
            </div>

            <div className="sosmed-row">
              <a href="#" className="sos-btn">📸 Instagram</a>
              <a href="#" className="sos-btn">🎵 TikTok</a>
              <a href="#" className="sos-btn">💬 WhatsApp</a>
              <a href="#" className="sos-btn">▶️ YouTube</a>
            </div>
          </div>

          <div className="reveal">
            <form className="kontak-form" id="kontakForm" onSubmit={handleSubmit}>
              <input type="text"  placeholder="Nama Lengkap" required />
              <input type="email" placeholder="Alamat Email" required />
              <input type="tel"   placeholder="Nomor WhatsApp" />
              <textarea          placeholder="Pesan kamu..."></textarea>
              <button
                type="submit"
                className="btn-kontak-send"
                style={btnGreen ? { background: '#00C9A7' } : {}}
              >
                {btnText}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Kontak
