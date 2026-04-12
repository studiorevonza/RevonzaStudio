import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, ExternalLink, Loader2, Sparkles, X, Mail, CheckCircle2, AlertCircle, 
  Lock, Zap, Gem, RotateCcw, ChevronDown, HelpCircle 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '@/components/SEO';
import { Product, OrderResponse, PaymentVerifyResponse } from '@/types/types';

const WHATSAPP_NUMBER = "919714407181"; // from ContactPage.tsx

interface ReceiptData {
  orderId: string;
  paymentId: string;
  productName: string;
  downloadLink: string;
  amount: number;
  email: string;
  date: string;
  status: string;
}

// Helper to load Razorpay SDK
const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

// --- ProductCard Component ---
interface ProductCardProps extends Product {
  onBuyNow: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, name, description, price, originalPrice, tag, onBuyNow 
}) => {
  const formatPrice = (paise: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(paise / 100);
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="group glass-panel glass-panel-hover p-8 rounded-[2.5rem] flex flex-col h-full border border-revonza-border transition-all duration-300"
    >
      <div className="relative mb-8">
        <div className="aspect-square bg-revonza-surface rounded-[2rem] overflow-hidden border border-revonza-border flex items-center justify-center group-hover:border-revonza-accent/50 transition-colors duration-500">
          <ShoppingCart size={64} strokeWidth={1} className="text-revonza-textMuted group-hover:text-revonza-accent transition-colors duration-500" />
        </div>
        {tag && (
          <span className="absolute top-4 right-4 px-4 py-1.5 bg-revonza-accent text-white text-xs font-bold rounded-full shadow-lg">
            {tag}
          </span>
        )}
      </div>

      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-revonza-text mb-3 group-hover:text-revonza-accent transition-colors">{name}</h3>
        <p className="text-revonza-textMuted text-base leading-relaxed mb-6 line-clamp-2">
          {description}
        </p>
      </div>

      <div className="mt-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-revonza-textMuted text-sm line-through block mb-1">{formatPrice(originalPrice)}</span>
            <span className="text-3xl font-bold text-revonza-text">{formatPrice(price)}</span>
          </div>
        </div>
        
        <button 
          onClick={() => onBuyNow({ id, name, description, price, originalPrice, tag })}
          className="w-full py-4 bg-gradient-to-r from-revonza-accent to-purple-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-revonza-accent/20 hover:shadow-revonza-accent/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
        >
          Buy Now <ExternalLink size={18} />
        </button>
      </div>
    </motion.div>
  );
};

// --- BuyModal Component ---
interface BuyModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onProceed: (email: string) => void;
}

const BuyModal: React.FC<BuyModalProps> = ({ isOpen, onClose, product, onProceed }) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [touched, setTouched] = useState(false);

  const validateEmail = (val: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(val);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    setIsValid(validateEmail(val));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onProceed(email);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-revonza-base/80 backdrop-blur-md"
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md glass-panel p-8 rounded-[2.5rem] border border-revonza-border shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-revonza-textMuted hover:text-revonza-text hover:bg-revonza-surface rounded-full transition-all"
            >
              <X size={20} />
            </button>

            <div className="mb-8">
              <span className="text-revonza-accent font-bold text-xs uppercase tracking-widest block mb-2">Checkout</span>
              <h2 className="text-3xl font-bold text-revonza-text leading-tight">
                {product?.name}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-revonza-textMuted text-sm font-medium mb-3">
                  Enter your email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-revonza-textMuted">
                    <Mail size={18} />
                  </div>
                  <input 
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={() => setTouched(true)}
                    placeholder="you@example.com"
                    className={`w-full bg-revonza-surface border ${touched && !isValid ? 'border-red-500/50' : 'border-revonza-border'} focus:border-revonza-accent rounded-2xl py-4 pl-12 pr-4 text-revonza-text outline-none transition-all`}
                    required
                  />
                </div>
                {touched && !isValid && (
                  <p className="mt-2 text-xs text-red-500 font-medium">Please enter a valid email address.</p>
                )}
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  disabled={!isValid}
                  className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                    isValid 
                    ? 'bg-revonza-accent text-white shadow-lg shadow-revonza-accent/30 hover:scale-[1.02] active:scale-[0.98]' 
                    : 'bg-revonza-surface text-revonza-textMuted cursor-not-allowed opacity-50'
                  }`}
                >
                  Proceed to Payment <CheckCircle2 size={18} />
                </button>
                <p className="mt-4 text-center text-revonza-textMuted text-xs leading-relaxed">
                  You'll receive the download link on this email address immediately after payment confirmation.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- AccordionItem Component ---
const AccordionItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-revonza-border last:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-revonza-accent' : 'text-revonza-text group-hover:text-revonza-accent'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-revonza-textMuted"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-revonza-textMuted leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Standalone WhatsApp share function (passed as prop to PaymentReceipt)
function handleWhatsAppShare(receiptData: ReceiptData) {
  const message =
`🧾 *Payment Receipt - Revonza Studio*

✅ Payment Successful!

📦 *Product:* ${receiptData.productName}
💰 *Amount:* ₹${receiptData.amount}
🆔 *Order ID:* ${receiptData.orderId}
💳 *Payment ID:* ${receiptData.paymentId}
📧 *Email:* ${receiptData.email}
📅 *Date:* ${receiptData.date}
🔖 *Receipt No:* REC-${receiptData.paymentId.slice(-6)}

Please confirm my purchase. Thank you! 🙏`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// --- PaymentReceipt Component ---
interface PaymentReceiptProps {
  receiptData: ReceiptData;
  onClose: () => void;
  onWhatsAppShare: (receiptData: ReceiptData) => void;
}

const PaymentReceipt: React.FC<PaymentReceiptProps> = ({ receiptData, onClose, onWhatsAppShare }) => {
  const receiptNumber = `REC-${receiptData.paymentId.slice(-6).toUpperCase()}`;

  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const colors = ['#6366f1', '#f59e0b', '#10b981', '#ec4899', '#3b82f6'];
    const confettiCount = 30;
    const container = document.createElement('div');
    container.id = 'confetti-container';
    container.style.position = 'fixed';
    container.style.inset = '0';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '10000';
    document.body.appendChild(container);

    const style = document.createElement('style');
    style.innerHTML = `
      .confetti-piece {
        position: absolute;
        width: 10px;
        height: 20px;
        top: -20px;
        opacity: 0;
        animation: fall 3s ease-in forwards;
      }
      @keyframes fall {
        0% { opacity: 1; top: -20px; transform: rotate(0deg); }
        100% { opacity: 1; top: 100vh; transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);

    const pieces: HTMLDivElement[] = [];
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti-piece');
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.animationDelay = `${Math.random() * 2}s`;
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      container.appendChild(confetti);
      pieces.push(confetti);
    }

    const timeout = setTimeout(() => {
      if (document.body.contains(container)) document.body.removeChild(container);
      if (document.head.contains(style)) document.head.removeChild(style);
    }, 6000);

    return () => {
      clearTimeout(timeout);
      if (document.body.contains(container)) document.body.removeChild(container);
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, []);

  const DetailRow = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
      <span style={{ color: '#6b7280', fontSize: '13px' }}>{label}</span>
      <span style={{ fontWeight: 700, fontSize: '13px', textAlign: 'right', maxWidth: '55%', wordBreak: 'break-all' }}>{children}</span>
    </div>
  );

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(6px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
      overflowY: 'auto'
    }}>
      <div style={{ width: '100%', maxWidth: '420px', display: 'flex', flexDirection: 'column', gap: '12px' }}>

        {/* ===== RECEIPT CARD (screenshots include only this) ===== */}
        <div id="payment-receipt" style={{
          background: '#fff', color: '#111', borderRadius: '20px',
          overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
          fontFamily: "'Segoe UI', sans-serif"
        }}>
          {/* 1. Purple header bar */}
          <div style={{
            background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
            padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
          }}>
            <span style={{ color: '#fff', fontWeight: 800, fontSize: '15px', letterSpacing: '1.5px' }}>REVONZA STUDIO</span>
            <span style={{ color: '#c4b5fd', fontWeight: 700, fontSize: '13px', letterSpacing: '2px' }}>RECEIPT</span>
          </div>

          <div style={{ padding: '24px 24px 20px' }}>
            {/* 2. Green checkmark */}
            <div style={{ textAlign: 'center', marginBottom: '12px' }}>
              <div style={{
                width: '60px', height: '60px', borderRadius: '50%',
                background: '#dcfce7', display: 'flex', alignItems: 'center',
                justifyContent: 'center', margin: '0 auto 12px'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              {/* 3. Payment Successful */}
              <h2 style={{ margin: '0 0 4px', fontSize: '20px', fontWeight: 800, color: '#111' }}>Payment Successful!</h2>
              {/* 4. Receipt number */}
              <p style={{ margin: 0, color: '#7c3aed', fontSize: '13px', fontWeight: 600 }}>{receiptNumber}</p>
            </div>

            {/* 5. Dashed divider */}
            <div style={{ borderTop: '2px dashed #e5e7eb', margin: '16px 0' }} />

            {/* 6. Detail rows */}
            <DetailRow label="Product">{receiptData.productName}</DetailRow>
            <DetailRow label="Amount">
              <span style={{ color: '#7c3aed', fontSize: '16px' }}>₹{receiptData.amount}</span>
            </DetailRow>
            <DetailRow label="Order ID">{receiptData.orderId}</DetailRow>
            <DetailRow label="Payment ID">{receiptData.paymentId}</DetailRow>
            <DetailRow label="Email">{receiptData.email}</DetailRow>
            <DetailRow label="Date">{receiptData.date}</DetailRow>
            <DetailRow label="Status">
              <span style={{
                background: '#dcfce7', color: '#15803d',
                padding: '2px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 700
              }}>PAID</span>
            </DetailRow>

            {/* 7. Dashed divider */}
            <div style={{ borderTop: '2px dashed #e5e7eb', margin: '16px 0' }} />

            {/* 8. Download link */}
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <p style={{ color: '#6b7280', fontSize: '12px', margin: '0 0 8px' }}>Your download link:</p>
              <a
                href={receiptData.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#7c3aed', fontWeight: 700, fontSize: '14px', wordBreak: 'break-all', textDecoration: 'underline' }}
              >
                Click here to download your files
              </a>
            </div>

            {/* 9. Thank you */}
            <p style={{ textAlign: 'center', color: '#374151', fontWeight: 600, fontSize: '14px', margin: 0 }}>
              Thank you for your purchase! 🎉
            </p>
          </div>
        </div>
        {/* ===== END RECEIPT CARD ===== */}

        {/* Tip box — NOT inside receipt card */}
        <div style={{
          background: '#fef9c3', border: '1px solid #fde047',
          borderRadius: '12px', padding: '12px 16px',
          color: '#854d0e', fontSize: '13px', fontWeight: 500, lineHeight: '1.5'
        }}>
          💡 Screenshot the receipt above, then tap the WhatsApp button to send it to us for confirmation!
        </div>

        {/* Countdown Timer Warning */}
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          {timeLeft > 60 && (
            <span style={{ color: '#6b7280', fontSize: '13px', fontWeight: 600 }}>
              ⏱️ Receipt visible for: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')} min
            </span>
          )}
          {timeLeft <= 60 && timeLeft > 0 && (
            <span style={{ color: '#ef4444', fontSize: '14px', fontWeight: 800, animation: 'pulse 1s infinite' }}>
              ⚠️ Please take a screenshot now! {timeLeft}s left
            </span>
          )}
          {timeLeft === 0 && (
            <span style={{ color: '#dc2626', fontSize: '16px', fontWeight: 900 }}>
              📸 PLEASE SCREENSHOT NOW!
            </span>
          )}
        </div>

        {/* Button 1: WhatsApp share */}
        <button
          onClick={() => onWhatsAppShare(receiptData)}
          style={{
            width: '100%', padding: '14px', borderRadius: '12px',
            background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
            color: '#fff', fontWeight: 700, fontSize: '15px',
            border: 'none', cursor: 'pointer', letterSpacing: '0.3px'
          }}
        >
          📸 Screenshot → Share on WhatsApp
        </button>

        {/* Button 2: Download product */}
        <button
          onClick={() => window.open(receiptData.downloadLink, '_blank')}
          style={{
            width: '100%', padding: '14px', borderRadius: '12px',
            background: 'transparent', color: '#16a34a',
            fontWeight: 700, fontSize: '15px',
            border: '2px solid #16a34a', cursor: 'pointer'
          }}
        >
          ⬇️ Download Product
        </button>

        {/* Button 3: Print Receipt */}
        <button
          onClick={() => window.print()}
          style={{
            width: '100%', padding: '14px', borderRadius: '12px',
            background: 'transparent', color: '#4f46e5',
            fontWeight: 700, fontSize: '15px',
            border: '2px solid #4f46e5', cursor: 'pointer'
          }}
        >
          🖨️ Print Receipt
        </button>

        {/* Button 4: Close */}
        <button
          onClick={() => {
            document.body.style.overflow = 'unset';
            onClose();
          }}
          style={{
            width: '100%', padding: '14px', borderRadius: '12px',
            background: 'transparent', color: '#9ca3af',
            fontWeight: 700, fontSize: '15px',
            border: '2px solid #374151', cursor: 'pointer'
          }}
        >
          ✕ Close Receipt
        </button>

      </div>
    </div>
  );
};


// --- Main Page Component ---
const ProductLaunchingPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal & Payment State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState('');
  const [receiptData, setReceiptData] = useState<ReceiptData | null>(null);
  const [showReceipt, setShowReceipt] = useState(false);

  // Use relative URL in production so API calls go to the same server (Render).
  // In local dev, VITE_BACKEND_URL should be set to http://localhost:4000
  const API_URL = import.meta.env.VITE_BACKEND_URL && !import.meta.env.VITE_BACKEND_URL.includes('localhost')
    ? import.meta.env.VITE_BACKEND_URL
    : '';

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        body * { visibility: hidden !important; }
        #payment-receipt, 
        #payment-receipt * { visibility: visible !important; }
        #payment-receipt {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          background: white !important;
          padding: 20px !important;
          box-shadow: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/api/products`);
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Unable to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleBuyNow = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setPaymentStatus('idle');
  };

  const handleProceed = async (email: string) => {
    setUserEmail(email);
    setIsModalOpen(false);
    setPaymentStatus('loading');
    setPaymentError(null);

    try {
      // 1. Load Razorpay script
      const res = await loadRazorpayScript();
      if (!res) {
        throw new Error('Razorpay SDK failed to load. Check your internet connection.');
      }

      // 2. Create Order in Backend
      const orderRes = await fetch(`${API_URL}/api/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: selectedProduct?.id }),
      });

      if (!orderRes.ok) throw new Error('Failed to initialize order. Please try again.');
      const orderData: OrderResponse = await orderRes.json();

      // 3. Open Razorpay Checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency || "INR",
        name: "Revonza Studio",
        description: selectedProduct?.name,
        order_id: orderData.orderId,
        handler: async (response: any) => {
          try {
            setPaymentStatus('loading');
            // 4. Verify Payment in Backend
            const verifyRes = await fetch(`${API_URL}/api/verify-payment`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                email: email,
                productId: selectedProduct?.id,
              }),
            });

            if (!verifyRes.ok) throw new Error('Payment verification failed.');
            const result = await verifyRes.json();

            if (result.success) {
              setReceiptData({
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                productName: result.productName,
                downloadLink: result.downloadLink,
                amount: result.amount,
                email: email,
                date: new Date().toLocaleString('en-IN', {
                  day: '2-digit', month: 'long', year: 'numeric',
                  hour: '2-digit', minute: '2-digit'
                }),
                status: "PAID"
              });
              setShowReceipt(true);
              document.body.style.overflow = 'hidden';
            } else {
              throw new Error(result.message || 'Verification failed.');
            }
          } catch (err: any) {
            setPaymentStatus('error');
            setPaymentError(err.message || 'Payment verification failed.');
          }
        },
        prefill: {
          email: email,
        },
        theme: {
          color: "#6366f1",
        },
        modal: {
          ondismiss: () => {
            if (paymentStatus === 'loading') setPaymentStatus('idle');
          }
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err: any) {
      console.error('Payment Error:', err);
      setPaymentStatus('error');
      setPaymentError(err.message || 'An unexpected error occurred during payment.');
    }
  };

  const resetPayment = () => {
    setPaymentStatus('idle');
    setPaymentError(null);
    setSelectedProduct(null);
  };

  return (
    <>
      <SEO
        pageSEO={{
          title: 'Digital Products',
          description: 'Premium design resources and digital assets crafted by Revonza Studio.',
          keywords: ['digital products', 'design resources', 'ui kits', 'branding packs'],
          canonical: 'https://www.revonzastudio.tech/services/product-launching',
        }}
      />
      
      <div className="min-h-screen pt-32 pb-20 bg-revonza-base transition-colors duration-300">
        <div className="container mx-auto px-4">
          
          {/* Default/Grid View */}
          {paymentStatus === 'idle' && (
            <>
              {/* Header Section */}
              <div className="mb-24 text-center max-w-4xl mx-auto animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-revonza-accent/30 bg-revonza-accent/10 backdrop-blur-md mb-8">
                  <Sparkles size={16} className="text-revonza-accent" />
                  <span className="text-xs font-bold text-revonza-accent uppercase tracking-widest text-center">Exclusive Resources</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-revonza-text mb-8 tracking-tight leading-tight text-center">
                  Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-revonza-accent to-purple-400">Products</span>
                </h1>
                <p className="text-xl md:text-2xl text-revonza-textMuted font-light max-w-3xl mx-auto leading-relaxed text-center">
                  Premium design resources crafted by Revonza Studio to help you build faster and look professional from day one.
                </p>
              </div>

              {/* Trust Bar Section */}
              <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-6 md:gap-12 mb-24 animate-fade-in-up delay-300">
                {[
                  { icon: Lock, title: "Secure Payment", sub: "Via Razorpay" },
                  { icon: Zap, title: "Instant Delivery", sub: "To your email" },
                  { icon: Gem, title: "Premium Quality", sub: "Revonza Standard" },
                  { icon: RotateCcw, title: "Lifetime Access", sub: "Buy once, own forever" },
                ].map((badge, i) => (
                  <div key={i} className="flex flex-col items-center md:flex-row md:gap-4 text-center md:text-left p-4 glass-panel border-revonza-border/50 rounded-3xl w-full md:w-auto">
                    <div className="w-10 h-10 rounded-full bg-revonza-accent/10 flex items-center justify-center text-revonza-accent mb-3 md:mb-0">
                      <badge.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-revonza-text">{badge.title}</h4>
                      <p className="text-[10px] text-revonza-textMuted uppercase tracking-tighter">{badge.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Products Grid */}
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20 animate-pulse">
                  <Loader2 size={48} className="text-revonza-accent animate-spin mb-4" />
                  <p className="text-revonza-textMuted text-lg font-light text-center">Loading premium resources...</p>
                </div>
              ) : error ? (
                <div className="text-center py-20 glass-panel max-w-lg mx-auto rounded-[2rem] border-revonza-border">
                  <p className="text-revonza-text text-xl mb-4 text-center">{error}</p>
                  <button 
                    onClick={() => window.location.reload()}
                    className="px-6 py-2 bg-revonza-accent text-white rounded-full hover:scale-105 transition-all text-center"
                  >
                    Retry
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {products.map((product) => (
                    <ProductCard 
                      key={product.id}
                      {...product}
                      onBuyNow={handleBuyNow}
                    />
                  ))}
                </div>
              )}

              {/* FAQ Section */}
              <div className="mt-40 max-w-3xl mx-auto animate-fade-in-up">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-revonza-accent/30 bg-revonza-accent/10 backdrop-blur-md mb-6">
                    <HelpCircle size={16} className="text-revonza-accent" />
                    <span className="text-xs font-bold text-revonza-accent uppercase tracking-widest text-center">Questions?</span>
                  </div>
                  <h2 className="text-4xl font-bold text-revonza-text text-center">Frequently Asked Questions</h2>
                </div>

                <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-revonza-border">
                  <AccordionItem 
                    question="How will I receive my product?" 
                    answer="You will receive an instant download link directly to the email address you provided during checkout. The process is automated and typically takes less than 60 seconds after payment confirmation."
                  />
                  <AccordionItem 
                    question="What payment methods are accepted?" 
                    answer="We accept all major payment methods through Razorpay, including UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards (Visa, Mastercard, Rupay), and Net Banking from all Indian banks."
                  />
                  <AccordionItem 
                    question="Can I get a refund?" 
                    answer="Due to the digital nature of our products, we typically do not offer refunds once the files have been delivered. However, if you face any technical issues with the files, our support team is ready to help you resolve them."
                  />
                  <AccordionItem 
                    question="Is it a one-time purchase?" 
                    answer="Yes! All products listed here are one-time purchases. Once you buy them, you get lifetime access to the files and any future updates we may release for that specific product."
                  />
                </div>
              </div>
            </>
          )}

          {/* Loading State */}
          {paymentStatus === 'loading' && (
            <div className="flex flex-col items-center justify-center min-h-[50vh] animate-fade-in">
              <Loader2 size={64} className="text-revonza-accent animate-spin mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-revonza-text text-center">Processing payment...</h2>
              <p className="text-revonza-textMuted mt-2 text-center">Please do not refresh or close the page.</p>
            </div>
          )}

          {/* Success State */}
          {paymentStatus === 'success' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto py-20"
            >
              <div className="glass-panel p-10 md:p-16 rounded-[3rem] border border-revonza-border text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-revonza-accent/20 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mx-auto mb-8 animate-bounce">
                  <CheckCircle2 size={56} />
                </div>
                
                <h2 className="text-4xl font-bold text-revonza-text mb-4">Payment Successful! 🎉</h2>
                <p className="text-xl text-revonza-textMuted mb-8 font-light">
                  Thank you for your purchase. We've sent the download link to:
                </p>
                
                <div className="bg-revonza-surface py-4 px-6 rounded-2xl border border-revonza-border mb-10">
                  <span className="text-revonza-accent font-bold text-xl break-all">{userEmail}</span>
                </div>
                
                <p className="text-revonza-textMuted mb-12">
                  Please check your inbox (and spam folder) for the download instructions.
                </p>
                
                <button 
                  onClick={resetPayment}
                  className="px-10 py-4 bg-revonza-accent text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-revonza-accent/30"
                >
                  Continue Shopping
                </button>
              </div>
            </motion.div>
          )}

          {/* Error State */}
          {paymentStatus === 'error' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto py-20"
            >
              <div className="glass-panel p-10 md:p-16 rounded-[3rem] border border-red-500/20 text-center shadow-2xl">
                <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 mx-auto mb-8">
                  <AlertCircle size={56} />
                </div>
                
                <h2 className="text-3xl font-bold text-revonza-text mb-4">Something went wrong</h2>
                <p className="text-xl text-revonza-textMuted mb-10 font-light">
                  {paymentError || 'There was an error processing your payment. Please try again.'}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={resetPayment}
                    className="px-10 py-4 bg-revonza-surface text-revonza-text rounded-full font-bold border border-revonza-border hover:bg-revonza-base transition-all"
                  >
                    Go Back
                  </button>
                  <button 
                    onClick={() => handleProceed(userEmail)}
                    className="px-10 py-4 bg-revonza-accent text-white rounded-full font-bold shadow-lg shadow-revonza-accent/30 hover:scale-105 transition-all"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Buy Modal */}
          <BuyModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            product={selectedProduct}
            onProceed={handleProceed}
          />

          {/* Payment Receipt overlay */}
          {showReceipt && receiptData && (
            <PaymentReceipt
              receiptData={receiptData}
              onWhatsAppShare={handleWhatsAppShare}
              onClose={() => {
                setShowReceipt(false);
                setReceiptData(null);
                setPaymentStatus('idle');
                document.body.style.overflow = 'unset';
              }}
            />
          )}

          {/* CTA Section (Only in idle state) */}
          {paymentStatus === 'idle' && !loading && !error && (
            <div className="mt-32 glass-panel rounded-[3rem] p-16 text-center border border-revonza-border animate-scale-in">
              <h2 className="text-4xl font-bold text-revonza-text mb-6 text-center">Need a custom solution?</h2>
              <p className="text-xl text-revonza-textMuted max-w-2xl mx-auto mb-12 font-light text-center">
                We also build custom digital assets and strategies tailored specifically for your brand's unique needs.
              </p>
              <div className="flex justify-center">
                <a href="/contact" className="px-10 py-4 bg-revonza-text text-revonza-base rounded-full font-bold text-lg hover:bg-revonza-accent hover:text-white hover:scale-105 transition-all shadow-xl">
                  Message Us
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductLaunchingPage;