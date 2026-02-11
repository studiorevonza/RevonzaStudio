import React, { useState } from 'react';
import { PRICING } from '../constants';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const PricingPage: React.FC = () => {
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
    <>
      <SEO
        pageSEO={{
          title: 'Web Development & SEO Pricing | Custom Website Design Costs India',
          description: 'Transparent and competitive pricing for web development, SEO, and digital marketing services in India. Choose from flexible packages tailored to your business needs.',
          keywords: [
            'web development pricing',
            'SEO services cost',
            'website design cost India',
            'digital marketing pricing',
            'custom website development cost',
            'affordable web development',
            'web design packages',
            'SEO pricing India',
            'digital agency pricing',
            'website maintenance cost'
          ],
          canonical: 'https://revonzastudio.com/pricing',
          ogImage: 'https://revonzastudio.com/og-pricing.jpg',
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Product',
            'name': 'Web Development & SEO Services',
            'description': 'Professional web development and SEO services with transparent pricing.',
            'offers': [
              {
                '@type': 'Offer',
                'name': 'Starter Package',
                'price': '₹20000',
                'priceCurrency': 'INR',
                'description': 'Basic Website (5–7 Pages) with Responsive Design, Contact Forms, Basic SEO Setup, and 1 Month Support'
              },
              {
                '@type': 'Offer',
                'name': 'Professional Package',
                'price': '₹40000',
                'priceCurrency': 'INR',
                'description': 'Advanced Website with CMS, Advanced SEO Structure, Branding Kit, Social Media Integration, and 3 Months Support'
              },
              {
                '@type': 'Offer',
                'name': 'Enterprise Package',
                'price': 'Custom',
                'priceCurrency': 'INR',
                'description': 'Fully Custom Website/Web Application with Dashboards, AI Integration, CRM Integrations, and 24/7 Priority Support'
              }
            ],
            'category': 'Professional Services',
            'brand': {
              '@type': 'Organization',
              'name': 'Revonza Studio'
            }
          }
        }}
      />
      <div className="min-h-screen pt-36 pb-32 bg-revonza-base transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24 animate-fade-in-up">
          <span className="text-revonza-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block"> <Link
            to="/detailed-pricing"
            className="px-5 py-2 bg-revonza-accent text-white rounded-full font-bold text-lg hover:bg-revonza-text hover:text-revonza-base hover:scale-100 transition-all shadow-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] inline-block"
          >
            Detailed Pricing Structure
          </Link></span>
          <h1 className="text-5xl md:text-7xl font-bold text-revonza-text mb-8">Simple, Fair Pricing</h1>
          <p className="text-xl text-revonza-textMuted max-w-2xl mx-auto font-light leading-relaxed">
            Choose the perfect plan for your project. No hidden fees, no surprises.
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PRICING.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-12 rounded-[2.5rem] border transition-all duration-500 animate-scale-in group ${tier.recommended
                ? 'bg-revonza-surface border-revonza-accent shadow-[0_0_60px_rgba(139,92,246,0.25)] scale-105 z-10'
                : 'glass-panel border-revonza-border hover:border-revonza-text/20 hover:bg-revonza-surface'
                }`}
              style={{ animationDelay: tier.recommended ? '300ms' : `${index * 150}ms` }}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-revonza-accent to-purple-600 text-white px-8 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl border border-white/20">
                  Most Popular
                </div>
              )}

              <h6 className={`text-2xl font-bold mb-6 ${tier.recommended ? 'text-revonza-accent' : 'text-revonza-text'}`}>{tier.name}</h6>
              <div className="mb-10">
                <span className="text-6xl font-bold text-revonza-text tracking-tighter">{convertPrice(tier.price)}</span>
                {(tier.price !== 'Custom Price' && !tier.price.includes('Free')) && <span className="text-gray-500 ml-2 font-small"></span>}
              </div>

              <div className={`h-[1px] w-full mb-10 ${tier.recommended ? 'bg-gradient-to-r from-revonza-accent/50 to-transparent' : 'bg-revonza-border'}`}></div>

              <ul className="space-y-6 mb-12 flex-1">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-revonza-textMuted text-sm font-medium">
                    <div className={`p-1 rounded-full flex-shrink-0 ${tier.recommended ? 'bg-revonza-accent text-white' : 'bg-revonza-surface border border-revonza-border text-gray-400'}`}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`w-full py-5 rounded-2xl font-bold text-sm uppercase tracking-widest text-center transition-all shadow-lg ${tier.recommended
                  ? 'bg-revonza-accent text-white hover:bg-revonza-accent/90 hover:shadow-revonza-accent/40'
                  : 'bg-revonza-surface text-revonza-text hover:bg-revonza-text hover:text-revonza-base border border-revonza-border'
                  }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Options & Resources */}
        <div className="mt-32 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-revonza-text mb-16">Additional Options & Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Demo/Trial Options */}
            <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border">
              <h3 className="text-xl font-bold text-revonza-text mb-6">Demo / Trial Options</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-revonza-border last:border-0">
                  <span className="text-revonza-textMuted">7-Day Free Trial</span>
                  <span className="font-bold text-revonza-text">Free</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-revonza-border last:border-0">
                  <span className="text-revonza-textMuted">Basic Demo Setup</span>
                  <span className="font-bold text-revonza-text">{convertPrice('₹2,500')}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-revonza-border last:border-0">
                  <span className="text-revonza-textMuted">Extended Trial (30 Days)</span>
                  <span className="font-bold text-revonza-text">{convertPrice('₹5,500')}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-revonza-border last:border-0">
                  <span className="text-revonza-textMuted">Custom Demo Package</span>
                  <span className="font-bold text-revonza-text">{convertPrice('₹8,500')}</span>
                </div>
              </div>
            </div>

            {/* Additional Resources */}
            <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border">
              <h3 className="text-xl font-bold text-revonza-text mb-6">Additional Resources</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-revonza-border last:border-0">
                  <span className="text-revonza-textMuted">Content Writing (per page)</span>
                  <span className="font-bold text-revonza-text">{convertPrice('₹1,250')}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-revonza-border last:border-0">
                  <span className="text-revonza-textMuted">Stock Photos Package</span>
                  <span className="font-bold text-revonza-text">{convertPrice('₹2,500')}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-revonza-border last:border-0">
                  <span className="text-revonza-textMuted">Custom Illustrations</span>
                  <span className="font-bold text-revonza-text">{convertPrice('₹5,000')}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-revonza-border last:border-0">
                  <span className="text-revonza-textMuted">Video Integration</span>
                  <span className="font-bold text-revonza-text">{convertPrice('₹7,500')}</span>
                </div>
              </div>
            </div>

            {/* E-commerce Options */}
            <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border">
              <h3 className="text-xl font-bold text-revonza-text mb-6">E-commerce & Domain</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-revonza-border last:border-0">
                  <span className="text-revonza-textMuted">E-commerce Setup</span>
                  <span className="font-bold text-revonza-text">{convertPrice('₹12,500')}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-revonza-border last:border-0">
                  <span className="text-revonza-textMuted">Payment Gateway Integration</span>
                  <span className="font-bold text-revonza-text">{convertPrice('₹5,000')}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-revonza-border last:border-0">
                  <span className="text-revonza-textMuted">Custom Domain Setup</span>
                  <span className="font-bold text-revonza-text">{convertPrice('₹750')}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-revonza-border last:border-0">
                  <span className="text-revonza-textMuted">SSL Certificate</span>
                  <span className="font-bold text-revonza-text">{convertPrice('₹2,250')}</span>
                </div>
              </div>
            </div>

            {/* Support & Maintenance */}
            <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border md:col-span-2 lg:col-span-3">
              <h3 className="text-xl font-bold text-revonza-text mb-6">Support & Maintenance</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-revonza-text mb-4">Monthly Plans</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-revonza-border last:border-0">
                      <span className="text-revonza-textMuted">Basic Maintenance</span>
                      <span className="font-bold text-revonza-text">{convertPrice('₹6,500')}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-revonza-border last:border-0">
                      <span className="text-revonza-textMuted">Premium Maintenance</span>
                      <span className="font-bold text-revonza-text">{convertPrice('₹22,500')}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-revonza-text mb-4">On-demand Services</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-revonza-border last:border-0">
                      <span className="text-revonza-textMuted">On-demand Support</span>
                      <span className="font-bold text-revonza-text">{convertPrice('₹3,750')}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-revonza-border last:border-0">
                      <span className="text-revonza-textMuted">Content Updates</span>
                      <span className="font-bold text-revonza-text">{convertPrice('₹2,000')}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-revonza-border last:border-0">
                      <span className="text-revonza-textMuted">Security Updates</span>
                      <span className="font-bold text-revonza-text">{convertPrice('₹1,250')}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-revonza-border last:border-0">
                      <span className="text-revonza-textMuted">Backup & Recovery</span>
                      <span className="font-bold text-revonza-text">{convertPrice('₹750')}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-revonza-text mb-4">Add-ons</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-revonza-border last:border-0">
                      <span className="text-revonza-textMuted">Urgent Delivery</span>
                      <span className="font-bold text-revonza-text">+20% – 30%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-revonza-border last:border-0">
                      <span className="text-revonza-textMuted">Custom Features</span>
                      <span className="font-bold text-revonza-text">Quotation-based</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Ready to get started section */}
        <div className="mt-32 max-w-5xl mx-auto text-center glass-panel rounded-[3rem] p-16 border border-revonza-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-revonza-accent/10 to-transparent rounded-[3rem] blur-2xl opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-revonza-text mb-6">Ready to get started?</h2>
            <p className="text-xl text-revonza-textMuted mb-12 max-w-2xl mx-auto">Have specific requirements? We offer custom solutions tailored to your unique needs.</p>
            <Link to="/contact" className="inline-block px-10 py-4 bg-revonza-text text-revonza-base rounded-full font-bold text-lg hover:bg-revonza-accent hover:text-white hover:scale-105 transition-all shadow-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Pricing Info Section */}
        <div className="mt-32 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="text-center p-8">
            <h3 className="text-2xl font-bold text-revonza-text mb-4">Transparent Pricing</h3>
            <p className="text-revonza-textMuted">No hidden fees or surprises. All costs are clearly defined upfront with detailed scope of work.</p>
          </div>
          <div className="text-center p-8">
            <h3 className="text-2xl font-bold text-revonza-text mb-4">Flexible Options</h3>
            <p className="text-revonza-textMuted">Choose from different tiers based on your requirements. Custom packages available for complex projects.</p>
          </div>
          <div className="text-center p-8">
            <h3 className="text-2xl font-bold text-revonza-text mb-4">Quality Guarantee</h3>
            <p className="text-revonza-textMuted">All services come with quality assurance and revision options to ensure your satisfaction.</p>
          </div>
        </div>
      </div>
    </div>
      </>
    );
};

export default PricingPage;