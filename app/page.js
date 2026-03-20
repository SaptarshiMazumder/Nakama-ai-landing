'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Antigravity from '@/components/Antigravity';

/* ---- Inline SVG helpers ---- */
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8L7 12L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

export default function Home() {
  // Scroll reveal observer
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <IndustriesSection />
      <FeaturesSection />
      <WaitlistSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <Antigravity />
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Now in Early Access — Limited Spots Available
          </div>
          <h1 className="hero-title">
            Your Trustworthy<span className="text-gradient"></span><br/>
            Sales and Marketing Expert<span className="text-gradient"></span><br/>
            <span className="text-gradient">Your AI Nakama</span>
          </h1>
          <p className="hero-subtitle">
            Nakama is a Japanese word for a trusted companion. That meaning guides our 
            products: AI agents that handles customers in real-time, 
            across all your platforms, and creates 
            campaign-ready content, 
            tailored to your brand.
          </p>
          <div className="hero-actions">
            <Link href="#waitlist" className="btn btn-primary">
              Get Early Access <ArrowIcon />
            </Link>
            <Link href="#products" className="btn btn-secondary">Explore Products</Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">Customer Support</span>
              <span className="stat-label">Handled by AI</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">Sales Operations</span>
              <span className="stat-label">Automated</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">Marketing Output</span>
              <span className="stat-label">On Autopilot</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-mouse"><div className="scroll-dot"></div></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}


/* ============================================================
   PRODUCTS
   ============================================================ */
function ProductsSection() {
  return (
    <section className="products-section" id="products">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">Nakama Services.<br/><span className="text-gradient">Built for Growth.</span></h2>
          <p className="section-desc">Nakama Sales and Nakama Marketing are our core AI agents. Nakama Studio is our creative product lab — each service is a focused tool built to deliver results from day one.</p>
        </div>
        <div className="products-grid products-grid-three">
          <div className="product-card product-studio reveal">
            <div className="product-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="4" y="4" width="40" height="40" rx="8" stroke="currentColor" strokeWidth="2"/>
                <circle cx="18" cy="18" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M4 34L14 24L22 32L30 22L44 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="product-name">Nakama Marketing</h3>
            <p className="product-tagline">Autonomous Marketing Agent</p>
            <p className="product-description">Nakama Marketing turns one campaign brief into ready-to-publish content, creative assets, and conversion-focused messaging across your core channels.</p>
            <ul className="product-features">
              {[
                'Generates campaign copy, hooks, and CTAs from one brief',
                'Creates short-form video concepts and storyboard directions',
                'Builds brand-aligned visual assets for ads and social content',
                'Repurposes one idea across Reels, Shorts, Stories, and posts',
                'Runs fast A/B creative variants to identify top performers',
              ].map(f => (
                <li key={f}><CheckIcon /> {f}</li>
              ))}
            </ul>
            <Link href="/products/marketing" className="btn btn-product btn-studio">
              View Details <ArrowIcon />
            </Link>
          </div>

          <div className="product-card product-agents reveal">
            <div className="product-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                <circle cx="10" cy="36" r="6" stroke="currentColor" strokeWidth="2"/>
                <circle cx="38" cy="36" r="6" stroke="currentColor" strokeWidth="2"/>
                <path d="M24 18V24M24 24L10 30M24 24L38 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="product-name">Nakama Sales</h3>
            <p className="product-tagline">Multi-platform AI Customer Support Agent</p>
            <p className="product-description">A customer-facing AI companion that engages leads, answers questions, and drives conversions across web chat, LINE, and Instagram DM, while your team stays focused on delivering the service.</p>
            <ul className="product-features">
              {[
                'Launch a branded AI sales agent in minutes',
                'Continuously learns from your website and business content',
                'Delivers one consistent voice across chat, LINE, and Instagram DM',
                'Guides customers to booking and reservation paths with less friction',
                'Smoothly hands over to human staff when personal support is needed',
              ].map(f => (
                <li key={f}><CheckIcon /> {f}</li>
              ))}
            </ul>
            <Link href="/products/sales" className="btn btn-product btn-agents">
              View Details <ArrowIcon />
            </Link>
          </div>

          <div className="product-card product-lab reveal">
            <div className="product-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M8 36L16 12L24 28L32 8L40 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="16" cy="12" r="2.5" fill="currentColor"/>
                <circle cx="24" cy="28" r="2.5" fill="currentColor"/>
                <circle cx="32" cy="8" r="2.5" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="product-name">Nakama Studio</h3>
            <p className="product-tagline">Focused AI Product Line</p>
            <p className="product-description">Nakama Studio is our product lab for specialized AI experiences. It ships focused products for specific audiences — starting with Pet-to AI, our premium AI pet portrait service.</p>
            <ul className="product-features">
              {[
                'Specialized AI products built for specific audiences',
                'Home of Pet-to AI — premium AI pet portraits',
                'Traditional Japanese-style art direction and finish',
                'Collectible-ready outputs for prints, gifts, and home display',
              ].map(f => (
                <li key={f}><CheckIcon /> {f}</li>
              ))}
            </ul>
            <Link href="/products/studio" className="btn btn-product btn-studio-lab">
              View Details <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   INDUSTRIES
   ============================================================ */
const INDUSTRIES = [
  { title: 'Restaurants & QSR', desc: 'Automated ordering, reservation management, menu recommendations, and kitchen workflow optimization.', icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M4 28H28M8 28V12H14V28M18 28V6H24V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: 'Hotels & Hospitality', desc: 'Concierge bots, guest experience personalization, and operational automation.', icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M4 12L16 4L28 12V26C28 27.1 27.1 28 26 28H6C4.9 28 4 27.1 4 26V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 28V18H20V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: 'Healthcare & Clinics', desc: 'Patient intake automation, appointment scheduling, clinical documentation, and triage assistance.', icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="currentColor" strokeWidth="2"/><path d="M12 14H20M12 18H18M16 10V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg> },
  { title: 'E-Commerce & Retail', desc: 'Intelligent product recommendations, customer support agents, inventory management, and returns processing.', icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6 6H26C27.1 6 28 6.9 28 8V24C28 25.1 27.1 26 26 26H6C4.9 26 4 25.1 4 24V8C4 6.9 4.9 6 6 6Z" stroke="currentColor" strokeWidth="2"/><path d="M4 12H28M10 18H14M10 22H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg> },
  { title: 'SaaS & Technology', desc: 'User onboarding flows, technical support agents, usage analytics, and churn prediction models.', icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 4L4 10V22L16 28L28 22V10L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M4 10L16 16M16 16L28 10M16 16V28" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg> },
  { title: 'Professional Services', desc: 'Document processing, lead qualification, proposal generation, and client communication management.', icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 28L8 16M16 28V8M24 28V18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><circle cx="8" cy="12" r="3" stroke="currentColor" strokeWidth="2"/><circle cx="16" cy="5" r="3" stroke="currentColor" strokeWidth="2"/><circle cx="24" cy="14" r="3" stroke="currentColor" strokeWidth="2"/></svg> },
];

function IndustriesSection() {
  return (
    <section className="industries-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Industries</span>
          <h2 className="section-title">Built for Every<br/><span className="text-gradient">Industry.</span></h2>
          <p className="section-desc">Nakama agents are designed to adapt to different industries and can be customized to your specific business needs.</p>
        </div>
        <div className="industries-grid">
          {INDUSTRIES.map(ind => (
            <div className="industry-card reveal" key={ind.title}>
              <div className="industry-icon">{ind.icon}</div>
              <h4>{ind.title}</h4>
              <p>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FEATURES
   ============================================================ */
const FEATURES = [
  { num: '01', title: 'Always-On Customer Coverage', desc: 'Nakama Sales handles inbound customers 24/7 across web chat, LINE, and Instagram DM. No missed leads, no after-hours gaps — your AI companion is always there when customers reach out.', large: true },
  { num: '02', title: 'One Brief, Full Campaign', desc: 'Nakama Marketing turns a single campaign brief into channel-ready copy, creative hooks, and content variants across all your platforms — in minutes, not days.' },
  { num: '03', title: 'Brand-Trained Intelligence', desc: 'Nakama learns from your website, products, and tone of voice. Every customer reply, caption, and message sounds like you — not a generic chatbot.' },
  { num: '04', title: 'Multi-Platform Presence', desc: 'One setup, everywhere your customers are. Manage your AI sales agent across web chat, LINE, and Instagram DM from a single, unified dashboard.' },
  { num: '05', title: 'Smart Human Handoff', desc: 'When a conversation needs a personal touch, Nakama escalates to your team with full context intact — so staff can step in without asking the customer to repeat themselves.' },
  { num: '06', title: 'Focused AI Products from Studio', desc: 'Beyond our core agents, Nakama Studio launches specialized AI products for specific audiences. Starting with Pet-to AI — our premium AI pet portrait experience inspired by traditional Japanese art.', large: true },
];

function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Why Nakama AI</span>
          <h2 className="section-title">Always On.<br/><span className="text-gradient">Always On-Brand.</span></h2>
          <p className="section-desc">Every Nakama product is built around one idea: AI that works like a trusted partner — handling customers, creating content, and growing alongside your business.</p>
        </div>
        <div className="features-grid">
          {FEATURES.map(f => (
            <div className={`feature-card ${f.large ? 'feature-large' : ''} reveal`} key={f.num}>
              <div className="feature-number">{f.num}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   WAITLIST
   ============================================================ */
function WaitlistSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const data = {
      type: 'waitlist',
      name: form.fullName.value,
      email: form.email.value,
      company: form.company.value,
      service: form.product.value,
      useCase: form.useCase.value,
    };
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch (_) {}
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="waitlist-section" id="waitlist">
      <div className="container">
        <div className="waitlist-card">
          <div className="waitlist-content">
            <h2>Get Early Access</h2>
            <p>Be among the first to experience AI agents built for sales, marketing, and creative work. Limited spots available for early access.</p>
            {!submitted ? (
              <form className="waitlist-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name <span>*</span></label>
                    <input type="text" id="fullName" name="fullName" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email <span>*</span></label>
                    <input type="email" id="email" name="email" placeholder="you@email.com" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id="company" name="company" placeholder="Acme Inc." />
                  </div>
                  <div className="form-group">
                    <label htmlFor="product">Service Interest <span>*</span></label>
                    <select id="product" name="product" required defaultValue="">
                      <option value="" disabled>Select a service</option>
                      <option value="sales">Nakama Sales — Omnichannel AI Sales Agent</option>
                      <option value="marketing">Nakama Marketing — Autonomous Marketing Agent</option>
                      <option value="studio">Nakama Studio — Specialized AI Model Lab</option>
                      <option value="petto">Pet-to AI — AI Pet Portraits</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="useCase">Tell us about your use case</label>
                  <textarea id="useCase" name="useCase" placeholder="Briefly describe how you plan to use Nakama AI..." rows="3"></textarea>
                </div>
                <div className="form-consent">
                  <label className="checkbox-label">
                    <input type="checkbox" required />
                    <span className="checkbox-copy">
                      I agree to the <Link href="/terms" target="_blank" className="consent-link">Terms and Conditions</Link> and <Link href="/privacy" target="_blank" className="consent-link">Privacy Policy</Link>. I understand that Nakama AI will process my data as described in the Privacy Policy.
                    </span>
                  </label>
                </div>
                <button type="submit" className="btn btn-primary btn-submit" disabled={loading}>
                  {loading ? (
                    <span className="btn-loading">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="spinner"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" strokeDasharray="40 20" strokeLinecap="round"/></svg>
                      Submitting...
                    </span>
                  ) : (
                    <>
                      <span className="btn-text">Add to Waitlist</span>
                      <ArrowIcon />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="waitlist-success">
                <div className="success-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2"/><path d="M14 24L22 32L34 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3>You&apos;re on the list!</h3>
                <p>Thank you for your interest in Nakama AI. We&apos;ll reach out with your early access invitation soon. Keep an eye on your inbox.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ
   ============================================================ */
const FAQS = [
  { q: 'What is Nakama Sales?', a: 'Nakama Sales is our omnichannel AI sales and customer conversation companion. It helps teams engage inbound customers across website chat, LINE, and Instagram DM, while keeping handoff and follow-up workflows organized.' },
  { q: 'What is Nakama Marketing?', a: 'Nakama Marketing is our autonomous marketing agent. It transforms campaign briefs into channel-ready copy and creative directions so teams can publish faster and test more ideas with less manual effort.' },
  { q: 'Is my data secure with Nakama AI?', a: 'We take data security seriously. All data is encrypted in transit and at rest, and we follow security best practices across our infrastructure. We never use your data to train models without explicit consent.' },
  { q: 'What does the waitlist process look like?', a: 'After joining the waitlist, you\'ll receive a confirmation email. We review applications on a rolling basis and invite users in batches. Priority is given to enterprise customers and those with clearly defined use cases. Most applicants receive access within 2-4 weeks.' },
  { q: 'How quickly can we launch?', a: 'Most teams can move from setup to live pilot quickly. We guide implementation, content setup, and workflow tuning so your launch is smooth and measurable.' },
  { q: 'Can human agents step in when needed?', a: 'Yes. Conversations can be escalated to your team whenever required, so customers always get the right level of support for complex or sensitive cases.' },
];

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Frequently Asked<br/><span className="text-gradient">Questions.</span></h2>
        </div>
        <div className="faq-grid">
          {FAQS.map((faq, i) => (
            <div className={`faq-item ${activeIndex === i ? 'active' : ''}`} key={i}>
              <button className="faq-question" onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}>
                <span>{faq.q}</span>
                <ChevronDown />
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CTA
   ============================================================ */
function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Build the Future<br/>with <span className="text-gradient">AI?</span></h2>
          <p>Be among the first to experience AI teammates built for sales, marketing, and creative work.</p>
          <div className="cta-actions">
            <Link href="#waitlist" className="btn btn-primary">Add to Waitlist</Link>
            <a href="mailto:contact@nakamaai.co" className="btn btn-secondary">Contact Sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
