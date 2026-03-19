import Link from 'next/link';
import LegalNav from '@/components/LegalNav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service — Nakama AI',
  description: 'Terms of Service for Services by Nakama AI.',
};

export default function TermsPage() {
  return (
    <>
      <LegalNav links={[{ href: '/', label: 'Home' }, { href: '/about', label: 'About' }, { href: '/privacy', label: 'Privacy' }]} />
      <section className="legal-page">
        <div className="container">
          <div className="legal-header">
            <h1>Terms of Service</h1>
            <p className="legal-meta">Effective date: March 19, 2026</p>
          </div>
          <div className="legal-content">

            <h2>1. Agreement to Terms</h2>
            <p>By accessing or using any service offered by Nakama AI (&ldquo;Services&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). Services by Nakama AI include Nakama Sales, Nakama Marketing, and Nakama Studio products such as Pet-to AI and ShibaEats. If you do not agree, do not use our Services.</p>

            <h2>2. Using Our Services</h2>
            <p>You agree to use our Services only for lawful purposes and in accordance with these Terms. You must not misuse, attempt to disrupt, or use the Services in any way that could harm Nakama AI or other users. Please refer to our <Link href="/acceptable-use">Acceptable Use Policy</Link> for full details on what is and is not permitted.</p>

            <h2>3. Eligibility</h2>
            <p>You must be at least 18 years of age to use our Services. By using them, you confirm that you meet this requirement. If you are using the Services on behalf of a business, you confirm that you have the authority to agree to these Terms on that business&apos;s behalf.</p>

            <h2>4. Payments and Billing</h2>
            <p>Some Services require payment. Billing is managed through our third-party payment processor — we do not collect or store your card details directly. All applicable fees are shown before purchase. You agree to provide accurate information to our billing partner and keep it up to date. We reserve the right to update pricing, but changes will not apply to your current billing period.</p>

            <h2>5. Refunds</h2>
            <p>Please refer to our <Link href="/refund">Refund Policy</Link> for information on how we handle refund requests. Because our Services are digital and access is granted upon payment, refunds are not offered as a standard practice but are considered in specific circumstances as described in that policy.</p>

            <h2>6. Privacy</h2>
            <p>Your privacy matters to us. Please read our <Link href="/privacy">Privacy Policy</Link> to understand how we collect, use, and protect your data. By using our Services, you agree to the data practices described there.</p>

            <h2>7. Intellectual Property</h2>
            <p>All Nakama AI software, branding, designs, and underlying models are owned by Nakama AI and protected under applicable intellectual property laws. You may not copy, reproduce, or redistribute any part of the Services without prior written permission.</p>
            <p>Any content you upload or submit remains yours. By submitting it, you grant us a limited license to process it solely for the purpose of delivering the Services to you.</p>

            <h2>8. Limitation of Liability</h2>
            <p>Our Services are provided &ldquo;as is&rdquo; without warranties of any kind. To the fullest extent permitted by law, Nakama AI shall not be liable for any indirect, incidental, or consequential damages — including loss of data, revenue, or business — arising from your use of or inability to use the Services.</p>

            <h2>9. Termination</h2>
            <p>You may stop using our Services at any time. We reserve the right to suspend or terminate access to the Services if you violate these Terms or engage in conduct that is harmful to other users or to Nakama AI.</p>

            <h2>10. Changes to These Terms</h2>
            <p>We may update these Terms from time to time. When we do, we will update the effective date at the top of this page. Continued use of our Services after changes are posted means you accept the revised Terms.</p>

            <h2>11. Governing Law</h2>
            <p>These Terms are governed by the laws of India. Any disputes arising from your use of the Services will be subject to the jurisdiction of courts in West Bengal, India.</p>

            <h2>12. Contact</h2>
            <div className="contact-box">
              <p>If you have questions about these Terms, reach out to us:</p>
              <p style={{ marginTop: 12 }}><strong>Legal:</strong> <a href="mailto:legal@nakamaai.co">legal@nakamaai.co</a></p>
              <p><strong>General:</strong> <a href="mailto:hello@nakamaai.co">hello@nakamaai.co</a></p>
            </div>

          </div>
        </div>
      </section>
      <Footer simple />
    </>
  );
}
