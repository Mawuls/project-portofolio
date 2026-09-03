import { useRef, useEffect, useState } from 'react';
import '../styles/landing.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import media[cite: 9]
import xosPortalImg from '../media/xos-portal.png';
import Cod from '../media/code-playground.png';
import absence from '../media/absence.png';
import library from '../media/library-converter.png';
import importer from '../media/importer-data.png';

export default function LandingPage() {
  const videoRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);

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

  // Data keahlian[cite: 9]
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

  // Data Proyek menggunakan variabel import gambar[cite: 9]
  const projectsData = [
    {
      title: "Multi Frontend XOS Portal",
      badge: "Platform",
      desc: "Antarmuka terpusat lintas platform untuk mengelola ekosistem dan operasional XOS dengan integrasi data real-time.",
      img: xosPortalImg 
    },
    {
      title: "Project Importer Data",
      badge: "Data Pipeline",
      desc: "Modul utilitas untuk memvalidasi, memproses, dan mengimpor set data berskala besar ke dalam sistem basis data utama.",
      img: importer
    },
    {
      title: "Project Absence Company",
      badge: "Sistem Internal",
      desc: "Platform manajemen kehadiran karyawan dengan fitur pelacakan waktu dan pelaporan data terpusat untuk HRD.",
      img: absence
    },
    {
      title: "Project Code Playground",
      badge: "Alat Interaktif",
      desc: "Lingkungan eksekusi kode berbasis web untuk pengujian dan eksperimen logika pemrograman secara langsung di browser.",
      img: Cod
    },
    {
      title: "Library JSON to UI Form",
      badge: "Pustaka Komponen",
      desc: "Pustaka dinamis yang secara otomatis mengonversi skema data JSON yang kompleks menjadi komponen formulir antarmuka utuh.",
      img: library
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

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
        
        {/* Scroll 1: Hero[cite: 9] */}
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

        {/* Scroll 2: Pengalaman[cite: 9] */}
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

        {/* Scroll 3: Keahlian[cite: 9] */}
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

       {/* Scroll 4: Proyek Terpilih (Full Carousel Animation) */}
        <section id="projects" className="snap-section">
          <div className="content-wrapper">
            <h3 className="section-title">Proyek Terpilih</h3>

            <div className="carousel-wrapper">
              {/* Tombol Kiri */}
              <button onClick={prevProject} className="carousel-btn prev" aria-label="Previous">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
              </button>

              {/* Jendela Carousel */}
              <div className="carousel-viewport">
                <div 
                  className="carousel-track"
                  style={{ transform: `translateX(-${activeProject * 100}%)` }}
                >
                  {projectsData.map((proj, idx) => (
                    <div key={idx} className="carousel-slide">
                      <div className="carousel-card">
                        <div className="card-text">
                          <h4>{proj.title}</h4>
                          <span className="badge">{proj.badge}</span>
                          <p>{proj.desc}</p>
                        </div>
                        <div className="card-image">
                          <img src={proj.img} alt={proj.title} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tombol Kanan */}
              <button onClick={nextProject} className="carousel-btn next" aria-label="Next">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>

            {/* Indikator Titik (Dots) */}
            <div className="carousel-indicators">
              {projectsData.map((_, idx) => (
                <button 
                  key={idx} 
                  className={`dot ${activeProject === idx ? 'active' : ''}`}
                  onClick={() => setActiveProject(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </section>

        {/* Scroll 5: Footer / Kontak[cite: 9] */}
        <section className="snap-section" style={{ minHeight: '60vh' }}>
          <div className="content-wrapper" style={{ width: '100%' }}>
            <Footer />
          </div>
        </section>

      </div>
    </>
  );
}