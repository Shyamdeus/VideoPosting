import React from 'react';
import Footer from './components/Footer'; // adjust the path if needed

export default function Home() {
  return (
    <>
      <h2>Welcome Home</h2>

      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Embedded Video"
          frameBorder="0"
          allowFullScreen
          className="iframe"
        ></iframe>
      </div>

      <p className="description">
        This is your homepage description.
      </p>

      {/* ✅ Footer with banner ad */}
      <Footer />
    </>
  );
}
