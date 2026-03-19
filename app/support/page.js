'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const form = e.target;
    const data = {
      type: 'support',
      name: form.name.value,
      email: form.email.value,
      service: form.service.value,
      message: form.message.value,
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch (_) {
      setError('Something went wrong. Please email us directly at contact@nakamaai.co.');
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar alwaysScrolled />

      <section className="legal-page">
        <div className="container">
          <div className="legal-header">
            <h1>Support</h1>
            <p className="legal-meta">We aim to respond within 1&ndash;2 business days.</p>
          </div>
          <div className="legal-content">

            {!submitted ? (
              <>
                <p>Having trouble with a Nakama AI service? Fill in the form below and we&apos;ll sort it out. The more detail you include, the faster we can help.</p>

                <form className="waitlist-form" onSubmit={handleSubmit} style={{ marginTop: 28 }}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name <span>*</span></label>
                      <input type="text" id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email <span>*</span></label>
                      <input type="email" id="email" name="email" placeholder="you@email.com" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service <span>*</span></label>
                    <select id="service" name="service" required defaultValue="">
                      <option value="" disabled>Which service is this about?</option>
                      <option value="Nakama Sales">Nakama Sales</option>
                      <option value="Nakama Marketing">Nakama Marketing</option>
                      <option value="Pet-to AI">Pet-to AI</option>
                      <option value="ShibaEats">ShibaEats</option>
                      <option value="Billing">Billing / Payment</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Describe your issue <span>*</span></label>
                    <textarea id="message" name="message" placeholder="What happened? What were you trying to do? Include any error messages or screenshots if helpful." rows="5" required></textarea>
                  </div>
                  {error && <p style={{ color: '#e53e3e', marginBottom: 12 }}>{error}</p>}
                  <button type="submit" className="btn btn-primary btn-submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Submit Request'}
                  </button>
                </form>
              </>
            ) : (
              <div style={{ paddingTop: 12 }}>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Request received.</p>
                <p style={{ marginTop: 8, color: '#666' }}>We&apos;ll get back to you at your email address within 1 to 2 business days.</p>
              </div>
            )}

            <h2 style={{ marginTop: 48 }}>Other Contacts</h2>
            <p>For billing questions, see our <Link href="/refund">Refund Policy</Link>. For privacy or data-related requests, email <a href="mailto:contact@nakamaai.co">contact@nakamaai.co</a>. For everything else, visit our <Link href="/contact">Contact page</Link>.</p>

          </div>
        </div>
      </section>

      <Footer simple />
    </>
  );
}
