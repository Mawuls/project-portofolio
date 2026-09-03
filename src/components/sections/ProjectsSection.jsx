// src/components/sections/ProjectsSection.jsx
// Scroll 4: Proyek Terpilih (Full Carousel Animation).
import { useState } from 'react';

import xosPortalImg from '../../media/xos-portal.png';
import Cod from '../../media/code-playground.png';
import absence from '../../media/absence.png';
import library from '../../media/library-converter.png';
import importer from '../../media/importer-data.png';

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

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  return (
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
  );
}