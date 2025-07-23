import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
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

      <div id="in-content-ad"></div>

      <p className="description">
        This is your homepage description.
      </p>
    </>
  );
}
