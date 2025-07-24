import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../responsive.css';

export default function Layout() {
  useEffect(() => {
    // Bottom big ad
    const bottomAd = document.getElementById('bottom-ad');
    if (bottomAd && !bottomAd.hasChildNodes()) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = `
        atOptions = {
          'key' : '3f8144b431f600ec621cc5cffe2afa15',
          'format' : 'iframe',
          'height' : 90,
          'width' : 728,
          'params' : {}
        };
      `;
      bottomAd.appendChild(script);

      const scriptSrc = document.createElement('script');
      scriptSrc.type = 'text/javascript';
      scriptSrc.async = true;
      scriptSrc.src = '//www.highperformanceformat.com/3f8144b431f600ec621cc5cffe2afa15/invoke.js';
      bottomAd.appendChild(scriptSrc);
    }
  }, []);

  return (
    <div className="container">
      <header className="header">
        <img src="/images/maxresdefault.jpg" alt="Banner" className="banner" />

        <div className="logo-container">
          <img src="/images/bluebird.png" alt="Logo" className="logo" />
          <h1 className="title">My Home Page</h1>
        </div>

        <nav className="nav">
          <Link to="/" className="link">Home</Link>
          <Link to="/dubbed-drama" className="link">Dubbed Drama</Link>
          <Link to="/dubbed-movies" className="link">Dubbed Movies</Link>
        </nav>
      </header>

      <main className="main">
        <div className="content-layout">
          <div className="left-column">
            
          </div>

          <div className="video-content">
            <Outlet /> {/* Page content goes here */}
          </div>
        </div>
      </main>

      <div id="bottom-ad"></div>

      <footer className="footer">
        <p>© 2025 My Website Dubbed Dramas</p>
      </footer>
    </div>
  );
}
