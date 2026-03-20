import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Nakama Sales - Product Details',
  description: 'Explore Nakama Sales: an omnichannel AI sales and support companion built to engage, qualify, and convert customer conversations.',
};

export default function NakamaSalesPage() {
  return (
    <>
      <Navbar alwaysScrolled />

      <section className="product-page-hero">
        <div className="container">
          <span className="section-tag">Nakama Sales</span>
          <h1>
            Omnichannel Conversations.
            <br />
            <span className="text-gradient">Conversion-Ready Outcomes.</span>
          </h1>
          <p>
            Nakama Sales is an always-on AI companion for customer conversations across web chat, LINE, and Instagram DM. It helps teams capture leads faster, answer questions clearly, and move buyers toward action without slowing down operations.
          </p>
        </div>
      </section>

      <section className="product-page-section">
        <div className="container">
          <div className="product-page-grid">
            <div className="product-page-card">
              <h3>Core Capabilities</h3>
              <ul className="product-page-list">
                <li>Fast agent setup with branded tone and response style controls.</li>
                <li>Continuous learning from business URLs, PDFs, docs, and custom entries.</li>
                <li>Unified support across website widget, LINE, and Instagram DM.</li>
                <li>Guided booking and reservation handoff paths to reduce drop-off.</li>
                <li>Conversation inbox for support threads, leads, and follow-ups.</li>
                <li>Escalation workflows for smooth human takeover when needed.</li>
              </ul>
            </div>
            <div className="product-page-card">
              <h3>Built For</h3>
              <ul className="product-page-list">
                <li>Service-heavy teams handling high inbound question volume.</li>
                <li>Businesses that need faster response times without larger support teams.</li>
                <li>Operators who want clearer visibility into conversation outcomes.</li>
                <li>Growth teams focused on improving lead quality and conversion velocity.</li>
              </ul>
              <div className="product-page-waitlist">
                <p>Get early access to Nakama Sales and shape the roadmap with your use case.</p>
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
