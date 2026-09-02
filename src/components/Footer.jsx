import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer-cinematic">
      <div className="footer-content">
        <span className="footer-tag">( CONNECT;/ )</span>
        <h3 className="footer-heading">MARI TERHUBUNG</h3>
        <p className="footer-subtext">
          SAYA SELALU TERBUKA UNTUK DISKUSI TEKNOLOGI ATAU PELUANG KOLABORASI.
        </p>
        <a href="mailto:email@domain.com" className="contact-button-cinematic">
          HUBUNGI SAYA
        </a>
      </div>

      <div className="footer-bottom">
        <p>© 2026 RUSTU MAULANA. DIBANGUN DENGAN REACT INTERAKTIF.</p>
      </div>
    </footer>
  );
}