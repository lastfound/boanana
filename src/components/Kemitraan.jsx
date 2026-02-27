const paketData = [
  {
    icon: '🛺', nama: 'Paket Starter', harga: 'Coming Soon',
    hot: false, animasi: 'reveal-left delay-1',
    list: ['1 Unit Gerobak Branded BOANANA','Pelatihan Dasar 1 Hari','Stok Produk Awal','Panduan SOP Lengkap','Support via WhatsApp'],
  },
  {
    icon: '🏪', nama: 'Paket Premium', harga: 'Coming Soon',
    hot: true, animasi: 'reveal delay-2',
    list: ['1 Unit Booth Modern Full Branding','Pelatihan Intensif 3 Hari','Stok Produk Lebih Banyak','Mesin Goreng Elektrik','Konten Promosi Media Sosial','Pendampingan 3 Bulan'],
  },
  {
    icon: '🏬', nama: 'Paket Franchise', harga: 'Coming Soon',
    hot: false, animasi: 'reveal-right delay-3',
    list: ['Toko Mini Permanen','Training Lengkap + Sertifikat','Stok Produk Penuh','Hak Wilayah Eksklusif','Dukungan Marketing Penuh','Pendampingan 1 Tahun Penuh'],
  },
]

function Kemitraan() {
  return (
    <>
      {/* kemitraan */}
      <section id="kemitraan">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="section-pill2">Gabung Bareng Kami!</span>
          <h2 className="section-title2">Buka Kemitraan 🤝</h2>
          <p style={{ color: 'var(--cream)', opacity: 0.8, maxWidth: '600px', fontSize: '1.05rem', marginBottom: '50px' }}>
            BOANANA baru mau launch dan kami sedang mencari mitra-mitra pertama yang berani dan visioner! Jadilah bagian dari perjalanan awal kami — be the first, be the best. 🚀
          </p>
          <div className="paket-grid">
            {paketData.map((p) => (
              <div key={p.nama} className={`paket-card ${p.hot ? 'hot' : ''} ${p.animasi}`}>
                {p.hot && <div className="hot-badge">⭐ Rekomendasi!</div>}
                <span className="paket-icon">{p.icon}</span>
                <div className="paket-name">{p.nama}</div>
                <div className="paket-price">{p.harga}</div>
                <ul className="paket-list">
                  {p.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href="#kontak" className="btn-paket">Daftar Minat!</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ombak: kemitraan -> kritik */}
      <div className="wave-wrap" style={{ background: '#7B3F00' }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,20 C480,60 960,0 1440,40 L1440,60 L0,60 Z" fill="#FFF9EC"/>
        </svg>
      </div>
    </>
  )
}

export default Kemitraan
