import React, { useEffect } from 'react';
import './styles/index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tentang from './components/Tentang';
import Varian from './components/Varian';
import Kemitraan from './components/Kemitraan';
import Kritik from './components/Kritik';
import Kontak from './components/Kontak';
import Footer from './components/Footer';

// Fungsi banana confetti - dipakai oleh Kontak.jsx dan Kritik.jsx
export function spawnBanana(x, y) {
  for (let i = 0; i < 5; i++) {
    const b = document.createElement('div');
    b.className = 'banana-pop';
    b.textContent = '🍌';
    b.style.left = (x + (Math.random() - 0.5) * 80) + 'px';
    b.style.top  = (y + (Math.random() - 0.5) * 40) + 'px';
    b.style.animationDelay = (i * 0.1) + 's';
    b.style.fontSize = (1.2 + Math.random()) + 'rem';
    document.body.appendChild(b);
    setTimeout(() => b.remove(), 1200);
  }
}

function App() {
  useEffect(() => {
    // 1. Scroll progress bar
    const progressBar = document.getElementById('scrollProgress');
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (progressBar) progressBar.style.width = (scrollTop / docHeight * 100) + '%';

      // Active nav highlight saat scroll
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-links a');
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id');
      });
      navLinks.forEach(a => {
        const isActive = a.getAttribute('href') === '#' + current;
        a.style.background = isActive ? 'var(--yellow)' : '';
        a.style.color = isActive ? 'var(--brown)' : '';
      });

      // Parallax text
      const parallaxEls = [
        { el: document.getElementById('parallaxTentang'), speed: 0.3 },
        { el: document.getElementById('parallaxVarian'),  speed: 0.2 },
      ];
      parallaxEls.forEach(({ el, speed }) => {
        if (!el) return;
        const rect = el.parentElement.getBoundingClientRect();
        const offset = (window.innerHeight / 2 - rect.top) * speed;
        el.style.transform = `translateY(calc(-50% + ${offset}px))`;
      });
    };
    window.addEventListener('scroll', onScroll);

    // 2. Scroll reveal (IntersectionObserver)
    const allReveals = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-pop, .section-pill, .section-title'
    );
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 60);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    allReveals.forEach(el => revealObserver.observe(el));

    // 3. Count-up animasi stat box
    function countUp(el, target) {
      if (target === '∞' || isNaN(parseInt(target))) { el.textContent = target; return; }
      const num = parseInt(target.replace(/\D/g, ''));
      const hasSuffix = target.replace(/[0-9]/g, '').trim();
      let current = 0;
      const steps = 40;
      const increment = num / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= num) { el.textContent = target; clearInterval(timer); }
        else el.textContent = Math.floor(current) + (hasSuffix || '');
      }, 1000 / steps);
    }
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const numEl = entry.target.querySelector('.num');
          if (numEl && !numEl.dataset.counted) {
            numEl.dataset.counted = '1';
            const original = numEl.textContent.trim();
            numEl.textContent = '0';
            setTimeout(() => countUp(numEl, original), 300);
          }
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.stat-box').forEach(el => statObserver.observe(el));

    // 4. 🍌 Pisang melayang saat klik tombol/link apapun (sama persis HTML asli)
    const onClickBanana = (e) => {
      const target = e.target.closest('a, button');
      if (target) {
        spawnBanana(e.clientX, e.clientY);
      }
    };
    document.addEventListener('click', onClickBanana);

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onClickBanana);
      revealObserver.disconnect();
      statObserver.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <div id="scrollProgress"></div>
      <Navbar />
      <Hero />
      <Tentang />
      <Varian />
      <Kemitraan />
      <Kritik />
      <Kontak />
      <Footer />
    </div>
  );
}

export default App;