import React from 'react';
import { motion } from 'framer-motion';

export const Loader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
      className="fixed inset-0 z-[9999] bg-[#0B0E14] flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-4xl sm:text-5xl font-black tracking-tighter flex items-center justify-center gap-1"
      >
        <span className="text-white">UNI</span>
        <span className="text-[#FF5500]">TY</span>
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="h-0.5 bg-gradient-to-r from-transparent via-[#FF5500] to-transparent mt-4"
      />
    </motion.div>
  );
};
