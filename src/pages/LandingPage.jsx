import { useRef, useEffect } from 'react';
import '../styles/landing.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LandingPage() {
  const videoRef = useRef(null);

  const handleScroll = (e) => {
    const container = e.target;
    const scrollPercentage = container.scrollTop / (container.scrollHeight - container.clientHeight);
    
    if (videoRef.current && !isNaN(videoRef.current.duration)) {
      requestAnimationFrame(() => {
        videoRef.current.currentTime = videoRef.current.duration * scrollPercentage;
      });
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  // Data keahlian beserta link ikon dari Devicon
  const skillsData = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
    { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'Camunda BPMN', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' }
  ];

  return (
    <>
      <div className="video-background">
        <video 
          ref={videoRef}
          src="https://assets.codepen.io/39255/output_960.mp4" 
          muted 
          playsInline 
          preload="auto"
          className="bg-video"
        ></video>
        <div className="video-overlay"></div>
      </div>

      <Navbar />
      
      <div className="snap-container" onScroll={handleScroll}>
        
        {/* Scroll 1: Hero */}
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

        {/* Scroll 2: Pengalaman */}
        <section id="experience" className="snap-section">
          <div className="content-wrapper">
            <h3 className="section-title">Pengalaman</h3>
            <div className="modern-grid">
              <div className="modern-card">
                <h4>Magang Pra Profesional (MPP)</h4>
                <span className="badge">SARASTYA • 2026 - Sekarang</span>
                <p>Direkrut pasca-magang untuk melanjutkan pengembangan arsitektur sistem, optimalisasi basis data, dan memimpin integrasi alur kerja perusahaan.</p>
              </div>
              <div className="modern-card">
                <h4>Studi AI Bot Terapan</h4>
                <span className="badge">MCC x UBIG • Program Studi</span>
                <p>Mempelajari pengembangan kecerdasan buatan dan integrasi arsitektur AI Bot perusahaan UBIG ke dalam lingkungan sistem terstruktur selama masa pendidikan di MCC.</p>
              </div>
              <div className="modern-card">
                <h4>Software Engineer Intern</h4>
                <span className="badge">SARASTYA • Sebelumnya</span>
                <p>Membangun aplikasi fungsional melalui optimasi kueri database dan perancangan antarmuka secara terstruktur dalam tim profesional.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll 3: Keahlian */}
        <section id="skills" className="snap-section">
          <div className="content-wrapper">
            <h3 className="section-title">Teknologi & Keahlian</h3>
            <div className="skills-wrapper">
              {skillsData.map(skill => (
                <div key={skill.name} className="skill-pill">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

       {/* Scroll 4: Proyek Terpilih */}
        <section id="projects" className="snap-section">
          <div className="content-wrapper">
            <h3 className="section-title">Proyek Terpilih</h3>
            <div className="project-grid-2col">
              
              <div className="project-image-card">
                <div className="img-container">
                  <img src="/images/xos-portal.jpg" alt="XOS Portal" />
                </div>
                <div className="card-detail">
                  <h4>Multi Frontend XOS Portal</h4>
                  <span className="badge">Platform</span>
                  <p>Antarmuka terpusat lintas platform untuk mengelola ekosistem dan operasional XOS.</p>
                </div>
              </div>

              <div className="project-image-card">
                <div className="img-container">
                  <img src="/images/importer-data.jpg" alt="Importer Data" />
                </div>
                <div className="card-detail">
                  <h4>Project Importer Data</h4>
                  <span className="badge">Data Pipeline</span>
                  <p>Modul utilitas untuk memvalidasi, memproses, dan mengimpor set data berskala besar ke dalam sistem.</p>
                </div>
              </div>

              <div className="project-image-card">
                <div className="img-container">
                  <img src="/images/absence-company.jpg" alt="Absence Company" />
                </div>
                <div className="card-detail">
                  <h4>Project Absence Company</h4>
                  <span className="badge">Sistem Internal</span>
                  <p>Platform manajemen kehadiran karyawan dengan fitur pelacakan waktu dan pelaporan data terpusat.</p>
                </div>
              </div>

              <div className="project-image-card">
                <div className="img-container">
                  <img src="/images/code-playground.jpg" alt="Code Playground" />
                </div>
                <div className="card-detail">
                  <h4>Project Code Playground</h4>
                  <span className="badge">Alat Interaktif</span>
                  <p>Lingkungan eksekusi kode berbasis web untuk pengujian dan eksperimen logika pemrograman secara langsung.</p>
                </div>
              </div>

              <div className="project-image-card">
                <div className="img-container">
                  <img src="/images/json-to-form.jpg" alt="JSON to UI Form" />
                </div>
                <div className="card-detail">
                  <h4>Library JSON to UI Form</h4>
                  <span className="badge">Pustaka Komponen</span>
                  <p>Pustaka dinamis yang secara otomatis mengonversi skema data JSON menjadi komponen formulir antarmuka.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Scroll 5: Footer / Kontak */}
        <section className="snap-section" style={{ minHeight: '60vh' }}>
          <div className="content-wrapper" style={{ width: '100%' }}>
            <Footer />
          </div>
        </section>

      </div>
    </>
  );
}