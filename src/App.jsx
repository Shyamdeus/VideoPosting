import React, { useEffect } from 'react';
import './responsive.css';

export default function App() {
  useEffect(() => {
    // ✅ Small ad BELOW sidebar
    const smallAd = document.getElementById('small-ad-below-sidebar');
    if (smallAd) {
      const script1 = document.createElement('script');
      script1.type = 'text/javascript';
      script1.async = true;
      script1.innerHTML = `
        atOptions = {
          'key' : 'ee03ee4fc43f0e28a144abb0f0f8acd9',
          'format' : 'iframe',
          'height' : 300,
          'width' : 160,
          'params' : {}
        };
      `;
      smallAd.appendChild(script1);

      const script1Src = document.createElement('script');
      script1Src.type = 'text/javascript';
      script1Src.async = true;
      script1Src.src = '//www.highperformanceformat.com/ee03ee4fc43f0e28a144abb0f0f8acd9/invoke.js';
      smallAd.appendChild(script1Src);
    }

    // ✅ New in-content ad BELOW video
    const inlineAd = document.getElementById('in-content-ad');
    if (inlineAd) {
      const scriptInline = document.createElement('script');
      scriptInline.type = 'text/javascript';
      scriptInline.async = true;
      scriptInline.innerHTML = `
        atOptions = {
          'key' : 'YOUR_INLINE_AD_KEY',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      `;
      inlineAd.appendChild(scriptInline);

      const scriptInlineSrc = document.createElement('script');
      scriptInlineSrc.type = 'text/javascript';
      scriptInlineSrc.async = true;
      scriptInlineSrc.src = '//www.highperformanceformat.com/YOUR_INLINE_AD_KEY/invoke.js';
      inlineAd.appendChild(scriptInlineSrc);
    }

    // ✅ Bottom BIG ad
    const bottomAd = document.getElementById('bottom-ad');
    if (bottomAd) {
      const script2 = document.createElement('script');
      script2.type = 'text/javascript';
      script2.async = true;
      script2.innerHTML = `
        atOptions = {
          'key' : '3f8144b431f600ec621cc5cffe2afa15',
          'format' : 'iframe',
          'height' : 90,
          'width' : 728,
          'params' : {}
        };
      `;
      bottomAd.appendChild(script2);

      const script2Src = document.createElement('script');
      script2Src.type = 'text/javascript';
      script2Src.async = true;
      script2Src.src = '//www.highperformanceformat.com/3f8144b431f600ec621cc5cffe2afa15/invoke.js';
      bottomAd.appendChild(script2Src);
    }
  }, []);

  return (
    <div className="container">
      <header className="header">
        <img
          src="/images/maxresdefault.jpg"
          alt="Banner"
          className="banner"
        />

        <div className="logo-container">
          <img
            src="/images/bluebird.png"
            alt="Logo"
            className="logo"
          />
          <h1 className="title">My Home Page</h1>
        </div>

        <nav className="nav">
          <a href="#" className="link">Home</a>
          <a href="#" className="link">Dubbed Drama</a>
          <a href="#" className="link">Dubbed Movies</a>
        </nav>
      </header>

      <main className="main">
        <div className="content-layout">
          {/* ✅ LEFT COLUMN: sticky sidebar + ad BELOW */}
          <div className="left-column">
            <aside className="sidebar sticky">
              <div className="search-container">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="search-input"
                />
                <button className="search-button">Search</button>
              </div>

              <nav className="sidebar-nav">
                <a href="#" className="sidebar-link active">Home</a>
                <a href="#" className="sidebar-link">Dubbed Drama</a>
                <a href="#" className="sidebar-link">Dubbed Movies</a>
              </nav>
            </aside>

            <div id="small-ad-below-sidebar"></div>
          </div>

          {/* ✅ RIGHT COLUMN: Video content */}
          <div className="video-content">
            <div className="video-top-section">
              <p className="video-section-text">
                Welcome to our premium streaming platform - Your destination for the best dubbed content!
              </p>
              <img 
                src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
                alt="Top Logo"
                className="video-section-logo"
              />
            </div>

            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Embedded Video"
                frameBorder="0"
                allowFullScreen
                className="iframe"
              ></iframe>
            </div>

            {/* ✅ New in-content ad BELOW video */}
            <div id="in-content-ad"></div>

            <div className="video-bottom-section">
              <p className="video-section-text">
                Thank you for choosing us - Enjoy unlimited entertainment with high-quality dubbed content!
              </p>
              <img 
                src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
                alt="Bottom Logo"
                className="video-section-logo"
              />
            </div>

            <p className="description">
              This is a description of the video. You can add any details here.
            </p>
          </div>
        </div>
      </main>

      {/* ✅ Bottom BIG ad */}
      <div id="bottom-ad"></div>

      <footer className="footer">
        <p>© 2025 My Website Dubbed Dramas</p>
      </footer>
    </div>
  );
}
