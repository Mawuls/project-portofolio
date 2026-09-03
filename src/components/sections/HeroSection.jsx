// src/components/sections/HeroSection.jsx
// Scroll 1: Hero / Profil singkat.
export default function HeroSection() {
  return (
    <section id="about" className="snap-section cinematic-hero-centered">
      <div className="hero-content-center">
        <div className="hero-title-center">
          <div className="title-row">
            <div className="circle-logo-hanging">RM</div>
            <h1 className="name-text">RUSTU</h1>
          </div>
          <div className="title-row">
            <h1 className="name-text">MAULANA</h1>
          </div>
        </div>

        <div className="hero-desc-center">
          <div className="desc-box">
            <div className="desc-head">
              <span className="square-icon"></span>
              <span className="code-text">(DEV;/)</span>
            </div>
            <p>
              PENGEMBANGAN LINTAS PLATFORM. MENGGABUNGKAN ARSITEKTUR SISTEM
              DAN ANTARMUKA MODERN UNTUK SOLUSI DIGITAL.
            </p>
          </div>

          <div className="desc-box">
            <div className="desc-head">
              <span className="code-text">(LOGIC;/)</span>
            </div>
            <p>
              PENDEKATAN TAKTIS DAN STRATEGI TERSTRUKTUR DALAM BARIS KODE.
              MEMBANGUN ALUR PEMECAHAN MASALAH YANG EFISIEN.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}