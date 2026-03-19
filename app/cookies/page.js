import Link from 'next/link';
import LegalNav from '@/components/LegalNav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cookie Policy — Nakama AI',
  description: 'Cookie Policy for Nakama AI. Learn about the cookies and tracking technologies we use.',
};

export default function CookiesPage() {
  return (
    <>
      <LegalNav links={[{ href: '/', label: 'Home' }, { href: '/about', label: 'About' }, { href: '/privacy', label: 'Privacy' }]} />
      <section className="legal-page">
        <div className="container">
          <div className="legal-header">
            <h1>Cookie Policy</h1>
            <p className="legal-meta">Effective date: March 19, 2026</p>
          </div>
          <div className="legal-content">

            <p>This Cookie Policy explains how Nakama AI (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) uses cookies and similar technologies when you visit our website or use our services. It should be read alongside our <Link href="/privacy">Privacy Policy</Link>.</p>

            <h2>1. What Are Cookies?</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They help websites work correctly, remember your preferences, and give us information about how our site is used.</p>

            <h2>2. Cookies We Use</h2>
            <p><strong>Strictly necessary cookies</strong> are essential for the site to function. These include cookies that maintain your session, keep you logged in securely, protect against CSRF attacks, and remember your cookie consent choice. You cannot opt out of these.</p>
            <p><strong>Analytics cookies</strong> help us understand how visitors interact with our website. We use Google Analytics to collect anonymous usage data such as pages visited and time on site. You can opt out of analytics cookies via our consent banner.</p>
            <p><strong>Marketing cookies</strong> may be used to measure the effectiveness of our advertising. We only use these with your explicit consent and only where we run paid campaigns.</p>

            <h2>3. Other Tracking Technologies</h2>
            <p>We may use web beacons — small transparent images embedded in pages or emails — to understand content engagement. We also use browser local storage for performance and to preserve your session state between page loads.</p>

            <h2>4. How to Manage Cookies</h2>
            <p>When you first visit our website, you can accept or decline non-essential cookies via our consent banner. You can also control cookies through your browser settings — most browsers let you view, delete, and block cookies. Note that blocking certain cookies may affect how the site functions.</p>

            <h2>5. Do Not Track</h2>
            <p>We do not currently respond to browser Do Not Track signals, but we honour your cookie preferences as set through our consent banner.</p>

            <h2>6. Changes to This Policy</h2>
            <p>We may update this policy from time to time. Changes will be reflected by the updated effective date at the top of this page.</p>

            <h2>7. Contact</h2>
            <div className="contact-box">
              <p>For questions about cookies or how we use them:</p>
              <p style={{ marginTop: 12 }}><strong>Email:</strong> <a href="mailto:contact@nakamaai.co">contact@nakamaai.co</a></p>
            </div>

          </div>
        </div>
      </section>
      <Footer simple />
    </>
  );
}
