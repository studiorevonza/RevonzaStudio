import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, User, MessageSquare, Building2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const foundersInfo = [
    { name: 'Utsav', role: 'Founder', phone: '+91 9714407181' },
    { name: 'Tushar', role: 'Co-Founder', phone: '+91 8851619647' }
  ];

  return (
    <>
      <SEO
        pageSEO={{
          title: 'Contact Us',
          description: 'Get in touch with Revonza Studio. Contact us for web development, design, SEO, and digital marketing services.',
          keywords: [
            'contact us',
            'get in touch',
            'web development contact',
            'design services contact',
            'seo contact',
            'digital marketing contact'
          ],
          canonical: 'https://www.revonzastudio.tech/contact',
          ogImage: 'https://www.revonzastudio.tech/og-contact.jpg',
          ogType: 'website',
          structuredData: {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Revonza Studio",
            "description": "Get in touch with Revonza Studio. Contact us for web development, design, SEO, and digital marketing services."
          }
        }}
      />
      <div className="min-h-screen pt-32 pb-20 bg-revonza-base flex flex-col justify-center relative overflow-hidden transition-colors duration-300">
        
        {/* Background Ambience */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-revonza-accent to-purple-400">
              Get In Touch
            </h1>
            <p className="text-xl text-revonza-text-muted max-w-2xl mx-auto">
              Have a project in mind? Reach out to us and let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-panel p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold mb-8 text-revonza-text">Send a Message</h2>
              
              {submitSuccess ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center">
                  <div className="text-green-400 text-5xl mb-4">✓</div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-revonza-text-muted">We'll get back to you soon.</p>
                  <button 
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-4 px-6 py-2 bg-revonza-accent hover:bg-revonza-accent/80 rounded-lg transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-revonza-text mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-revonza-text-muted w-5 h-5" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3 glass-panel rounded-lg focus:outline-none focus:ring-2 focus:ring-revonza-accent ${
                          errors.name ? 'border-red-500' : ''
                        }`}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && <p className="text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-revonza-text mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-revonza-text-muted w-5 h-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3 glass-panel rounded-lg focus:outline-none focus:ring-2 focus:ring-revonza-accent ${
                          errors.email ? 'border-red-500' : ''
                        }`}
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && <p className="text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-revonza-text mb-2">Subject</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-revonza-text-muted w-5 h-5" />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3 glass-panel rounded-lg focus:outline-none focus:ring-2 focus:ring-revonza-accent ${
                          errors.subject ? 'border-red-500' : ''
                        }`}
                        placeholder="Project Inquiry"
                      />
                    </div>
                    {errors.subject && <p className="text-red-400 mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-revonza-text mb-2">Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-revonza-text-muted w-5 h-5" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full pl-12 pr-4 py-3 glass-panel rounded-lg focus:outline-none focus:ring-2 focus:ring-revonza-accent ${
                          errors.message ? 'border-red-500' : ''
                        }`}
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    {errors.message && <p className="text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-revonza-accent to-purple-600 hover:from-revonza-accent/90 hover:to-purple-600/90 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-12"
            >
              {/* Company Info */}
              <div className="glass-panel p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-revonza-text">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="text-revonza-accent w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-revonza-text">Phone</h4>
                      <div className="space-y-2 mt-1">
                        <p className="text-revonza-text-muted">
                          <span className="font-medium">Utsav (Founder):</span> +91 9714407181
                        </p>
                        <p className="text-revonza-text-muted">
                          <span className="font-medium">Tushar (Co-Founder):</span> +91 8851619647
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="text-revonza-accent w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-revonza-text">Email</h4>
                      <p className="text-revonza-text-muted">contact@revonzastudio.tech</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-revonza-accent w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-revonza-text">Location</h4>
                      <p className="text-revonza-text-muted">India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="text-revonza-accent w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-revonza-text">Working Hours</h4>
                      <p className="text-revonza-text-muted">24/7 Support Available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Information */}
              <div className="glass-panel p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-revonza-text">Our Founders</h3>
                
                <div className="space-y-6">
                  {foundersInfo.map((founder, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 glass-panel rounded-lg">
                      <div className="bg-gradient-to-br from-revonza-accent to-purple-600 w-12 h-12 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {founder.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-revonza-text">{founder.name}</h4>
                        <p className="text-revonza-accent">{founder.role}</p>
                        <p className="text-revonza-text-muted text-sm mt-1">{founder.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;