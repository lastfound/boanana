function Tentang() {
  return (
    <>
      {/* tentang */}
      <section id="tentang" style={{ overflow: 'hidden', position: 'relative' }}>
        <div className="parallax-text" id="parallaxTentang">BOANANA</div>
        <div className="tentang-wrap">
          <div className="tentang-text reveal-left">
            <span className="section-pill">Siapa Kami?</span>
            <h2 className="section-title">Kenalan Sama<br/>🍌 BOANANA</h2>
            <p>BOANANA adalah startup kuliner baru dari Purwokerto yang hadir dengan semangat besar dan ide segar! Kami percaya keripik pisang bukan sekadar camilan biasa — dengan sentuhan batik Nusantara yang khas, kami menghadirkan pengalaman ngemil yang unik, renyah, dan kekinian.</p>
            <p>Kami masih di awal perjalanan, tapi semangat kami sudah 100%! BOANANA siap hadir buat kamu yang suka camilan lokal dengan twist yang berbeda. Stay tuned — ini baru permulaan! 🚀</p>
            <div className="stats-row">
              <div className="stat-box reveal">
                <div className="num">2026</div>
                <div className="lbl">Tahun Lahir 🐣</div>
              </div>
              <div className="stat-box reveal">
                <div className="num">PWT</div>
                <div className="lbl">Purwokerto 📍</div>
              </div>
              <div className="stat-box reveal">
                <div className="num">6</div>
                <div className="lbl">Varian Seru</div>
              </div>
              <div className="stat-box reveal">
                <div className="num">∞</div>
                <div className="lbl">Semangat Kami 🔥</div>
              </div>
            </div>
          </div>
          <div className="tentang-visual reveal-right">
            <div className="big-banana-ring">
              <span className="inner-banana">🍌</span>
            </div>
            <div className="floating-tag">🚀 Coming Soon!</div>
            <div className="floating-tag">💡 Startup Lokal</div>
            <div className="floating-tag">❤️ Made in PWt</div>
          </div>
        </div>
      </section>

      {/* ombak: tentang -> varian */}
      <div className="wave-wrap" style={{ background: '#FFF9EC' }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C480,60 960,0 1440,40 L1440,60 L0,60 Z" fill="#FFE135"/>
        </svg>
      </div>
    </>
  )
}

export default Tentang
