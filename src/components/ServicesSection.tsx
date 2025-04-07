'use client';

import React, { useEffect, useRef } from 'react';
import { FaBook, FaShoppingBag, FaCalendarAlt, FaReceipt, FaSearch, FaTruck } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, imageUrl, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-30 flex items-center justify-center">
          <div className="bg-white p-3 rounded-full text-primary text-2xl">
            {icon}
          </div>
        </div>
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const services = [
    {
      icon: <FaBook />,
      title: 'ייעוץ ספרותי מקצועי',
      description: 'צוות המומחים שלנו יעזור לך למצוא את הספרים המושלמים בתחום הטכנולוגיה בהתאם לצרכים ולרמת הידע שלך.',
      imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      icon: <FaShoppingBag />,
      title: 'הזמנות מיוחדות',
      description: 'לא מצאת את הספר שחיפשת? אנחנו נאתר ונזמין עבורך כל ספר טכנולוגי מכל מקום בעולם.',
      imageUrl: 'https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      icon: <FaCalendarAlt />,
      title: 'אירועי השקת ספרים',
      description: 'אנו מארחים אירועי השקה לספרי טכנולוגיה חדשים עם הרצאות ממחברים מובילים בתעשייה.',
      imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      icon: <FaReceipt />,
      title: 'תוכניות מנויים',
      description: 'הצטרף לתוכנית המנויים שלנו וקבל גישה מוקדמת לספרים חדשים, הנחות בלעדיות ומשלוח חינם.',
      imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      icon: <FaSearch />,
      title: 'שירותי מחקר',
      description: 'צוות המחקר שלנו יסייע לך באיתור מקורות מידע מקצועיים וספרות אקדמית בתחומי הטכנולוגיה.',
      imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      icon: <FaTruck />,
      title: 'משלוחים מהירים',
      description: 'אנו מציעים שירותי משלוח מהירים לכל רחבי הארץ, עם אפשרות למשלוח תוך יום עסקים אחד באזורים נבחרים.',
      imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <div ref={sectionRef} className="bg-secondary bg-opacity-20 py-16 px-4 md:px-8 lg:px-16 rtl" dir="rtl">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={headerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">השירותים שלנו</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            חנות ספרים דלתא מציעה מגוון שירותים מקצועיים לחובבי טכנולוגיה, סטודנטים ואנשי מקצוע בתחום ההייטק.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}