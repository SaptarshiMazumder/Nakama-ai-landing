import Link from 'next/link';
import LegalNav from '@/components/LegalNav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy — Nakama AI',
  description: 'Privacy Policy for Nakama AI. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <>
      <LegalNav links={[{ href: '/', label: 'Home' }, { href: '/about', label: 'About' }, { href: '/terms', label: 'Terms' }]} />
      <section className="legal-page">
        <div className="container">
          <div className="legal-header">
            <h1>Privacy Policy</h1>
            <p className="legal-meta">Effective date: March 19, 2026</p>
          </div>
          <div className="legal-content">

            <p>Nakama AI (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your privacy. This policy explains how we collect, use, and protect your information when you use Services by Nakama AI.</p>

            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly when you sign up, join our waitlist, or use our services. This includes your name, email address, and where relevant, your company name. When you subscribe or make a purchase for a Nakama AI service, payment is processed by our third-party billing partner — we do not collect or store your card or payment details on our servers.</p>
            <p>When you use our services, we also collect business or personal content you provide to configure them. For Nakama Sales, this includes website URLs, documents, and product information you share to train your AI agent, as well as the conversations your customers have with it. For Nakama Marketing, this includes campaign briefs, brand materials, and any content you upload to generate creative output. For Nakama Studio products like Pet-to AI, this includes the photos or inputs you upload to generate artwork. For ShibaEats, this includes the health and lifestyle information you share to receive personalized guidance.</p>
            <p>We also collect basic usage and technical information automatically, such as pages visited, features used, IP address, and browser type. We use cookies to keep you logged in and understand how our platform is used. See our <Link href="/cookies">Cookie Policy</Link> for details.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to deliver and operate our services, process payments through our billing partner, send you service-related communications, and improve our products over time. We do not use your content or your customers&apos; data to train AI models without your explicit consent.</p>

            <h2>3. Sharing of Information</h2>
            <p>We do not sell your data. We share information only with third-party providers we need to run our services. This includes Google (Gemini API), which we use as our primary AI model provider to generate responses and content — inputs processed through our services may be sent to Google&apos;s API and are governed by the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>. We also work with our billing platform to process payments, cloud hosting providers to operate our infrastructure, and email delivery services to communicate with you. All providers access your data only to perform services on our behalf.</p>
            <p>We may also disclose information when required by law or to protect the rights and safety of Nakama AI and its users.</p>

            <h2>4. Legal Basis for Processing</h2>
            <p>Where required by applicable data protection law, we process personal data on the basis of contract performance, legitimate interests, legal obligation, or consent. You may withdraw consent at any time where that is the basis for processing.</p>

            <h2>5. Data Retention</h2>
            <p>We retain your account and waitlist data for the duration of your relationship with us and up to 90 days after closure. Conversation data processed through Nakama Sales is retained for up to 90 days. Generated content — such as marketing assets or pet portraits — is retained for 30 days unless saved to your account. Billing records are retained for 7 years as required by law. Usage logs are retained for up to 12 months before deletion or anonymization.</p>

            <h2>6. Data Security</h2>
            <p>We take reasonable technical and organizational measures to protect your data. All data in transit is encrypted. No system is completely secure, but we take this responsibility seriously and will notify you of any confirmed breach in accordance with applicable law.</p>

            <h2>7. International Data Transfers</h2>
            <p>Our services are operated from India. Your data may be processed in other countries where our providers operate, including the United States via Google&apos;s Gemini API. We take steps to ensure such transfers comply with applicable data protection requirements.</p>

            <h2>8. Your Rights</h2>
            <p>You have the right to access, correct, delete, or export the personal data we hold about you, and to object to or restrict certain types of processing. To make a request, email us at <a href="mailto:contact@nakamaai.co">contact@nakamaai.co</a> and we will respond within 30 days.</p>

            <h2>9. Children</h2>
            <p>Our services are not directed to anyone under 18. We do not knowingly collect data from children.</p>

            <h2>10. Changes to This Policy</h2>
            <p>We may update this policy from time to time. When we do, we will update the effective date at the top of this page. Continued use of our services after changes are posted means you accept the updated policy.</p>

            <h2>11. Contact</h2>
            <div className="contact-box">
              <p>For any privacy questions or data requests, contact us at:</p>
              <p style={{ marginTop: 12 }}><strong>Email:</strong> <a href="mailto:contact@nakamaai.co">contact@nakamaai.co</a></p>
              <p style={{ marginTop: 8 }}><strong>Address:</strong> Indrakanan, Ward No-12, Kanainatsal, Sripalli, Barddhaman, West Bengal, 713103, India</p>
            </div>

          </div>
        </div>
      </section>
      <Footer simple />
    </>
  );
}
