import { useRef, useEffect } from 'react';
import '../styles/landing.css';
import Navbar from '../components/Navbar';
import VideoBackground from '../components/VideoBackground';
import HeroSection from '../components/sections/HeroSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';

export default function LandingPage() {
  const videoRef = useRef(null);

  // Scrub video mengikuti posisi scroll pada container utama.
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

  return (
    <>
      <VideoBackground videoRef={videoRef} />

      <Navbar />

      {/* Container scroll-snap: setiap child adalah satu "page" yang di-scroll */}
      <div className="snap-container" onScroll={handleScroll}>
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}