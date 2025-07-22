import React from 'react';
import './responsive.css';

export default function App() {
  return (
    <div className="container">
      <header className="header">
        {/* Banner Image */}
        <img
          src="/images/maxresdefault.jpg"
          alt="Banner"
          className="banner"
        />

        {/* Logo + Title */}
        <div className="logo-container">
          <img
            src="/images/bluebird.png"
            alt="Logo"
            className="logo"
          />
          <h1 className="title">My Home Page</h1>
        </div>

        {/* Nav Bar */}
        <nav className="nav">
          <a href="#" className="link">Home</a>
          <a href="#" className="link">Dubbed Drama</a>
          <a href="#" className="link">Dubbed Movies</a>
        </nav>
      </header>

      <main className="main">
        <div className="content-layout">
          {/* Left Sidebar */}
          <aside className="sidebar">
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

          {/* Video Content */}
          <div className="video-content">
            {/* Top Section with Text and Logo */}
            <div className="video-top-section">
              <p className="video-section-text">Welcome to our premium streaming platform - Your destination for the best dubbed content!</p>
              <img src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop" alt="Top Logo" className="video-section-logo" />
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

            {/* Bottom Section with Text and Logo */}
            <div className="video-bottom-section">
              <p className="video-section-text">Thank you for choosing us - Enjoy unlimited entertainment with high-quality dubbed content!</p>
              <img src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop" alt="Bottom Logo" className="video-section-logo" />
            </div>

            <p className="description">
              This is a description of the video. You can add any details here.
            </p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 My Website Dubbed Dramas</p>
      </footer>
    </div>
  );
}
