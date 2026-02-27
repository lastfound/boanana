const varianData = [
  { emoji: '🍵', nama: 'Matcha',     desc: 'Bubuk matcha Jepang yang harum melapisi keripik pisang renyah kami. Camilan premium yang beda dari yang lain!',                                       tag: 'Premium ✨',      warna: '#6B8E23', tagWarna: '#6B8E23',              delay: 'delay-1' },
  { emoji: '🫧', nama: 'Bubble Gum', desc: 'Varian paling berani BOANANA! Keripik pisang renyah dengan rasa bubble gum manis — warna cantik, dijamin jadi konten! 📸',                          tag: 'Wajib Coba! 🔥', warna: '#FF69B4', tagWarna: '#FF69B4',              delay: 'delay-2' },
  { emoji: '🍫', nama: 'Coklat',     desc: 'Lapisan coklat premium yang kaya rasa bertemu keripik pisang renyah — kombinasi klasik yang nggak pernah gagal bikin nagih!',                       tag: 'Favorit Semua 🏆',warna: '#5C3317', tagWarna: '#5C3317',              delay: 'delay-3' },
  { emoji: '🟣', nama: 'Taro',       desc: 'Balutan rasa talas ungu yang creamy dan manis pada keripik pisang crispy kami. Unik, instagramable, dan pasti nagih!',                              tag: 'Penasaran? 💜',   warna: '#9B59B6', tagWarna: '#9B59B6',              delay: 'delay-4' },
  { emoji: '🍌', nama: 'Original',   desc: 'Keripik pisang original kami — renyah, gurih-manis alami, tanpa basa-basi. Simpel tapi selalu jadi yang paling dicinta!',                          tag: 'All Time Fav ❤️', warna: '#FFD700', tagWarna: '#E6B800', tagColor: '#5C3317', delay: 'delay-5' },
  { emoji: '🍓', nama: 'Strawberry', desc: 'Taburan rasa strawberry asam-manis yang segar di atas keripik pisang renyah. Cocok banget buat pecinta camilan fruity!',                           tag: 'Seger Banget 🌸', warna: '#E91E63', tagWarna: '#E91E63',              delay: 'delay-6' },
]

function Varian() {
  return (
    <>
      {/* varian rasa */}
      <section id="varian" style={{ overflow: 'hidden', position: 'relative' }}>
        <div className="parallax-text" id="parallaxVarian" style={{ color: 'rgba(0,0,0,0.04)' }}>RASA RASA RASA</div>
        <div className="dots-bg"></div>
        <div className="varian-header">
          <span className="section-pill">Menu Kita</span>
          <h2 className="section-title">6 Varian Rasa yang Bakal Hadir!</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--brown)', opacity: 0.8, maxWidth: '520px', margin: '0 auto' }}>
            Ini dia lineup varian rasa yang lagi kami siapkan buat kamu. Mana yang paling bikin kamu penasaran? 👀
          </p>
        </div>
        <div className="varian-grid">
          {varianData.map((v) => (
            <div
              key={v.nama}
              className={`varian-card reveal-pop ${v.delay}`}
              style={{ '--vcolor': v.warna }}
            >
              <span className="varian-emoji">{v.emoji}</span>
              <div className="varian-name">{v.nama}</div>
              <p className="varian-desc">{v.desc}</p>
              <span
                className="varian-tag"
                style={{ background: v.tagWarna, color: v.tagColor || 'white' }}
              >
                {v.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ombak: varian -> kemitraan */}
      <div className="wave-wrap" style={{ background: '#FFE135' }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" fill="#7B3F00"/>
        </svg>
      </div>
    </>
  )
}

export default Varian
