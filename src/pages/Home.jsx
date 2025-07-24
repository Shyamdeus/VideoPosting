import React, { useEffect } from 'react';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    // 👉 Inject the curiositycow banner script below video
    const adDiv = document.getElementById('video-banner');
    if (adDiv && !adDiv.hasChildNodes()) {
      // Add atOptions config
      const options = document.createElement('script');
      options.type = 'text/javascript';
      options.innerHTML = `
        atOptions = {
          'key' : '3f8144b431f600ec621cc5cffe2afa15',
          'format' : 'iframe',
          'height' : 90,
          'width' : 728,
          'params' : {}
        };
      `;
      adDiv.appendChild(options);

      // Add invoke.js
      const invoke = document.createElement('script');
      invoke.type = 'text/javascript';
      invoke.async = true;
      invoke.src = '//curiositycow.com/3f8144b431f600ec621cc5cffe2afa15/invoke.js';
      adDiv.appendChild(invoke);
    }
  }, []);

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

      {/* ✅ Ad banner under video */}
      <div id="video-banner" style={{ margin: '20px 0' }}></div>

      <p className="description">
        This is your homepage description.
      </p>

      <Footer />
    </>
  );
}
