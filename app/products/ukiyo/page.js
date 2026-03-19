import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Pet-to AI - Product Details',
  description: 'Explore Pet-to AI: premium AI pet portraits inspired by traditional Japanese art styles.',
};

export default function NakamaUkiyoPage() {
  return (
    <>
      <Navbar alwaysScrolled />

      <section className="product-page-hero">
        <div className="container">
          <span className="section-tag">Pet-to AI</span>
          <h1>
            Pet Portraits Reimagined.
            <br />
            <span className="text-gradient">Traditional Japanese Elegance.</span>
          </h1>
          <p>
            Pet-to AI transforms your pet photos into premium portrait collections inspired by
            traditional Japanese art direction. The result is emotionally rich, style-consistent,
            high-detail artwork designed for keepsakes, gifts, and display.
          </p>
        </div>
      </section>

      <section className="product-page-section">
        <div className="container">
          <div className="product-page-grid">
            <div className="product-page-card">
              <h3>Core Capabilities</h3>
              <ul className="product-page-list">
                <li>Creates portrait series from a few pet photos.</li>
                <li>Traditional Japanese art-inspired composition and styling.</li>
                <li>High-detail rendering tuned for premium visual quality.</li>
                <li>Multiple mood and framing options for each generation set.</li>
                <li>Print-friendly outputs for frames, canvases, and gifts.</li>
                <li>Consistent identity retention across generated images.</li>
              </ul>
            </div>
            <div className="product-page-card">
              <h3>Built For</h3>
              <ul className="product-page-list">
                <li>Pet owners who want premium keepsake artwork.</li>
                <li>Gift buyers looking for meaningful personalized art.</li>
                <li>Studios and creators offering custom pet portrait services.</li>
                <li>Communities celebrating pets through visual storytelling.</li>
              </ul>
              <div className="product-page-waitlist">
                <p>Join the Pet-to AI waitlist for early access.</p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link href="/#waitlist" className="btn btn-primary">Join Waitlist</Link>
                  <Link href="/products/studio" className="btn btn-secondary">Back to Studio</Link>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/#products" className="btn btn-secondary">Back to Products</Link>
          </div>
        </div>
      </section>

      <Footer simple />
    </>
  );
}
