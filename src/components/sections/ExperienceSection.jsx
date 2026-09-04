import { useState } from 'react';
import '../../styles/experience.css';

import mppPreviewImg from '../../media/xos-portal.png'; 
import ubigPreviewImg from '../../media/code-playground.png'; 

const experiencesData = [
  {
    id: 'mpp-sarastya',
    title: 'Magang Pra Profesional (MPP)',
    badge: 'SARASTYA • 2026 - Sekarang',
    desc: 'Direkrut pasca-magang untuk melanjutkan pengembangan arsitektur sistem, optimalisasi basis data, dan memimpin integrasi alur kerja.',
    previewImg: mppPreviewImg, 
    files: [
      { name: 'system_architecture.sys', tag: 'CORE', desc: 'Pengembangan & refactoring arsitektur utama.' },
      { name: 'db_optimization.sql', tag: 'DATABASE', desc: 'Optimalisasi kueri kompleks basis data.' },
      { name: 'workflow_integration.exe', tag: 'BPMN', desc: 'Integrasi otomatisasi proses bisnis.' }
    ]
  },
  {
    id: 'ai-bot-ubig',
    title: 'Studi AI Bot Terapan',
    badge: 'MCC x UBIG • Program Studi',
    desc: 'Mempelajari pengembangan kecerdasan buatan dan integrasi arsitektur AI Bot ke dalam lingkungan sistem terstruktur.',
    previewImg: ubigPreviewImg, 
    files: [
      { name: 'ubig_ai_core.py', tag: 'AI CORE', desc: 'Analisis & eksplorasi arsitektur AI Bot.' },
      { name: 'bot_integration.json', tag: 'API', desc: 'Skema integrasi AI Bot sistem MCC.' }
    ]
  }
];

export default function ExperienceSection() {
  const [openFolderId, setOpenFolderId] = useState(null);

  const toggleFolder = (id) => {
    setOpenFolderId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="snap-section">
      <div className="content-wrapper experience-wrapper">
        
        {/* Header Desain Profesional Modern */}
        <div className="section-header-modern">
          <span className="section-subtitle">Rekam Jejak</span>
          <h3 className="section-title-main">Pengalaman Profesional</h3>
          <div className="title-underline"></div>
        </div>

        <div className="experiences-flex-container">
          {experiencesData.map((exp) => {
            const isOpen = openFolderId === exp.id;
            const isHidden = openFolderId !== null && openFolderId !== exp.id;

            return (
              <div 
                key={exp.id} 
                className={`folder-wrapper ${isOpen ? 'is-open' : ''} ${isHidden ? 'is-hidden' : ''}`}
              >
                {/* AREA KIRI: VISUAL FOLDER */}
                <div className="folder-visual-area" onClick={() => toggleFolder(exp.id)}>
                  <div className="pure-folder">
                    <div className="pure-folder-back"></div>
                    <img src={exp.previewImg} alt={exp.title} className="pure-folder-img" />
                    <div className="pure-folder-front"></div>
                  </div>
                  <div className="pure-folder-title">
                    <h4>{exp.title}</h4>
                    <span className="click-hint">{isOpen ? 'Tutup Direktori' : 'Klik untuk Membuka'}</span>
                  </div>
                </div>

                {/* AREA KANAN: KONTEN KETARIK / SLIDE-IN */}
                <div className="folder-details-area">
                  <div className="details-header">
                    <span className="badge">{exp.badge}</span>
                    <p>{exp.desc}</p>
                  </div>
                  
                  <div className="file-manager-toolbar">
                    <span>DAFTAR BERKAS</span>
                    <span>{exp.files.length} ITEMS</span>
                  </div>

                  <div className="files-list">
                    {exp.files.map((file, idx) => (
                      <div key={idx} className="file-item">
                        <div className="file-icon-type">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                            <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
                            <path d="M13 2v7h7" />
                          </svg>
                        </div>
                        <div className="file-details">
                          <div className="file-header-line">
                            <span className="file-name">{file.name}</span>
                            <span className="file-tag">{file.tag}</span>
                          </div>
                          <p className="file-desc">{file.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}