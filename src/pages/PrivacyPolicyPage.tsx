import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEO
        pageSEO={{
          title: 'Privacy Policy',
          description: 'Privacy Policy for Revonza Studio. Learn how we collect, use, and protect your personal information.',
          keywords: ['privacy policy', 'data protection', 'revonza studio privacy'],
          canonical: 'https://www.revonzastudio.tech/privacy-policy',
          ogType: 'website',
        }}
      />
      <div className="min-h-screen pt-32 pb-20 bg-revonza-base transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-revonza-accent hover:text-revonza-text transition-colors mb-10"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          {/* Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-2xl bg-revonza-accent/10 border border-revonza-accent/30 flex items-center justify-center">
              <Shield size={28} className="text-revonza-accent" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-revonza-text">Privacy Policy</h1>
              <p className="text-revonza-textMuted mt-1">Last updated: April 2026</p>
            </div>
          </div>

          {/* Content */}
          <div className="glass-panel rounded-[2rem] border border-revonza-border p-8 md:p-12 space-y-10 text-revonza-textMuted leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-revonza-text mb-4">1. Introduction</h2>
              <p>
                Welcome to Revonza Studio ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{' '}
                <a href="https://www.revonzastudio.tech" className="text-revonza-accent hover:underline">
                  www.revonzastudio.tech
                </a>{' '}
                or contact us for our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-revonza-text mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information:</p>
              <ul className="space-y-3 list-none">
                {[
                  'Personal identification information (name, email address, phone number)',
                  'Company or organization name',
                  'Project details and requirements you share with us',
                  'Payment information (processed securely via Razorpay — we do not store card details)',
                  'Usage data and analytics (via Google Analytics)',
                  'Communication records (WhatsApp messages, emails)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-revonza-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-revonza-accent"></div>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-revonza-text mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="space-y-3 list-none">
                {[
                  'Provide, operate, and maintain our services',
                  'Respond to your inquiries and project requests',
                  'Process payments for digital products and services',
                  'Send you project updates and communications',
                  'Improve our website and services',
                  'Comply with legal obligations',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-revonza-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-revonza-accent"></div>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-revonza-text mb-4">4. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="space-y-3 list-none mt-4">
                {[
                  'With payment processors (Razorpay) to complete transactions',
                  'With analytics providers (Google Analytics) to understand website usage',
                  'When required by law or to protect our legal rights',
                  'With your explicit consent',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-revonza-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-revonza-accent"></div>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-revonza-text mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Payment transactions are processed through Razorpay's secure, PCI-DSS compliant infrastructure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-revonza-text mb-4">6. Cookies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences. Disabling cookies may affect some functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-revonza-text mb-4">7. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="space-y-3 list-none">
                {[
                  'Access the personal information we hold about you',
                  'Request correction of inaccurate information',
                  'Request deletion of your personal information',
                  'Opt out of marketing communications',
                  'Lodge a complaint with a data protection authority',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-revonza-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-revonza-accent"></div>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-revonza-text mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-revonza-text mb-4">9. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-revonza-text mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the date at the top of this page. Continued use of our website after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-revonza-text mb-4">11. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="glass-panel rounded-2xl border border-revonza-border p-6 space-y-2">
                <p><span className="text-revonza-text font-semibold">Revonza Studio</span></p>
                <p>Email: <a href="mailto:studiorevonza@gmail.com" className="text-revonza-accent hover:underline">studiorevonza@gmail.com</a></p>
                <p>Phone: <a href="tel:+919714407181" className="text-revonza-accent hover:underline">+91 9714407181</a></p>
                <p>WhatsApp: <a href="https://wa.me/919714407181" target="_blank" rel="noopener noreferrer" className="text-revonza-accent hover:underline">Chat with us</a></p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
