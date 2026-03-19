import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PettoScreenshots from '@/components/PettoScreenshots';

export const metadata = {
  title: 'Nakama Studio - Product Details',
  description: 'Explore Nakama Studio: a specialized AI model lab for domain-focused, high-quality product experiences.',
};

export default function NakamaStudioPage() {
  return (
    <>
      <Navbar alwaysScrolled />

      <section className="product-page-hero">
        <div className="container">
          <span className="section-tag">Nakama Studio</span>
          <h1>
            Specialized Models.
            <br />
            <span className="text-gradient">Exceptional Product Quality.</span>
          </h1>
          <p>
            Nakama Studio is our product lab for specialized AI experiences.
            We build focused products for specific audiences, using carefully selected AI models
            and workflows to deliver quality results that feel personal and polished.
          </p>
        </div>
      </section>

      <section className="product-page-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: 36 }}>
            <span className="section-tag">Products</span>
            <h2 className="section-title">Studio Releases.</h2>
            <p className="section-desc">
              Focused products built for clear outcomes, premium quality, and memorable user experience.
            </p>
          </div>

          <div className="studio-products-grid">
            <article className="studio-product-card studio-product-card--petto">
              <div className="studio-product-head">
                <h3>Pet-to AI</h3>
                <p className="studio-product-tagline">Portrait-grade pet art, designed to keep.</p>
              </div>
              <p className="studio-product-copy">
                Pet-to AI turns everyday pet photos into premium, frame-worthy artwork with a traditional Japanese
                visual character. Every output is tuned for style consistency, emotional detail, and display quality.
              </p>
              <ul className="studio-product-points">
                <li>High-fidelity portrait generation from simple pet photos.</li>
                <li>Traditional Japanese inspired art direction and finish.</li>
                <li>Collectible-ready output for prints, gifts, and home display.</li>
              </ul>
              <PettoScreenshots />
              <div className="studio-product-actions">
                <a href="https://pet-to.com" target="_blank" rel="noopener noreferrer" className="btn btn-product btn-studio-lab">Try Pet-to AI →</a>
              </div>
            </article>

            <article className="studio-product-card studio-product-card--shibaeats">
              <div className="studio-product-head">
                <h3>ShibaEats</h3>
                <p className="studio-product-tagline">Your AI guide for a healthier routine.</p>
              </div>
              <p className="studio-product-copy">
                ShibaEats is an intelligent wellness companion powered by a friendly Shiba coach persona. It helps users
                stay on track through practical nutrition guidance, adaptive daily plans, and long-term progress support.
              </p>
              <ul className="studio-product-points">
                <li>Personalized meal and calorie guidance based on user goals.</li>
                <li>AI coaching that adapts as routines, weight, and habits change.</li>
                <li>Clear daily actions that make healthy consistency easier.</li>
              </ul>
              <div className="studio-product-actions">
                <Link href="/#waitlist" className="btn btn-product btn-agents">Join Waitlist</Link>
              </div>
            </article>
          </div>

          <div className="product-page-waitlist">
            <p>Join the waitlist and get priority access to upcoming Studio launches.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/#waitlist" className="btn btn-primary">Join Waitlist</Link>
              <Link href="/#products" className="btn btn-secondary">Back to Products</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer simple />
    </>
  );
}
