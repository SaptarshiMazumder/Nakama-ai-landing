'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (localStorage.getItem('nakama_cookies_accepted')) return;
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const accept = () => {
    localStorage.setItem('nakama_cookies_accepted', 'true');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('nakama_cookies_accepted', 'minimal');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={`cookie-banner ${visible ? 'visible' : ''}`}>
      <div className="cookie-content">
        <p>
          We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.{' '}
          <Link href="/cookies">Learn more</Link>
        </p>
        <div className="cookie-actions">
          <button className="btn btn-sm btn-secondary" onClick={decline}>Decline</button>
          <button className="btn btn-sm btn-primary" onClick={accept}>Accept All</button>
        </div>
      </div>
    </div>
  );
}
