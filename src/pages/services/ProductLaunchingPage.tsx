import React, { useState, useEffect } from "react";
import { ExternalLink, Loader2, Sparkles, X, Mail, CheckCircle2, Lock, Zap, Gem, RotateCcw, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";
import { Product, OrderResponse } from "@/types/types";

const WHATSAPP_NUMBER = "919714407181";

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

const loadRazorpayScript = () =>
  new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

const ProductCard: React.FC<Product & { onBuyNow: (p: Product) => void }> = ({
  id, name, description, price, originalPrice, tag, onBuyNow,
}) => {
  const fmt = (p: number) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(p / 100);
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="group glass-panel p-8 rounded-[2.5rem] flex flex-col h-full border border-revonza-border transition-all duration-300 hover:border-revonza-accent/50">
      <div className="relative mb-8">
        <div className="aspect-square rounded-[2rem] overflow-hidden border border-revonza-border group-hover:border-revonza-accent/50 transition-all duration-500">
          <img
            src="/products/ai-prompts-pack.jpg"
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              // Fallback to gradient placeholder if image fails
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.classList.add('bg-gradient-to-br', 'from-revonza-accent/20', 'to-purple-600/10', 'flex', 'items-center', 'justify-center');
            }}
          />
        </div>
        {tag && (
          <span className="absolute top-4 right-4 px-4 py-1.5 bg-revonza-accent text-white text-xs font-bold rounded-full shadow-lg shadow-revonza-accent/30">{tag}</span>
        )}
      </div>
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-revonza-text mb-3 group-hover:text-revonza-accent transition-colors">{name}</h3>
        <p className="text-revonza-textMuted text-base leading-relaxed mb-6 line-clamp-3">{description}</p>
      </div>
      <div className="mt-auto">
        <div className="flex items-end gap-4 mb-6">
          <span className="text-revonza-textMuted text-sm line-through">{fmt(originalPrice)}</span>
          <span className="text-3xl font-bold text-revonza-text">{fmt(price)}</span>
          <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
            {Math.round((1 - price / originalPrice) * 100)}% OFF
          </span>
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

const BuyModal: React.FC<{ isOpen: boolean; onClose: () => void; product: Product | null; onProceed: (email: string) => void }> = ({
  isOpen, onClose, product, onProceed,
}) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [touched, setTouched] = useState(false);
  const validate = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-revonza-base/80 backdrop-blur-md" />
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-md glass-panel p-8 rounded-[2.5rem] border border-revonza-border shadow-2xl">
            <button onClick={onClose} className="absolute top-6 right-6 p-2 text-revonza-textMuted hover:text-revonza-text hover:bg-revonza-surface rounded-full transition-all"><X size={20} /></button>
            <div className="mb-8">
              <span className="text-revonza-accent font-bold text-xs uppercase tracking-widest block mb-2">Checkout</span>
              <h2 className="text-3xl font-bold text-revonza-text">{product?.name}</h2>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); if (isValid) onProceed(email); }} className="space-y-6">
              <div>
                <label className="block text-revonza-textMuted text-sm font-medium mb-3">Enter your email to receive the download link</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-revonza-textMuted"><Mail size={18} /></div>
                  <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); setIsValid(validate(e.target.value)); }} onBlur={() => setTouched(true)} placeholder="you@example.com" className={`w-full bg-revonza-surface border ${touched && !isValid ? "border-red-500/50" : "border-revonza-border"} focus:border-revonza-accent rounded-2xl py-4 pl-12 pr-4 text-revonza-text outline-none transition-all`} required />
                </div>
                {touched && !isValid && <p className="mt-2 text-xs text-red-500 font-medium">Please enter a valid email address.</p>}
              </div>
              <button type="submit" disabled={!isValid} className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${isValid ? "bg-revonza-accent text-white shadow-lg shadow-revonza-accent/30 hover:scale-[1.02]" : "bg-revonza-surface text-revonza-textMuted cursor-not-allowed opacity-50"}`}>
                Proceed to Payment <CheckCircle2 size={18} />
              </button>
              <p className="text-center text-revonza-textMuted text-xs">You will receive the download link on this email immediately after payment.</p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-revonza-border last:border-none">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-6 flex items-center justify-between text-left group">
        <span className={`text-lg font-bold transition-colors ${isOpen ? "text-revonza-accent" : "text-revonza-text group-hover:text-revonza-accent"}`}>{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-revonza-textMuted flex-shrink-0 ml-4"><ChevronDown size={20} /></motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="pb-6 text-revonza-textMuted leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PaymentReceipt: React.FC<{ receiptData: ReceiptData; onClose: () => void }> = ({ receiptData, onClose }) => {
  const receiptNumber = `REC-${receiptData.paymentId.slice(-6).toUpperCase()}`;
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft((p) => (p <= 1 ? (clearInterval(timer), 0) : p - 1)), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const colors = ["#6366f1", "#f59e0b", "#10b981", "#ec4899", "#3b82f6"];
    const container = document.createElement("div");
    container.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:10000;";
    document.body.appendChild(container);
    const style = document.createElement("style");
    style.innerHTML = `.cp{position:absolute;width:10px;height:20px;top:-20px;animation:fall 3s ease-in forwards;}@keyframes fall{0%{opacity:1;top:-20px;transform:rotate(0)}100%{opacity:1;top:100vh;transform:rotate(360deg)}}`;
    document.head.appendChild(style);
    for (let i = 0; i < 30; i++) {
      const c = document.createElement("div");
      c.className = "cp";
      c.style.left = `${Math.random() * 100}%`;
      c.style.animationDelay = `${Math.random() * 2}s`;
      c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      container.appendChild(c);
    }
    const t = setTimeout(() => { document.body.contains(container) && document.body.removeChild(container); document.head.contains(style) && document.head.removeChild(style); }, 6000);
    return () => { clearTimeout(t); document.body.contains(container) && document.body.removeChild(container); document.head.contains(style) && document.head.removeChild(style); };
  }, []);

  const whatsappMsg = encodeURIComponent(`*Payment Receipt - Revonza Studio*\n\nProduct: ${receiptData.productName}\nAmount: Rs.${receiptData.amount}\nOrder ID: ${receiptData.orderId}\nPayment ID: ${receiptData.paymentId}\nEmail: ${receiptData.email}\nDate: ${receiptData.date}\nReceipt: ${receiptNumber}\n\nPlease confirm my purchase. Thank you!`);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", overflowY: "auto" }}>
      <div style={{ width: "100%", maxWidth: "420px", display: "flex", flexDirection: "column", gap: "12px" }}>
        <div id="payment-receipt" style={{ background: "#fff", color: "#111", borderRadius: "20px", overflow: "hidden", boxShadow: "0 25px 60px rgba(0,0,0,0.5)", fontFamily: "Segoe UI, sans-serif" }}>
          <div style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "15px", letterSpacing: "1.5px" }}>REVONZA STUDIO</span>
            <span style={{ color: "#c4b5fd", fontWeight: 700, fontSize: "13px", letterSpacing: "2px" }}>RECEIPT</span>
          </div>
          <div style={{ padding: "24px" }}>
            <div style={{ textAlign: "center", marginBottom: "16px" }}>
              <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <h2 style={{ margin: "0 0 4px", fontSize: "20px", fontWeight: 800 }}>Payment Successful!</h2>
              <p style={{ margin: 0, color: "#7c3aed", fontSize: "13px", fontWeight: 600 }}>{receiptNumber}</p>
            </div>
            <div style={{ borderTop: "2px dashed #e5e7eb", margin: "16px 0" }} />
            {[["Product", receiptData.productName], ["Amount", `Rs.${receiptData.amount}`], ["Order ID", receiptData.orderId], ["Payment ID", receiptData.paymentId], ["Email", receiptData.email], ["Date", receiptData.date]].map(([label, value]) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ color: "#6b7280", fontSize: "13px" }}>{label}</span>
                <span style={{ fontWeight: 700, fontSize: "13px", textAlign: "right", maxWidth: "55%", wordBreak: "break-all" }}>{value}</span>
              </div>
            ))}
            <div style={{ borderTop: "2px dashed #e5e7eb", margin: "16px 0" }} />
            <div style={{ textAlign: "center", marginBottom: "16px" }}>
              <p style={{ color: "#6b7280", fontSize: "12px", margin: "0 0 8px" }}>Your download link:</p>
              <a href={receiptData.downloadLink} target="_blank" rel="noopener noreferrer" style={{ color: "#7c3aed", fontWeight: 700, fontSize: "14px", wordBreak: "break-all" }}>Click here to download your files</a>
            </div>
            <p style={{ textAlign: "center", color: "#374151", fontWeight: 600, fontSize: "14px", margin: 0 }}>Thank you for your purchase!</p>
          </div>
        </div>
        <div style={{ background: "#fef9c3", border: "1px solid #fde047", borderRadius: "12px", padding: "12px 16px", color: "#854d0e", fontSize: "13px" }}>
          Screenshot the receipt above, then tap WhatsApp to send it to us for confirmation!
        </div>
        {timeLeft > 0 && (
          <div style={{ textAlign: "center" }}>
            <span style={{ color: timeLeft <= 60 ? "#ef4444" : "#6b7280", fontSize: "13px", fontWeight: 600 }}>
              {timeLeft <= 60 ? `Screenshot now! ${timeLeft}s left` : `Receipt visible for: ${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, "0")} min`}
            </span>
          </div>
        )}
        <a href={receiptData.downloadLink} target="_blank" rel="noopener noreferrer" style={{ width: "100%", padding: "14px", borderRadius: "12px", background: "linear-gradient(135deg,#7c3aed,#6d28d9)", color: "#fff", fontWeight: 700, fontSize: "15px", border: "none", cursor: "pointer", textAlign: "center", textDecoration: "none", display: "block" }}>Download Product</a>
        <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" style={{ width: "100%", padding: "14px", borderRadius: "12px", background: "transparent", color: "#16a34a", fontWeight: 700, fontSize: "15px", border: "2px solid #16a34a", cursor: "pointer", textAlign: "center", textDecoration: "none", display: "block" }}>Share Receipt on WhatsApp</a>
        <button onClick={() => window.print()} style={{ width: "100%", padding: "14px", borderRadius: "12px", background: "transparent", color: "#4f46e5", fontWeight: 700, fontSize: "15px", border: "2px solid #4f46e5", cursor: "pointer" }}>Print Receipt</button>
        <button onClick={() => { document.body.style.overflow = "unset"; onClose(); }} style={{ width: "100%", padding: "14px", borderRadius: "12px", background: "transparent", color: "#9ca3af", fontWeight: 700, fontSize: "15px", border: "2px solid #374151", cursor: "pointer" }}>Close</button>
      </div>
    </div>
  );
};

const ProductLaunchingPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [receiptData, setReceiptData] = useState<ReceiptData | null>(null);
  const [showReceipt, setShowReceipt] = useState(false);

  // Always use relative URLs — frontend and backend run on same server (Render)
  // In local dev, start backend separately on port 4000 and set VITE_BACKEND_URL=http://localhost:4000
  const API_URL = (import.meta.env.VITE_BACKEND_URL || "").replace(/\/$/, "");

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `@media print{body *{visibility:hidden!important}#payment-receipt,#payment-receipt *{visibility:visible!important}#payment-receipt{position:fixed!important;top:0!important;left:0!important;width:100%!important;background:white!important;padding:20px!important}}`;
    document.head.appendChild(style);
    return () => { document.head.contains(style) && document.head.removeChild(style); };
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then((r) => { if (!r.ok) throw new Error("Failed"); return r.json(); })
      .then(setProducts)
      .catch(() => setError("Unable to load products. Please try again later."))
      .finally(() => setLoading(false));
  }, []);

  const handleBuyNow = (product: Product) => { setSelectedProduct(product); setIsModalOpen(true); setPaymentStatus("idle"); };

  const handleProceed = async (email: string) => {
    setIsModalOpen(false);
    setPaymentStatus("loading");
    setPaymentError(null);
    try {
      const loaded = await loadRazorpayScript();
      if (!loaded) throw new Error("Razorpay SDK failed to load. Check your internet connection.");
      const orderRes = await fetch(`${API_URL}/api/create-order`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ productId: selectedProduct?.id }) });
      if (!orderRes.ok) throw new Error("Failed to initialize order. Please try again.");
      const orderData: OrderResponse = await orderRes.json();
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency || "INR",
        name: "Revonza Studio",
        description: selectedProduct?.name,
        order_id: orderData.orderId,
        handler: async (response: any) => {
          try {
            setPaymentStatus("loading");
            const verifyRes = await fetch(`${API_URL}/api/verify-payment`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ razorpay_order_id: response.razorpay_order_id, razorpay_payment_id: response.razorpay_payment_id, razorpay_signature: response.razorpay_signature, email, productId: selectedProduct?.id }) });
            if (!verifyRes.ok) throw new Error("Payment verification failed.");
            const result = await verifyRes.json();
            if (result.success) {
              setReceiptData({ orderId: response.razorpay_order_id, paymentId: response.razorpay_payment_id, productName: result.productName, downloadLink: result.downloadLink, amount: result.amount, email, date: new Date().toLocaleString("en-IN", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" }), status: "PAID" });
              setShowReceipt(true);
              document.body.style.overflow = "hidden";
            } else throw new Error(result.message || "Verification failed.");
          } catch (err: any) { setPaymentStatus("error"); setPaymentError(err.message); }
        },
        prefill: { email },
        theme: { color: "#6366f1" },
        modal: { ondismiss: () => setPaymentStatus("idle") },
      };
      new (window as any).Razorpay(options).open();
    } catch (err: any) { setPaymentStatus("error"); setPaymentError(err.message || "An unexpected error occurred."); }
  };

  if (showReceipt && receiptData) return <PaymentReceipt receiptData={receiptData} onClose={() => { setShowReceipt(false); setPaymentStatus("idle"); setSelectedProduct(null); }} />;

  return (
    <>
      <SEO pageSEO={{ title: "Digital Products", description: "Premium digital products by Revonza Studio. AI Prompts Pack — 100+ ready-to-use prompts for business, freelancing, automation, content creation, and more.", keywords: ["digital products", "ai prompts", "prompt pack", "chatgpt prompts", "revonza studio"], canonical: "https://www.revonzastudio.tech/products", ogType: "website" }} />
      <div className="min-h-screen pt-32 pb-20 bg-revonza-base transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="mb-20 text-center max-w-4xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-revonza-accent/30 bg-revonza-accent/10 backdrop-blur-md mb-8">
              <Sparkles size={16} className="text-revonza-accent" />
              <span className="text-xs font-bold text-revonza-accent uppercase tracking-widest">Exclusive Resources</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-revonza-text mb-6 tracking-tight leading-tight">Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-revonza-accent to-purple-400">Products</span></h1>
            <p className="text-xl md:text-2xl text-revonza-textMuted font-light max-w-3xl mx-auto leading-relaxed">Premium resources crafted by Revonza Studio to help you build faster and look professional from day one.</p>
          </div>

          <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-6 md:gap-12 mb-20 animate-fade-in-up">
            {[{ icon: Lock, title: "Secure Payment", sub: "Via Razorpay" }, { icon: Zap, title: "Instant Delivery", sub: "To your email" }, { icon: Gem, title: "Premium Quality", sub: "Revonza Standard" }, { icon: RotateCcw, title: "Lifetime Access", sub: "Buy once, own forever" }].map((b, i) => (
              <div key={i} className="flex flex-col items-center md:flex-row md:gap-4 text-center md:text-left p-4 glass-panel border-revonza-border/50 rounded-3xl w-full md:w-auto">
                <div className="w-10 h-10 rounded-full bg-revonza-accent/10 flex items-center justify-center text-revonza-accent mb-3 md:mb-0"><b.icon size={20} /></div>
                <div><h4 className="text-sm font-bold text-revonza-text">{b.title}</h4><p className="text-[10px] text-revonza-textMuted uppercase tracking-tighter">{b.sub}</p></div>
              </div>
            ))}
          </div>

          {paymentStatus === "loading" && (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 size={48} className="text-revonza-accent animate-spin mb-4" />
              <p className="text-revonza-textMuted text-lg">Processing your payment...</p>
            </div>
          )}

          {paymentStatus === "error" && (
            <div className="max-w-md mx-auto text-center py-20">
              <div className="glass-panel p-8 rounded-[2rem] border border-red-500/30">
                <p className="text-red-400 font-bold text-lg mb-4">Payment Failed</p>
                <p className="text-revonza-textMuted mb-6">{paymentError}</p>
                <button onClick={() => { setPaymentStatus("idle"); setPaymentError(null); }} className="px-8 py-3 bg-revonza-accent text-white rounded-full font-bold hover:scale-105 transition-all">Try Again</button>
              </div>
            </div>
          )}

          {paymentStatus === "idle" && (
            <>
              {loading && (
                <div className="flex flex-col items-center justify-center py-20 animate-pulse">
                  <Loader2 size={48} className="text-revonza-accent animate-spin mb-4" />
                  <p className="text-revonza-textMuted text-lg">Loading products...</p>
                </div>
              )}
              {error && (
                <div className="text-center py-20">
                  <p className="text-revonza-textMuted text-lg mb-6">{error}</p>
                  <button onClick={() => { setError(null); setLoading(true); fetch(`${API_URL}/api/products`).then(r => r.json()).then(setProducts).catch(() => setError("Unable to load products. Please try again later.")).finally(() => setLoading(false)); }} className="px-8 py-3 bg-revonza-accent text-white rounded-full font-bold hover:scale-105 transition-all">Retry</button>
                </div>
              )}
              {!loading && !error && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
                  {products.map((p) => <ProductCard key={p.id} {...p} onBuyNow={handleBuyNow} />)}
                </div>
              )}
            </>
          )}

          <div className="max-w-3xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-revonza-text text-center mb-10">Frequently Asked Questions</h2>
            <div className="glass-panel rounded-[2rem] border border-revonza-border px-8">
              {[
                { q: "How will I receive my product?", a: "After successful payment, you will receive an instant download link directly to your email address. The link is also shown on the receipt screen immediately after payment." },
                { q: "What payment methods are accepted?", a: "We accept all major payment methods via Razorpay — UPI, credit/debit cards, net banking, and wallets." },
                { q: "Can I get a refund?", a: "Due to the digital nature of our products, all sales are final. If you face any issues with your download, contact us on WhatsApp and we will resolve it immediately." },
                { q: "Is it a one-time purchase?", a: "Yes! All our digital products are one-time purchases. Buy once and get lifetime access with all future updates included." },
              ].map((item) => <AccordionItem key={item.q} question={item.q} answer={item.a} />)}
            </div>
          </div>
        </div>
      </div>

      <BuyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={selectedProduct} onProceed={handleProceed} />
    </>
  );
};

export default ProductLaunchingPage;
