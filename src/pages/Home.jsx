import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // ✅ EXISTING INLINE AD
    const inlineAd = document.getElementById('in-content-ad');
    if (inlineAd && !inlineAd.hasChildNodes()) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = `
        atOptions = {
          'key' : 'YOUR_INLINE_AD_KEY',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      `;
      inlineAd.appendChild(script);

      const scriptSrc = document.createElement('script');
      scriptSrc.type = 'text/javascript';
      scriptSrc.async = true;
      scriptSrc.src = '//www.highperformanceformat.com/YOUR_INLINE_AD_KEY/invoke.js';
      inlineAd.appendChild(scriptSrc);
    }

    // ✅ NEW BANNER AD
    // If your banner uses the same ad network,
    // You must load its script to render <div data-banner-id="6083541"></div>
    const bannerAdScript = document.createElement('script');
    bannerAdScript.type = 'text/javascript';
    bannerAdScript.async = true;
    bannerAdScript.src = '//www.highperformanceformat.com/6083541/invoke.js'; // Replace with your correct script URL
    document.body.appendChild(bannerAdScript);
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

      {/* ✅ Existing inline ad */}
      <div id="in-content-ad"></div>

      {/* ✅ New banner ad below */}
      <div data-banner-id="6083541" style={{ marginTop: '20px' }}></div>

      <p className="description">
        This is your homepage description.
      </p>
    </>
  );
}
