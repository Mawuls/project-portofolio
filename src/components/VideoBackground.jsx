// src/components/VideoBackground.jsx
// Latar belakang video global (fixed) untuk seluruh halaman.
// videoRef dikelola oleh LandingPage agar bisa di-scrub saat scroll.
export default function VideoBackground({ videoRef }) {
  return (
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
  );
}