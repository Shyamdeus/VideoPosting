import React from 'react';

export default function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img
          src="/home/Shyamdeus/VideoPosting/images/maxresdefault.jpg"
          alt="Banner"
          style={styles.banner}
        />
        <h1>Welcome to My Home Page</h1>
        <nav>
          <a href="#" style={styles.link}>Home</a>
          <a href="#" style={styles.link}>Dubbed Drama</a>
          <a href="#" style={styles.link}>Dubbed Movies</a>
        </nav>
      </header>

      <main style={styles.main}>
        <h2>About This Site</h2>
        <p>Contents on this site we do not own any of them</p>
        <p>Content Credits are given to the Creators and studios</p>
        <p>We do not Sell or Rent Any Contents Here</p>
        <p>Contents are shared under Fair Usage policy. We do not gain profit from them</p>
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
    maxWidth: '800px',
    padding: '2rem',
  },
  header: {
    borderBottom: '2px solid #eee',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  banner: {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '1rem',
    borderRadius: '8px',
  },
  link: {
    marginRight: '1rem',
    color: '#007bff',
    textDecoration: 'none',
  },
  main: {
    minHeight: '300px',
  },
  footer: {
    marginTop: '2rem',
    borderTop: '2px solid #eee',
    paddingTop: '1rem',
    textAlign: 'center',
  },
};
