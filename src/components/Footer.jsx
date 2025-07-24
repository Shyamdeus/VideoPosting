import React, { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    // ✅ This makes sure the ad script runs to render the banner
    const bannerAdScript = document.createElement('script');
    bannerAdScript.type = 'text/javascript';
    bannerAdScript.async = true;
    bannerAdScript.src = '//www.highperformanceformat.com/6083541/invoke.js'; // Replace with your correct script URL
    document.body.appendChild(bannerAdScript);
  }, []);

  return (
    <footer style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f5f5f5' }}>
      <p>Footer content here</p>

      {/* ✅ Your banner ad */}
      <div data-banner-id="6083541" style={{ marginTop: '20px' }}></div>
    </footer>
  );
}
