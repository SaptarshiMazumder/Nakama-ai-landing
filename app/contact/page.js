'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const form = e.target;
    const data = {
      type: 'contact',
      name: form.name.value,
      email: form.email.value,
      inquiryType: form.inquiryType.value,
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
      setError('Something went wrong. Please try emailing us directly at contact@nakamaai.co.');
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar alwaysScrolled />

      <section className="legal-page">
        <div className="container">
          <div className="legal-header">
            <h1>Contact Us</h1>
            <p className="legal-meta">We&apos;re a small team — we read every message.</p>
          </div>
          <div className="legal-content">

            {!submitted ? (
              <>
                <p>Fill in the form below and we&apos;ll get back to you within 1 to 2 business days. Or email us directly using the contacts listed below.</p>

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
                    <label htmlFor="inquiryType">Type of Inquiry <span>*</span></label>
                    <select id="inquiryType" name="inquiryType" required defaultValue="">
                      <option value="" disabled>Select a topic</option>
                      <option value="General">General Inquiry</option>
                      <option value="Support">Customer Support</option>
                      <option value="Billing">Billing or Refund</option>
                      <option value="Privacy / Data">Privacy or Data Request</option>
                      <option value="Partnership">Partnership or Media</option>
                      <option value="Abuse Report">Abuse or Safety Report</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message <span>*</span></label>
                    <textarea id="message" name="message" placeholder="Tell us what's on your mind..." rows="5" required></textarea>
                  </div>
                  {error && <p style={{ color: '#e53e3e', marginBottom: 12 }}>{error}</p>}
                  <button type="submit" className="btn btn-primary btn-submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </>
            ) : (
              <div className="waitlist-success" style={{ textAlign: 'left' }}>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Message sent.</p>
                <p style={{ marginTop: 8, color: '#666' }}>We&apos;ll get back to you at your email address within 1 to 2 business days.</p>
              </div>
            )}

            <h2 style={{ marginTop: 48 }}>Direct Contacts</h2>

            <div className="contact-box">
              <p><strong>Email:</strong> <a href="mailto:contact@nakamaai.co">contact@nakamaai.co</a></p>
            </div>

            <h2>Company Address</h2>
            <div className="contact-box">
              <p><strong>Nakama AI</strong></p>
              <p style={{ marginTop: 8 }}>Indrakanan, Ward No-12, Kanainatsal,<br />Sripalli, Barddhaman,<br />West Bengal, 713103, India</p>
            </div>

          </div>
        </div>
      </section>

      <Footer simple />
    </>
  );
}
