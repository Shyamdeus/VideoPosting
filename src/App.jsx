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
        <h2>About This Site</h2>
        <p>Contents on this site we do not own any of them.</p>
        <p>Content credits are given to the creators and studios.</p>
        <p>We do not sell or rent any content here.</p>
        <p>Contents are shared under Fair Usage policy. We do not gain profit from them.</p>
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
  },
  logoContainer: {
    display: 'flex',
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
  },
  footer: {
    marginTop: '2rem',
    borderTop: '2px solid #eee',
    padding: '1rem',
    textAlign: 'center',
  },
};
