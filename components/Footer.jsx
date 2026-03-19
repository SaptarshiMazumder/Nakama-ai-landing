import Link from 'next/link';

export default function Footer({ simple = false }) {
  if (simple) {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
            <p>&copy; 2024&ndash;2026 Nakama AI. All rights reserved.</p>
            <p className="footer-legal-note">
              <Link href="/terms">Terms</Link> &middot;{' '}
              <Link href="/privacy">Privacy</Link> &middot;{' '}
              <Link href="/refund">Refunds</Link> &middot;{' '}
              <Link href="/cookies">Cookies</Link> &middot;{' '}
              <Link href="/acceptable-use">Acceptable Use</Link>
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo">
              <div className="logo-icon">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="16" cy="16" r="6" fill="currentColor"/>
                  <path d="M16 2C16 2 22 10 22 16C22 22 16 30 16 30" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M16 2C16 2 10 10 10 16C10 22 16 30 16 30" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <span className="logo-text">Nakama<span className="logo-accent">AI</span></span>
            </Link>
            <p className="footer-tagline">Building practical AI products that work like real teammates.</p>
            <div className="footer-social">
              <a href="#" aria-label="Twitter/X">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M15.27 1.61h2.97l-6.49 7.42 7.63 10.08h-5.98l-4.68-6.12-5.36 6.12H.39l6.94-7.93L.01 1.61h6.13l4.23 5.59 4.9-5.59Zm-1.04 15.7h1.64L5.88 3.29H4.12l10.11 14.02Z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M4.5 3C3.67 3 3 3.67 3 4.5S3.67 6 4.5 6 6 5.33 6 4.5 5.33 3 4.5 3ZM3 8H6V17H3V8ZM8 8H11V9.5C11.5 8.5 12.8 7.7 14.5 8C16.5 8.3 17 9.8 17 12V17H14V12.5C14 11.5 14 10.2 12.5 10.2S11 11.5 11 12.5V17H8V8Z"/></svg>
              </a>
              <a href="#" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1C5.03 1 1 5.03 1 10c0 3.97 2.58 7.35 6.16 8.54.45.08.62-.2.62-.43v-1.5c-2.51.54-3.04-1.21-3.04-1.21-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.07 1.38.93 1.38.93.8 1.37 2.1.97 2.62.74.08-.58.31-.97.57-1.2-2-.23-4.1-1-4.1-4.46 0-.98.35-1.79.93-2.42-.09-.23-.4-1.15.09-2.39 0 0 .76-.24 2.48.93a8.64 8.64 0 014.52 0c1.72-1.17 2.48-.93 2.48-.93.49 1.24.18 2.16.09 2.39.58.63.93 1.44.93 2.42 0 3.47-2.11 4.23-4.12 4.45.33.28.62.84.62 1.69v2.51c0 .24.16.52.63.43A9.01 9.01 0 0019 10c0-4.97-4.03-9-9-9Z"/></svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><Link href="/products/sales">Nakama Sales</Link></li>
              <li><Link href="/products/marketing">Nakama Marketing</Link></li>
              <li><Link href="/products/studio">Nakama Studio</Link></li>
              <li><Link href="/products/ukiyo">Pet-to AI</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/refund">Refund Policy</Link></li>
              <li><Link href="/cookies">Cookie Policy</Link></li>
              <li><Link href="/acceptable-use">Acceptable Use Policy</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><Link href="/support">Support</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024&ndash;2026 Nakama AI. All rights reserved.</p>
          <p className="footer-legal-note"><a href="mailto:legal@nakamaai.co">legal@nakamaai.co</a></p>
        </div>
      </div>
    </footer>
  );
}
