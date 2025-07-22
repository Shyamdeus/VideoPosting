import React from 'react';
import './responsive.css';

export default function App() {
  return (
    <div className="wrapper">
      {/* Left Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-content">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <button className="search-button">🔍</button>
          </div>
          
          <nav className="sidebar-nav">
            <a href="#" className="sidebar-link active">Home</a>
            <a href="#" className="sidebar-link">Dubbed Drama</a>
            <a href="#" className="sidebar-link">Dubbed Movies</a>
          </nav>
        </div>
      </aside>

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

      </header>

      <main className="main-content">
        <h2 className="section-title">Featured Video</h2>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Embedded Video"
            frameBorder="0"
            allowFullScreen
            className="video-iframe"
          ></iframe>
        </div>
        <p className="description">
          This is a description of the featured video. Replace this text with your actual content.
        </p>
      </main>

      <footer className="footer">
        <p>© 2025 My Website Dubbed Dramas</p>
      </footer>
    </div>
  );
}
