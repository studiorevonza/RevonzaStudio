import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const ComingSoonPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-revonza-base px-4">
      <div className="text-center max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div 
            className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-revonza-accent to-purple-500 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Coming
          </motion.div>
          <motion.div 
            className="text-8xl md:text-9xl font-bold text-revonza-text mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Soon
          </motion.div>
        </motion.div>
        
        <motion.p 
          className="text-xl md:text-2xl text-revonza-textMuted mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          We're working hard to bring you an exceptional experience. Stay tuned for exciting updates!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-revonza-accent text-white rounded-full font-bold hover:bg-revonza-text hover:text-revonza-base transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          >
            <ArrowLeft size={20} />
            Back to Services
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoonPage;