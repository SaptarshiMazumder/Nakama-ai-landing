import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us — Nakama AI',
  description: 'Learn about Nakama AI, our mission to build practical AI products, and the team behind Nakama AI.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar alwaysScrolled />

      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <span className="section-tag">About Nakama AI</span>
          <h1>Building Intelligence<br/><span className="text-gradient">That Matters.</span></h1>
          <p>We started Nakama AI because most businesses are being left behind by AI. The tools that actually work are expensive, complex, and designed for companies with technical teams and large budgets. That&apos;s not the reality most businesses live in — and it&apos;s the whole reason we exist.</p>
          <p>We build AI services that any business can pick up and use today: no engineers, no long setup, no enterprise contract. Just tools that work, from day one.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <span className="section-tag">Our Story</span>
              <h2>Born from a Simple Belief</h2>
              <p>Nakama AI was founded in 2026 with one clear conviction: the most powerful AI in the world is useless if only large companies can access it. We kept seeing the same pattern — incredible technology locked behind enterprise pricing, month-long onboarding, and teams of consultants to get it running.</p>
              <p>Our name, &ldquo;Nakama,&rdquo; comes from the Japanese word for close companions or teammates. It reflects our philosophy: AI should work alongside you as a trusted partner, not a system that takes six months to implement and requires a dedicated team to maintain.</p>
              <p>Today, we&apos;re building three core services — Nakama Sales, Nakama Marketing, and Nakama Studio — all built around the same idea: powerful AI that any business can start using today.</p>
            </div>
            <div className="about-text">
              <span className="section-tag">Our Mission</span>
              <h2>AI Shouldn&apos;t Require a Big Budget</h2>
              <p>Most businesses can&apos;t afford six-figure AI implementations or months-long rollouts. The restaurant handling 300 reservations a week, the boutique trying to scale their content, the service shop answering the same 50 questions every day — these businesses need AI right now, not after a procurement process.</p>
              <p>We build AI services priced for growth and designed for simplicity. No technical team required. No long setup. You should be up and running within hours — and you should feel the difference within the first week.</p>
              <p>AI isn&apos;t a luxury for companies with IT departments. It&apos;s a tool every business should be able to use today. That&apos;s what we&apos;re building.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-section alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Values</span>
            <h2 className="section-title">What Drives Us<br/><span className="text-gradient">Every Day.</span></h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <h4>Quality Over Quantity</h4>
              <p>We&apos;d rather ship one exceptional product than ten mediocre ones. Every pixel, every output, every interaction is crafted with care.</p>
            </div>
            <div className="value-card">
              <h4>Transparency First</h4>
              <p>We believe in open communication — with our customers, our team, and the broader AI community. No hidden costs, no data surprises.</p>
            </div>
            <div className="value-card">
              <h4>Customer Obsession</h4>
              <p>Our roadmap is driven by the people who use our products. We listen actively, iterate quickly, and ship improvements that matter.</p>
            </div>
            <div className="value-card">
              <h4>Responsible AI</h4>
              <p>We build AI that is ethical, unbiased, and safe. We prioritize ethical data practices, implement content safeguards, and maintain human oversight.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="about-section alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Corporate</span>
            <h2 className="section-title">Company &amp; <span className="text-gradient">Location Details.</span></h2>
          </div>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <div className="legal-content">
              <div className="contact-box">
                <p><strong>Company Name:</strong> Nakama AI</p>
                <p><strong>Office Address:</strong></p>
                <p>Indrakanan, Ward No-12, Kanainatsal,<br/>
                Sripalli, Barddhaman,<br/>
                BARDHAMAN, WEST BENGAL, 713103<br/>
                India</p>
                <p style={{ marginTop: 12 }}><strong>Email:</strong> <a href="mailto:contact@nakamaai.co">contact@nakamaai.co</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer simple />
    </>
  );
}

