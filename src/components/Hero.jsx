import React, { useState, useRef, useEffect } from 'react';
import logoImg from '../assets/logo boanana.png'

function Hero() {
  return (
    <>
      {/* hero */}
      <section id="hero">
        <div className="shape c1"></div>
        <div className="shape c2"></div>
        <div className="shape c3"></div>
        <div className="shape c4"></div>
        <div className="hero-inner">
          <img className="hero-logo" src={logoImg} alt="BOANANA" />
          <div className="hero-bananas">
            <span>🍌</span><span>🍌</span><span>🍌</span><span>🍌</span><span>🍌</span>
          </div>
          <p className="hero-tagline">🎉 Keripik Pisang Kekinian dari Purwokerto — Segera Hadir!</p>
          <div className="hero-btns">
            <a href="#varian"    className="btn-main">Intip Varian Rasa 🍌</a>
            <a href="#kemitraan" className="btn-outline">Jadi Mitra Pertama 🤝</a>
          </div>
        </div>
        <div className="scroll-down">👇</div>
      </section>

      {/* ombak: hero -> tentang */}
      <div className="wave-wrap" style={{ background: 'linear-gradient(160deg,#FFE135 0%,#FFD000 60%,#FFC200 100%)' }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#FFF9EC"/>
        </svg>
      </div>
    </>
  )
}

export default Hero