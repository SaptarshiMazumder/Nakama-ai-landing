import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Nakama Marketing - Product Details',
  description: 'Explore Nakama Marketing: an autonomous marketing agent that turns briefs into campaign-ready creative and messaging.',
};

export default function NakamaMarketingPage() {
  return (
    <>
      <Navbar alwaysScrolled />

      <section className="product-page-hero">
        <div className="container">
          <span className="section-tag">Nakama Marketing</span>
          <h1>
            One Brief In.
            <br />
            <span className="text-gradient">Campaign Assets Out.</span>
          </h1>
          <p>
            Nakama Marketing works like an autonomous campaign operator. It translates your core idea into ready-to-publish messaging, creative directions, and multi-format content built for modern channels.
          </p>
        </div>
      </section>

      <section className="product-page-section">
        <div className="container">
          <div className="product-page-grid">
            <div className="product-page-card">
              <h3>Core Capabilities</h3>
              <ul className="product-page-list">
                <li>Campaign copy, hooks, and CTA generation from a single input brief.</li>
                <li>Short-form video concepts with storyboard and shot guidance.</li>
                <li>Brand-aligned visuals for ads, social posts, and performance creatives.</li>
                <li>Cross-format content repurposing for Reels, Shorts, Stories, and feeds.</li>
                <li>Rapid A/B variant generation to test creative angles at speed.</li>
                <li>Performance-informed recommendations for next campaign iterations.</li>
              </ul>
            </div>
            <div className="product-page-card">
              <h3>Built For</h3>
              <ul className="product-page-list">
                <li>Marketing teams that need output volume without losing quality.</li>
                <li>Brands balancing organic content and paid campaign execution.</li>
                <li>Teams that need consistent voice across channels and audiences.</li>
                <li>Operators looking to reduce campaign turnaround time significantly.</li>
              </ul>
              <div className="product-page-waitlist">
                <p>Join the Nakama Marketing waitlist and get first access to launch features.</p>
                <Link href="/#waitlist" className="btn btn-primary">Add to Waitlist</Link>
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
