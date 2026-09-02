import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar-light">
      <div className="logo-light">R<span>M.</span></div>
      <ul className="nav-links-light">
        <li><a href="#about">Profil</a></li>
        <li><a href="#experience">Pengalaman</a></li>
        <li><a href="#skills">Keahlian</a></li>
        <li><a href="#projects">Proyek</a></li>
      </ul>
    </nav>
  );
}