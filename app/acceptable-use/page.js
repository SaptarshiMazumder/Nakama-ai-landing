import Link from 'next/link';
import LegalNav from '@/components/LegalNav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Acceptable Use Policy — Nakama AI',
  description: 'Acceptable Use Policy for Services by Nakama AI.',
};

export default function AcceptableUsePage() {
  return (
    <>
      <LegalNav links={[{ href: '/', label: 'Home' }, { href: '/about', label: 'About' }, { href: '/terms', label: 'Terms' }]} />
      <section className="legal-page">
        <div className="container">
          <div className="legal-header">
            <h1>Acceptable Use Policy</h1>
            <p className="legal-meta">Effective date: March 19, 2026</p>
          </div>
          <div className="legal-content">

            <p>This Acceptable Use Policy (&ldquo;AUP&rdquo;) governs your use of Services by Nakama AI — including Nakama Sales, Nakama Marketing, and Nakama Studio products such as Pet-to AI and ShibaEats. This AUP forms part of our <Link href="/terms">Terms of Service</Link>. By using our services, you agree to comply with it.</p>

            <h2>1. General Conduct</h2>
            <p>You agree to use our services responsibly and in accordance with all applicable laws. You will not use any Nakama AI service in a way that could harm, disrupt, or impair the service, interfere with other users, or violate the rights of any person or organisation.</p>

            <h2>2. Prohibited Content</h2>
            <p>You may not use our services to create, process, upload, or distribute content that is illegal or promotes illegal activity, depicts or facilitates the exploitation of minors, promotes violence, terrorism, or hatred toward any group, contains harassment, threats, or defamatory statements, infringes on any intellectual property rights, or includes malware, phishing content, or any form of malicious code.</p>

            <h2>3. Prohibited Activities</h2>
            <p>You may not attempt to gain unauthorized access to any Nakama AI systems, accounts, or data. You may not reverse-engineer, decompile, or extract source code from our services. You may not use our services to build a competing product or for any purpose that competes directly with Nakama AI without prior written consent. You may not circumvent usage limits, abuse system resources, or use automated tools beyond normal usage. You may not impersonate any person or entity, or use our services to commit fraud or deception.</p>

            <h2>4. Service-Specific Guidelines</h2>
            <p>When using Nakama Sales, you are responsible for the accuracy of the information you provide to train your AI agent. You must not use it to deceive your customers, make false claims, or conduct misleading sales practices. When using Nakama Marketing, you must not generate content that is deceptive, constitutes spam, or violates platform advertising policies. When using Pet-to AI or ShibaEats, you must only upload content you own or have rights to, and you must not misuse generated outputs in ways that could harm others.</p>

            <h2>5. Enforcement</h2>
            <p>We reserve the right to investigate suspected violations. Depending on the severity, this may result in a warning, temporary suspension of access, or permanent termination of your account without refund. We may also report violations to relevant law enforcement authorities where required by law.</p>

            <h2>6. Reporting Violations</h2>
            <p>If you believe someone is using our services in violation of this policy, please report it to <a href="mailto:contact@nakamaai.co">contact@nakamaai.co</a> with as much detail as possible.</p>

            <h2>7. Changes to This Policy</h2>
            <p>We may update this policy from time to time. Changes will be reflected by the updated effective date at the top of this page.</p>

            <h2>8. Contact</h2>
            <div className="contact-box">
              <p>For questions about this policy:</p>
              <p style={{ marginTop: 12 }}><strong>Email:</strong> <a href="mailto:contact@nakamaai.co">contact@nakamaai.co</a></p>
            </div>

          </div>
        </div>
      </section>
      <Footer simple />
    </>
  );
}
