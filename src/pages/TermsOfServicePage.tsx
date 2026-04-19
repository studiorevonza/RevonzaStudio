import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';

const TermsOfServicePage: React.FC = () => {
  return (
    <>
      <SEO
        pageSEO={{
          title: 'Terms of Service',
          description: 'Terms of Service for Revonza Studio. Read our terms and conditions for using our services and digital products.',
          keywords: ['terms of service', 'terms and conditions', 'revonza studio terms'],
          canonical: 'https://www.revonzastudio.tech/terms-of-service',
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
              <FileText size={28} className="text-revonza-accent" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-revonza-text">Terms of Service</h1>
              <p className="text-revonza-textMuted mt-1">Last updated: April 2026</p>
            </div>
          </div>

          {/* Content */}
          <div className="glass-panel rounded-[2rem] border border-revonza-border p-8 md:p-12 space-y-10 text-revonza-textMuted leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-revonza-text mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using the website{' '}
                <a href="https://www.revonzastudio.tech" className="text-revonza-accent hover:underline">
                  www.revonzastudio.tech
                </a>{' '}
                or engaging Revonza Studio for any services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-revonza-text mb-4">2. Services</h2>
              <p className="mb-4">
                Revonza Studio provides the following services:
              </p>
              <ul className="space-y-3 list-none">
                {[
                  'Website Development (custom websites and web applications)',
                  'AI Integration (chatbots, automation, predictive analytics)',
                  'Logo Design and Brand Identity',
                  'Thumbnail and Graphic Design',
                  'Design & Branding packages',
                  'Hosting Solutions',
                  'Website Maintenance & Modification',
                  'Digital Products (UI kits, templates, design assets)',
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
              <h2 className="text-2xl font-bold text-revonza-text mb-4">3. Project Engagement</h2>
              <p className="mb-4">
                When you engage Revonza Studio for a project:
              </p>
              <ul className="space-y-3 list-none">
                {[
                  'A detailed scope of work will be agreed upon before commencement',
                  'Payment terms will be outlined in the project agreement',
                  'Timelines are estimates and may vary based on project complexity and client feedback',
                  'Revisions are included as specified in the project agreement',
                  'Additional work beyond the agreed scope will be quoted separately',
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
              <h2 className="text-2xl font-bold text-revonza-text mb-4">4. Payment Terms</h2>
              <p className="mb-4">
                Our standard payment terms are:
              </p>
              <ul className="space-y-3 list-none">
                {[
                  '50% advance payment required before project commencement',
                  'Remaining 50% due upon project completion and before final delivery',
                  'Digital products are charged in full at the time of purchase',
                  'All payments are processed securely via Razorpay',
                  'Prices are in Indian Rupees (INR) unless otherwise specified',
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
              <h2 className="text-2xl font-bold text-revonza-text mb-4">5. Refund Policy</h2>
              <p className="mb-4">
                <span className="text-revonza-text font-semibold">Digital Products:</span> Due to the digital nature of our products, all sales are final. No refunds will be issued once a digital product has been downloaded. If you experience technical issues with your download, contact us immediately and we will resolve it.
              </p>
              <p>
                <span className="text-revonza-text font-semibold">Services:</span> Advance payments are non-refundable once work has commenced. If a project is cancelled before commencement, the advance may be refunded at our discretion. Disputes will be handled on a case-by-case basis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-revonza-text mb-4">6. Intellectual Property</h2>
              <p className="mb-4">
                Upon full payment:
              </p>
              <ul className="space-y-3 list-none">
                {[
                  'Custom design work (logos, websites, graphics) becomes your property',
                  'You receive full rights to use the delivered work for your business',
                  'Revonza Studio retains the right to showcase the work in our portfolio unless otherwise agreed',
                  'Digital products are licensed for personal/commercial use as specified in the product description',
                  'Reselling or redistributing our digital products is strictly prohibited',
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
              <h2 className="text-2xl font-bold text-revonza-text mb-4">7. Client Responsibilities</h2>
              <p className="mb-4">As a client, you agree to:</p>
              <ul className="space-y-3 list-none">
                {[
                  'Provide accurate and complete information required for the project',
                  'Respond to communications in a timely manner',
                  'Provide feedback and approvals within agreed timeframes',
                  'Ensure you have rights to any content (images, text, logos) you provide to us',
                  'Not use our services for any illegal or unethical purposes',
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
              <h2 className="text-2xl font-bold text-revonza-text mb-4">8. Limitation of Liability</h2>
              <p>
                Revonza Studio shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or products. Our total liability shall not exceed the amount paid for the specific service or product in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-revonza-text mb-4">9. Website Use</h2>
              <p className="mb-4">When using our website, you agree not to:</p>
              <ul className="space-y-3 list-none">
                {[
                  'Use the website for any unlawful purpose',
                  'Attempt to gain unauthorized access to any part of the website',
                  'Transmit any harmful, offensive, or disruptive content',
                  'Copy or reproduce our website content without permission',
                  'Use automated tools to scrape or harvest data from our website',
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
              <h2 className="text-2xl font-bold text-revonza-text mb-4">10. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-revonza-text mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Continued use of our services after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-revonza-text mb-4">12. Contact Us</h2>
              <p className="mb-4">
                For any questions about these Terms of Service, please contact us:
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

export default TermsOfServicePage;
