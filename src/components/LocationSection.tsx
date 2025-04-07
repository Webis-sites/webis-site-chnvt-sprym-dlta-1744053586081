'use client';

import React, { useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaBus, FaCar, FaWalking, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LocationSection: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This is where you would initialize a real map library like Google Maps or Leaflet
    // For now, we're just using a placeholder image
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 rtl" dir="rtl">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">המיקום שלנו</h2>
          <p className="text-xl text-gray-600">בואו לבקר בחנות ספרים דלתא</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            variants={itemVariants} 
            className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg"
            ref={mapRef}
          >
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
            <Image
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="מפת המיקום של חנות ספרים דלתא"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-primary animate-bounce">
                <FaMapMarkerAlt size={48} />
              </div>
            </div>
            <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 p-2 rounded-md">
              <p className="text-sm font-bold text-primary">חנות ספרים דלתא</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-secondary bg-opacity-20 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary flex items-center gap-2 mb-4">
                <FaInfoCircle /> פרטי מיקום
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">כתובת:</h4>
                    <p>רחוב הרצל 42, תל אביב, ישראל, 6688302</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FaWalking className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">נקודות ציון:</h4>
                    <p>5 דקות הליכה ממגדל אזריאלי, ליד פארק העירוני</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FaCar className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">חניה:</h4>
                    <p>חניון תת-קרקעי זמין במבנה (שעתיים ראשונות חינם לקונים), חניה ציבורית ברחוב</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FaBus className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">תחבורה ציבורית:</h4>
                    <p>קווי אוטובוס 18, 24, 104 עוצרים ממול. תחנת רכבת מרכז השלום במרחק 10 דקות הליכה</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary bg-opacity-10 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">שעות פעילות:</h3>
              <ul className="space-y-1">
                <li className="flex justify-between">
                  <span>ראשון - חמישי:</span>
                  <span>09:00 - 21:00</span>
                </li>
                <li className="flex justify-between">
                  <span>שישי:</span>
                  <span>09:00 - 14:00</span>
                </li>
                <li className="flex justify-between">
                  <span>שבת:</span>
                  <span>סגור</span>
                </li>
              </ul>
            </div>
            
            <motion.button 
              className="w-full py-3 px-6 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition-colors duration-300 font-bold"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              קבל הוראות הגעה
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LocationSection;