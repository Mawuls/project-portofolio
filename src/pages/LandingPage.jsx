
import '../styles/landing.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="portfolio-container">
      <Navbar />

      {/* Bagian Hero / Perkenalan */}
      <section id="about" className="hero-section">
        <p className="greeting">Halo, perkenalkan saya</p>
        <h1 className="name">Rustu Maulana</h1>
        <h2 className="role">Programmer / Full-Stack Developer</h2>
        <p className="description">
          Saya adalah seorang siswa SMK berusia 18 tahun yang sangat antusias dengan dunia pemrograman. 
          Saya suka memecahkan masalah melalui kode dan terus mengeksplorasi teknologi baru. 
          Di waktu luang, saya memiliki hobi bermain game, salah satunya adalah bermain Clash of Clans, 
          yang melatih saya dalam strategi dan penyelesaian masalah.
        </p>
      </section>

      {/* Bagian Pengalaman Kerja */}
      <section id="experience">
        <h3 className="section-title">Pengalaman Kerja</h3>
        <div className="card-grid">
          <div className="card">
            <h4>Magang Pra Profesional (MPP)</h4>
            <p className="subtitle">SARASTYA • 2026 - Sekarang</p>
            <p>
              Direkrut secara profesional setelah menyelesaikan masa magang untuk 
              melanjutkan pengembangan sistem dan berkontribusi pada proyek perusahaan.
            </p>
          </div>
          <div className="card">
            <h4>Software Engineer Intern</h4>
            <p className="subtitle">SARASTYA • Sebelumnya</p>
            <p>
              Menjalani program magang dengan fokus pada pengembangan aplikasi, 
              pengelolaan basis data, dan kolaborasi tim dalam lingkungan profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Bagian Keahlian */}
      <section id="skills">
        <h3 className="section-title">Keahlian & Teknologi</h3>
        <div className="skills-container">
          <span className="skill-tag">React</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">PHP</span>
          <span className="skill-tag">Laravel</span>
          <span className="skill-tag">Dart</span>
          <span className="skill-tag">Flutter</span>
          <span className="skill-tag">Python</span>
          <span className="skill-tag">Redis</span>
          <span className="skill-tag">SQL</span>
          <span className="skill-tag">pgAdmin</span>
          <span className="skill-tag">phpMyAdmin</span>
          <span className="skill-tag">Camunda BPMN</span>
        </div>
      </section>

      {/* Bagian Proyek */}
      <section id="projects">
        <h3 className="section-title">Proyek Terpilih</h3>
        <div className="card-grid">
          <div className="card">
            <h4>Interaksi 3D dengan MediaPipe</h4>
            <p className="subtitle">Eksperimen UI/UX</p>
            <p>
              Membangun antarmuka pengguna yang memanfaatkan pelacakan tangan (hand tracking) 
              untuk berinteraksi, memutar, dan memanipulasi objek 3D secara real-time.
            </p>
          </div>
          <div className="card">
            <h4>Integrasi Sistem Camunda</h4>
            <p className="subtitle">Backend & Workflow</p>
            <p>
              Mengembangkan komponen alur kerja (workflow) menggunakan Camunda BPMN 
              untuk memproses tabel data dan mengelola status permintaan pembelian di sistem internal.
            </p>
          </div>
          <div className="card">
            <h4>Sistem Manajemen Anggaran Tim</h4>
            <p className="subtitle">Kolaborasi Proyek</p>
            <p>
              Mengelola data dan spreadsheet anggaran bersama rekan tim (Akbar, Azzam, dan Raehan) 
              untuk memastikan kelancaran administrasi proyek kelompok.
            </p>
          </div>
          <div className="card">
            <h4>Aplikasi Manajemen Data</h4>
            <p className="subtitle">Full-stack (Laravel & React)</p>
            <p>
              Proyek pengembangan sistem informasi menggunakan Laravel 
              sebagai backend dan React sebagai antarmuka pengguna.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}