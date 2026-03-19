import Link from 'next/link';
import LegalNav from '@/components/LegalNav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Refund Policy — Nakama AI',
  description: 'Refund and cancellation policy for Services by Nakama AI.',
};

export default function RefundPage() {
  return (
    <>
      <LegalNav links={[{ href: '/', label: 'Home' }, { href: '/about', label: 'About' }, { href: '/terms', label: 'Terms' }]} />
      <section className="legal-page">
        <div className="container">
          <div className="legal-header">
            <h1>Refund Policy</h1>
            <p className="legal-meta">Effective date: March 19, 2026</p>
          </div>
          <div className="legal-content">

            <p>This policy applies to all subscriptions and purchases for Services by Nakama AI.</p>

            <h2>1. How Billing Works</h2>
            <p>Payments for Nakama AI services are processed through third-party billing platforms. When you subscribe or make a purchase, your payment is handled by our billing partner — we do not collect or store your card details directly. You may receive receipts and billing communications from our payment processor on our behalf.</p>

            <h2>2. General Policy</h2>
            <p>Because our services are digital and access is granted immediately upon payment, we do not offer refunds as a standard practice. You are free to cancel at any time, but payments already processed will not be refunded.</p>

            <h2>3. Cancellations</h2>
            <p>You can cancel a subscription at any time by contacting us at <a href="mailto:support@nakamaai.co">support@nakamaai.co</a>. After cancellation, your access continues until the end of the current billing period. You will not be charged for any subsequent periods.</p>

            <h2>4. Exceptions</h2>
            <p>We will issue a refund if you were charged in error, charged an incorrect amount, charged twice due to a technical issue, or if an unauthorized charge occurred on your account. Refund requests for these situations must be submitted within 14 days of the charge. Once approved, refunds are processed within 5 to 10 business days depending on your payment method and billing platform.</p>

            <h2>5. How to Request a Refund</h2>
            <p>Email us at <a href="mailto:support@nakamaai.co">support@nakamaai.co</a> with your name, the email associated with your account, the date and amount of the charge, and a brief description of the issue. We will respond within 2 business days.</p>

            <h2>6. Changes to This Policy</h2>
            <p>We may update this policy from time to time. Changes will be reflected by the updated effective date at the top of this page.</p>

            <h2>7. Contact</h2>
            <div className="contact-box">
              <p>For refund or billing questions:</p>
              <p style={{ marginTop: 12 }}><strong>Email:</strong> <a href="mailto:support@nakamaai.co">support@nakamaai.co</a></p>
              <p><strong>General:</strong> <a href="mailto:hello@nakamaai.co">hello@nakamaai.co</a></p>
            </div>

          </div>
        </div>
      </section>
      <Footer simple />
    </>
  );
}
