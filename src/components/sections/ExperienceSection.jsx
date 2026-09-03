// src/components/sections/ExperienceSection.jsx
// Scroll 2: Pengalaman.
export default function ExperienceSection() {
  return (
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
  );
}