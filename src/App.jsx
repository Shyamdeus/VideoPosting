import React from 'react';

export default function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        {/* Banner Image */}
        <img
          src="/images/maxresdefault.jpg"
          alt="Banner"
          style={styles.banner}
        />

        {/* Logo + Title */}
        <div style={styles.logoContainer}>
          <img
            src="/images/bluebird.png"
            alt="Logo"
            style={styles.logo}
          />
          <h1 style={styles.title}>My Home Page</h1>
        </div>

        {/* Nav Bar */}
        <nav style={styles.nav}>
          <a href="#" style={styles.link}>Home</a>
          <a href="#" style={styles.link}>Dubbed Drama</a>
          <a href="#" style={styles.link}>Dubbed Movies</a>
        </nav>
      </header>

      <main style={styles.main}>
        <h2>Featured Video</h2>
        <div style={styles.videoWrapper}>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Embedded Video"
            frameBorder="0"
            allowFullScreen
            style={styles.iframe}
          ></iframe>
        </div>
        <p style={styles.description}>
          This is a description of the featured video. Replace this text with your actual content.
        </p>
      </main>

      <footer style={styles.footer}>
        <p>© 2025 My Website Dubbed Dramas</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '0 auto',
    maxWidth: '1000px',
    width: '100%',
    padding: '0',
  },
  header: {
    background: '#007bff',
    color: '#fff',
    textAlign: 'center',
    borderBottom: '2px solid #eee',
  },
  banner: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  logoContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem 0',
  },
  logo: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginRight: '1rem',
    border: '2px solid #fff',
    background: '#fff',
  },
  title: {
    margin: 0,
    fontSize: '2rem',
  },
  nav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    paddingBottom: '1rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  main: {
    minHeight: '300px',
    padding: '2rem',
    textAlign: 'center',
  },
  videoWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '800px',
    paddingBottom: '56.25%', // 16:9 aspect ratio
    height: 0,
    margin: '1rem auto',
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0,
  },
  description: {
    maxWidth: '800px',
    margin: '1rem auto',
  },
  footer: {
    marginTop: '2rem',
    borderTop: '2px solid #eee',
    padding: '1rem',
    textAlign: 'center',
  },
};
