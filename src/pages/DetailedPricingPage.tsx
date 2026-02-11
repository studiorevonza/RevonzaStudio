import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DetailedPricingPage: React.FC = () => {
  const [currency, setCurrency] = useState<'INR' | 'USD' | 'AUTO'>('AUTO');

  // Exchange rate: 1 USD = 83.50 INR (approximate)
  const exchangeRate = 83.50;

  const convertPrice = (price: string): string => {
    if (price.includes('Custom') || price.includes('Free')) {
      return price;
    }

    // Handle percentage values
    if (price.includes('%')) {
      return price; // Percentages don't need conversion
    }

    // Handle price ranges (e.g., "₹10,000 – ₹17,500" or "$400 – $600")
    if (price.includes('–')) {
      const parts = price.split(' – ');
      if (parts.length === 2) {
        const firstValue = parts[0];
        const secondValue = parts[1];

        if (firstValue.startsWith('₹')) {
          const firstNumeric = parseFloat(firstValue.replace(/[₹$,]/g, '').replace(/\s/g, ''));
          const secondNumeric = parseFloat(secondValue.replace(/[₹$,]/g, '').replace(/\s/g, ''));

          if (currency === 'INR') {
            return `₹${firstNumeric.toLocaleString('en-IN')} – ₹${secondNumeric.toLocaleString('en-IN')}`;
          } else if (currency === 'USD') {
            const firstConverted = firstNumeric / exchangeRate;
            const secondConverted = secondNumeric / exchangeRate;
            return `$${firstConverted.toFixed(2)} – $${secondConverted.toFixed(2)}`;
          } else {
            // AUTO: Default to INR
            return `₹${firstNumeric.toLocaleString('en-IN')} – ₹${secondNumeric.toLocaleString('en-IN')}`;
          }
        } else if (firstValue.startsWith('$')) {
          const firstNumeric = parseFloat(firstValue.replace(/[₹$,]/g, '').replace(/\s/g, ''));
          const secondNumeric = parseFloat(secondValue.replace(/[₹$,]/g, '').replace(/\s/g, ''));

          if (currency === 'INR') {
            const firstConverted = firstNumeric * exchangeRate;
            const secondConverted = secondNumeric * exchangeRate;
            return `₹${firstConverted.toFixed(0)} – ₹${secondConverted.toFixed(0)}`;
          } else if (currency === 'USD') {
            return `$${firstNumeric.toFixed(2)} – $${secondNumeric.toFixed(2)}`;
          } else {
            // AUTO: Default to INR
            const firstConverted = firstNumeric * exchangeRate;
            const secondConverted = secondNumeric * exchangeRate;
            return `₹${Math.round(firstConverted)} – ₹${Math.round(secondConverted)}`;
          }
        }
      }
    }

    // Handle single values
    const numericValue = parseFloat(price.replace(/[₹$,]/g, '').replace(/\s/g, ''));

    if (isNaN(numericValue)) {
      return price;
    }

    if (currency === 'INR') {
      return `₹${numericValue.toLocaleString('en-IN')}`;
    } else if (currency === 'USD') {
      const convertedValue = numericValue / exchangeRate;
      return `$${convertedValue.toFixed(2)}`;
    } else {
      // AUTO: Default to INR
      return `₹${numericValue.toLocaleString('en-IN')}`;
    }
  };

  return (
    <div className="min-h-screen pt-36 pb-32 bg-revonza-base transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-revonza-text mb-8">Transparent & Comprehensive Pricing</h1>
          <p className="text-xl text-revonza-textMuted max-w-2xl mx-auto font-light leading-relaxed">
            Complete pricing breakdown for all our services. No hidden fees, clear scope of work.
          </p>
        </div>

        {/* Currency Selector */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center bg-revonza-surface rounded-full p-1 border border-revonza-border">
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium ${currency === 'INR' ? 'bg-revonza-accent text-white' : ''}`}
              onClick={() => setCurrency('INR')}
            >
              INR (₹)
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium ${currency === 'USD' ? 'bg-revonza-accent text-white' : ''}`}
              onClick={() => setCurrency('USD')}
            >
              USD ($)
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium ${currency === 'AUTO' ? 'bg-revonza-accent text-white' : ''}`}
              onClick={() => setCurrency('AUTO')}
            >
              Auto
            </button>
          </div>
        </div>

        {/* Detailed Pricing Table */}
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-revonza-border">
                  <th className="pb-6 text-revonza-text font-bold text-lg">Service</th>
                  <th className="pb-6 text-revonza-text font-bold text-lg">India Price</th>
                  <th className="pb-6 text-revonza-text font-bold text-lg">International Price</th>
                  <th className="pb-6 text-revonza-text font-bold text-lg">What's Included</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-revonza-border">
                <tr className="py-6">
                  <td className="py-6 text-revonza-text font-medium">Website Development – Basic</td>
                  <td className="py-6 text-revonza-text">{convertPrice('₹10,000 – ₹17,500')}</td>
                  <td className="py-6 text-revonza-text">{convertPrice('$400.00 – $600.00')}</td>
                  <td className="py-6 text-revonza-textMuted">5–7 pages, responsive, template-based, contact form</td>
                </tr>
                <tr className="py-6">
                  <td className="py-6 text-revonza-text font-medium">Website Development – Advanced</td>
                  <td className="py-6 text-revonza-text">{convertPrice('₹20,000 – ₹45,000')}</td>
                  <td className="py-6 text-revonza-text">{convertPrice('$750.00 – $1250.00')}</td>
                  <td className="py-6 text-revonza-textMuted">Custom UI, CMS, animations, performance optimization</td>
                </tr>
                <tr className="py-6">
                  <td className="py-6 text-revonza-text font-medium">Website / Web App – Premium</td>
                  <td className="py-6 text-revonza-text">{convertPrice('₹60,000 – ₹1,50,000+')}</td>
                  <td className="py-6 text-revonza-text">{convertPrice('$1500.00 – $3250.00')}</td>
                  <td className="py-6 text-revonza-textMuted">Full custom build, dashboards, APIs, integrations</td>
                </tr>
                <tr className="py-6">
                  <td className="py-6 text-revonza-text font-medium">SEO – Basic</td>
                  <td className="py-6 text-revonza-text">{convertPrice('₹6,000 – ₹9,000')}</td>
                  <td className="py-6 text-revonza-text">{convertPrice('$175.00 – $275.00')}</td>
                  <td className="py-6 text-revonza-textMuted">On-page SEO, GSC setup, keywords</td>
                </tr>
                <tr className="py-6">
                  <td className="py-6 text-revonza-text font-medium">SEO – Advanced</td>
                  <td className="py-6 text-revonza-text">{convertPrice('₹12,500 – ₹22,500')}</td>
                  <td className="py-6 text-revonza-text">{convertPrice('$400.00 – $800.00')}</td>
                  <td className="py-6 text-revonza-textMuted">Content SEO, backlinks, audits</td>
                </tr>
                <tr className="py-6">
                  <td className="py-6 text-revonza-text font-medium">AI Integration – Basic</td>
                  <td className="py-6 text-revonza-text">{convertPrice('₹12,500 – ₹22,500')}</td>
                  <td className="py-6 text-revonza-text">{convertPrice('$450.00 – $750.00')}</td>
                  <td className="py-6 text-revonza-textMuted">Chatbot, lead automation</td>
                </tr>
                <tr className="py-6">
                  <td className="py-6 text-revonza-text font-medium">AI Integration – Advanced</td>
                  <td className="py-6 text-revonza-text">{convertPrice('₹30,000 – ₹60,000+')}</td>
                  <td className="py-6 text-revonza-text">{convertPrice('$1000.00 – $2250.00')}</td>
                  <td className="py-6 text-revonza-textMuted">CRM, workflows, custom AI logic</td>
                </tr>
                <tr className="py-6">
                  <td className="py-6 text-revonza-text font-medium">Logo – Basic</td>
                  <td className="py-6 text-revonza-text">{convertPrice('₹3,000 – ₹5,000')}</td>
                  <td className="py-6 text-revonza-text">{convertPrice('$100.00 – $175.00')}</td>
                  <td className="py-6 text-revonza-textMuted">2 concepts, revisions</td>
                </tr>
                <tr className="py-6">
                  <td className="py-6 text-revonza-text font-medium">Logo – Professional</td>
                  <td className="py-6 text-revonza-text">{convertPrice('₹6,000 – ₹15,000')}</td>
                  <td className="py-6 text-revonza-text">{convertPrice('$250.00 – $600.00')}</td>
                  <td className="py-6 text-revonza-textMuted">Brand-ready logo system</td>
                </tr>
                <tr className="py-6">
                  <td className="py-6 text-revonza-text font-medium">Thumbnail (Per Design)</td>
                  <td className="py-6 text-revonza-text">{convertPrice('₹250 – ₹1,000')}</td>
                  <td className="py-6 text-revonza-text">{convertPrice('$12.00 – $30.00')}</td>
                  <td className="py-6 text-revonza-textMuted">YouTube / Ads / Social</td>
                </tr>
                <tr className="py-6">
                  <td className="py-6 text-revonza-text font-medium">Thumbnail Pack (10)</td>
                  <td className="py-6 text-revonza-text">{convertPrice('₹2,000 – ₹6,000')}</td>
                  <td className="py-6 text-revonza-text">{convertPrice('$90.00 – $175.00')}</td>
                  <td className="py-6 text-revonza-textMuted">Consistent visual style</td>
                </tr>
                <tr className="py-6">
                  <td className="py-6 text-revonza-text font-medium">Graphic Design (Per Creative)</td>
                  <td className="py-6 text-revonza-text">{convertPrice('₹750 – ₹3,000')}</td>
                  <td className="py-6 text-revonza-text">{convertPrice('$25.00 – $75.00')}</td>
                  <td className="py-6 text-revonza-textMuted">Posters, banners, ads</td>
                </tr>
                <tr className="py-6">
                  <td className="py-6 text-revonza-text font-medium">Design Retainer (Monthly)</td>
                  <td className="py-6 text-revonza-text">{convertPrice('₹5,000 – ₹15,000')}</td>
                  <td className="py-6 text-revonza-text">{convertPrice('$175.00 – $450.00')}</td>
                  <td className="py-6 text-revonza-textMuted">10–30 creatives</td>
                </tr>
                <tr className="py-6">
                  <td className="py-6 text-revonza-text font-medium">Branding & Identity Package</td>
                  <td className="py-6 text-revonza-text">{convertPrice('₹15,000 – ₹60,000')}</td>
                  <td className="py-6 text-revonza-text">{convertPrice('$600.00 – $1750.00')}</td>
                  <td className="py-6 text-revonza-textMuted">Logo, colors, fonts, guidelines</td>
                </tr>
                <tr className="py-6">
                  <td className="py-6 text-revonza-text font-medium">Maintenance & Modification (Monthly)</td>
                  <td className="py-6 text-revonza-text">{convertPrice('₹3,000 – ₹17,500')}</td>
                  <td className="py-6 text-revonza-text">{convertPrice('$125.00 – $450.00')}</td>
                  <td className="py-6 text-revonza-textMuted">Updates, fixes, backups</td>
                </tr>
                <tr className="py-6">
                  <td className="py-6 text-revonza-text font-medium">Urgent Delivery (Add-On)</td>
                  <td className="py-6 text-revonza-text">{convertPrice('+20% – 30%')}</td>
                  <td className="py-6 text-revonza-text">{convertPrice('+25% – 40%')}</td>
                  <td className="py-6 text-revonza-textMuted">Priority execution</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Back to Pricing Button */}
        <div className="mt-32 max-w-5xl mx-auto text-center">
          <Link 
            to="/pricing"
            className="px-10 py-4 bg-revonza-accent text-white rounded-full font-bold text-lg hover:bg-revonza-text hover:text-revonza-base hover:scale-105 transition-all shadow-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
          >
            Back to Pricing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailedPricingPage;