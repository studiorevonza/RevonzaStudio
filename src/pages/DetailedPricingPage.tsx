import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const DetailedPricingPage: React.FC = () => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  // Pricing data
  const pricingData = [
    {
      service: 'Website Development – Basic',
      inrPrice: '₹10,000 – ₹17,500',
      usdPrice: '$120 – $210',
      included: '5–7 pages, responsive, template-based, contact form'
    },
    {
      service: 'Website Development – Advanced',
      inrPrice: '₹20,000 – ₹45,000',
      usdPrice: '$240 – $540',
      included: 'Custom UI, CMS, animations, performance optimization'
    },
    {
      service: 'Website / Web App – Premium',
      inrPrice: '₹60,000 – ₹1,50,000',
      usdPrice: '$720 – $1,800',
      included: 'Full custom build, dashboards, APIs, integrations'
    },
    {
      service: 'SEO – Basic',
      inrPrice: '₹6,000 – ₹9,000',
      usdPrice: '$72 – $108',
      included: 'On-page SEO, GSC setup, keywords'
    },
    {
      service: 'SEO – Advanced',
      inrPrice: '₹12,500 – ₹22,500',
      usdPrice: '$150 – $270',
      included: 'Content SEO, backlinks, audits'
    },
    {
      service: 'AI Integration – Basic',
      inrPrice: '₹12,500 – ₹22,500',
      usdPrice: '$150 – $270',
      included: 'Chatbot, lead automation'
    },
    {
      service: 'AI Integration – Advanced',
      inrPrice: '₹30,000 – ₹60,000',
      usdPrice: '$360 – $720',
      included: 'CRM, workflows, custom AI logic'
    },
    {
      service: 'Logo – Basic',
      inrPrice: '₹3,000 – ₹5,000',
      usdPrice: '$36 – $60',
      included: '2 concepts, revisions'
    },
    {
      service: 'Logo – Professional',
      inrPrice: '₹6,000 – ₹15,000',
      usdPrice: '$72 – $180',
      included: 'Brand-ready logo system'
    },
    {
      service: 'Thumbnail (Per Design)',
      inrPrice: '₹250 – ₹1,000',
      usdPrice: '$3 – $12',
      included: 'YouTube / Ads / Social'
    },
    {
      service: 'Thumbnail Pack (10)',
      inrPrice: '₹2,000 – ₹6,000',
      usdPrice: '$24 – $72',
      included: 'Consistent visual style'
    },
    {
      service: 'Graphic Design (Per Creative)',
      inrPrice: '₹750 – ₹3,000',
      usdPrice: '$9 – $36',
      included: 'Posters, banners, ads'
    },
    {
      service: 'Design Retainer (Monthly)',
      inrPrice: '₹5,000 – ₹15,000',
      usdPrice: '$60 – $180',
      included: '10–30 creatives'
    },
    {
      service: 'Branding & Identity Package',
      inrPrice: '₹15,000 – ₹60,000',
      usdPrice: '$180 – $720',
      included: 'Logo, colors, fonts, guidelines'
    },
    {
      service: 'Maintenance & Modification (Monthly)',
      inrPrice: '₹3,000 – ₹17,500',
      usdPrice: '$36 – $210',
      included: 'Updates, fixes, backups'
    },
    {
      service: 'Urgent Delivery (Add-On)',
      inrPrice: '+20% – 30%',
      usdPrice: '+25% – 40%',
      included: 'Priority execution'
    }
  ];

  return (
    <>
      <SEO
        pageSEO={{
          title: 'Detailed Pricing',
          description: 'Transparent and comprehensive pricing breakdown for all our services. No hidden fees, clear scope of work.',
          keywords: [
            'detailed pricing',
            'service pricing',
            'web development pricing',
            'seo pricing',
            'ai integration pricing',
            'logo design pricing',
            'graphic design pricing',
            'transparent pricing'
          ],
          canonical: 'https://www.revonzastudio.tech/detailed-pricing',
          ogImage: 'https://www.revonzastudio.tech/og-detailed-pricing.jpg',
          ogType: 'website',
          structuredData: {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": pricingData.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.service,
              "description": item.included
            }))
          }
        }}
      />
      <div className="min-h-screen pt-32 pb-20 bg-revonza-base transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Link
              to="/pricing"
              className="inline-block mb-6 px-5 py-2 bg-revonza-accent text-white rounded-full font-bold text-sm hover:bg-revonza-text hover:text-revonza-base hover:scale-105 transition-all shadow-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
            >
              ← Back to Pricing
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-revonza-text mb-6">Transparent & Comprehensive Pricing</h1>
            <p className="text-xl text-revonza-textMuted max-w-2xl mx-auto font-light">
              Complete pricing breakdown for all our services. No hidden fees, clear scope of work.
            </p>
          </div>

          {/* Currency Selector */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex items-center bg-revonza-surface rounded-full p-1 border border-revonza-border">
              <button
                className={`px-8 py-3 rounded-full text-sm font-medium ${currency === 'INR' ? 'bg-revonza-accent text-white' : 'text-revonza-text'}`}
                onClick={() => setCurrency('INR')}
              >
                INR (₹)
              </button>
              <button
                className={`px-8 py-3 rounded-full text-sm font-medium ${currency === 'USD' ? 'bg-revonza-accent text-white' : 'text-revonza-text'}`}
                onClick={() => setCurrency('USD')}
              >
                USD ($)
              </button>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="overflow-x-auto rounded-2xl border border-revonza-border">
            <table className="min-w-full bg-revonza-surface">
              <thead className="bg-revonza-base">
                <tr>
                  <th className="py-4 px-6 text-left text-revonza-text font-bold">Service</th>
                  <th className="py-4 px-6 text-center text-revonza-text font-bold">
                    {currency === 'INR' ? 'India Price' : 'International Price'}
                  </th>
                  <th className="py-4 px-6 text-left text-revonza-text font-bold">What's Included</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`border-t border-revonza-border ${index % 2 === 0 ? 'bg-revonza-base' : 'bg-revonza-surface'}`}
                  >
                    <td className="py-4 px-6 text-revonza-text font-medium">{item.service}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-xl font-bold text-revonza-accent">
                        {currency === 'INR' ? item.inrPrice : item.usdPrice}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-revonza-textMuted">{item.included}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA Section */}
          <div className="mt-20 max-w-5xl mx-auto text-center glass-panel rounded-[3rem] p-16 border border-revonza-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-revonza-accent/10 to-transparent rounded-[3rem] blur-2xl opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-revonza-text mb-6">Ready to get started?</h2>
              <p className="text-xl text-revonza-textMuted mb-12 max-w-2xl mx-auto">Have specific requirements? We offer custom solutions tailored to your unique needs.</p>
              <Link to="/contact" className="inline-block px-10 py-4 bg-revonza-text text-revonza-base rounded-full font-bold text-lg hover:bg-revonza-accent hover:text-white hover:scale-105 transition-all shadow-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedPricingPage;