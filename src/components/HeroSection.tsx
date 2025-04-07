'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const backgroundImageUrl = "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80";
  
  return (
    <div className="relative h-screen w-full overflow-hidden" dir="rtl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImageUrl}
          alt="חנות ספרים מודרנית"
          layout="fill"
          objectFit="cover"
          priority
          className="transition-transform duration-10000 transform scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/80 to-secondary/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-end justify-center h-full px-4 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-right mb-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-shadow-lg">
            חנות ספרים מוביל בישראל
          </h1>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl text-shadow-md">
              חווית לקוח מושלמת בכל ביקור
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 1,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-secondary hover:bg-secondary-dark text-primary font-bold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              קבע תור עכשיו
            </button>
          </motion.div>
        </motion.div>

        {/* Logo or branding */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="absolute top-8 right-8 md:right-16"
        >
          <div className="text-2xl md:text-3xl font-bold text-white">
            חנות ספרים דלתא
          </div>
        </motion.div>
      </div>

      {/* Animated decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/30 to-transparent"
      />
    </div>
  );
};

export default HeroSection;