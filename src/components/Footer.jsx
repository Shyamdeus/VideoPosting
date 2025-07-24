import React, { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    // 👉 Inject the onclckmn.com async script in the footer
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://js.onclckmn.com/static/onclicka.js';
    script.setAttribute('data-admpid', '352763');

    document.body.appendChild(script);
  }, []);

  return (
    <footer style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f5f5f5' }}>
      <p>Footer content here</p>
    </footer>
  );
}
