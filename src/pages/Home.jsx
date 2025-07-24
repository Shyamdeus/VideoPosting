import React, { useEffect } from 'react';
import Footer from '../components/Footer'; // adjust if needed

export default function Home() {
  useEffect(() => {
    const inlineAd = document.getElementById('inline-ad');
    if (inlineAd && !inlineAd.hasChildNodes()) {
      // ✅ Inline ad atOptions config
      const scriptOptions = document.createElement('script');
      scriptOptions.type = 'text/javascript';
      scriptOptions.innerHTML = `
        atOptions = {
          'key' : 'YOUR_INLINE_AD_KEY',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      `;
      inlineAd.appendChild(scriptOptions);

      // ✅ Inline ad invoke script
      const scriptInvoke = document.createElement('script');
      scriptInvoke.type = 'text/javascript';
      scriptInvoke.async = true;
      scriptInvoke.src = '//www.highperformanceformat.com/YOUR_INLINE_AD_KEY/invoke.js';
      inlineAd.appendChild(scriptInvoke);
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

      {/* ✅ INLINE AD HERE */}
      <div id="inline-ad" style={{ margin: '20px 0' }}></div>

      <p className="description">
        This is your homepage description.
      </p>

      {/* ✅ FOOTER with its own ad */}
      <Footer />
    </>
  );
}
