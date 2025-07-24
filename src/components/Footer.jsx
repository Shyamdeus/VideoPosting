import React, { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    const footerAd = document.getElementById('footer-ad');
    if (footerAd && !footerAd.hasChildNodes()) {
      // Set the atOptions config
      const scriptOptions = document.createElement('script');
      scriptOptions.type = 'text/javascript';
      scriptOptions.innerHTML = `
        atOptions = {
          'key' : '3f8144b431f600ec621cc5cffe2afa15',
          'format' : 'iframe',
          'height' : 90,
          'width' : 728,
          'params' : {}
        };
      `;
      footerAd.appendChild(scriptOptions);

      // Load the invoke.js for this key
      const scriptInvoke = document.createElement('script');
      scriptInvoke.type = 'text/javascript';
      scriptInvoke.async = true;
      scriptInvoke.src = '//www.highperformanceformat.com/3f8144b431f600ec621cc5cffe2afa15/invoke.js';
      footerAd.appendChild(scriptInvoke);
    }
  }, []);

  return (
    <footer style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f5f5f5' }}>
      <p>Footer content here</p>

      {/* ✅ Ad placeholder */}
      <div id="footer-ad" style={{ marginTop: '20px' }}></div>
    </footer>
  );
}
