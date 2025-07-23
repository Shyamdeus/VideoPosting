import React, { useEffect } from 'react';
import '../responsive.css';

export default function Sidebar() {
  useEffect(() => {
    const smallAd = document.getElementById('small-ad-below-sidebar');
    if (smallAd && !smallAd.hasChildNodes()) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = `
        atOptions = {
          'key' : 'ee03ee4fc43f0e28a144abb0f0f8acd9',
          'format' : 'iframe',
          'height' : 300,
          'width' : 160,
          'params' : {}
        };
      `;
      smallAd.appendChild(script);

      const scriptSrc = document.createElement('script');
      scriptSrc.type = 'text/javascript';
      scriptSrc.async = true;
      scriptSrc.src = '//www.highperformanceformat.com/ee03ee4fc43f0e28a144abb0f0f8acd9/invoke.js';
      smallAd.appendChild(scriptSrc);
    }
  }, []);

  return (
    <>
      <aside className="sidebar sticky">
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">Search</button>
        </div>

        <nav className="sidebar-nav">
          <a href="/" className="sidebar-link active">Home</a>
          <a href="/dubbed-drama" className="sidebar-link">Dubbed Drama</a>
          <a href="/dubbed-movies" className="sidebar-link">Dubbed Movies</a>
        </nav>
      </aside>

      <div id="small-ad-below-sidebar"></div>
    </>
  );
}
