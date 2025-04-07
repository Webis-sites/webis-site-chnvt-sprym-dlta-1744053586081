'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 dir-rtl" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={imageVariants} className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="חנות ספרים דלתא - חנות ספרים טכנולוגיים בישראל"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl transform transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          <div className="text-right">
            <motion.h2 
              variants={itemVariants} 
              className="text-4xl md:text-5xl font-bold mb-6 text-primary"
            >
              אודות חנות ספרים דלתא
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg mb-6 leading-relaxed text-gray-700"
            >
              אנחנו חנות ספרים מוביל בתחום החינוך עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg mb-6 leading-relaxed text-gray-700"
            >
              חנות ספרים דלתא הינה המקום המוביל בישראל לספרות טכנולוגית מקצועית. אנו מציעים מגוון רחב של ספרים בנושאי תכנות, מדעי המחשב, בינה מלאכותית, סייבר ואבטחת מידע, ועוד תחומים רבים בעולם הטכנולוגיה המתפתח.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg mb-8 leading-relaxed text-gray-700"
            >
              הצוות המקצועי שלנו תמיד זמין לייעץ ולהמליץ על הספרים המתאימים ביותר לצרכים שלך, בין אם אתה סטודנט, מפתח מתחיל או מקצוען ותיק. אנו מחויבים להביא לכם את החומרים החינוכיים העדכניים והאיכותיים ביותר בשוק.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <a 
                href="/contact" 
                className="inline-block bg-secondary text-primary font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                צור קשר
              </a>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div 
            variants={itemVariants} 
            className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-primary"
          >
            <h3 className="text-xl font-bold mb-4 text-primary">מומחיות בספרות טכנולוגית</h3>
            <p className="text-gray-700">אנו מתמחים בספרות מקצועית בתחומי הטכנולוגיה, עם דגש על ספרים עדכניים ורלוונטיים לשוק העבודה המודרני.</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-primary"
          >
            <h3 className="text-xl font-bold mb-4 text-primary">משאבים חינוכיים</h3>
            <p className="text-gray-700">אנו מספקים משאבים חינוכיים איכותיים למוסדות לימוד, מרצים וסטודנטים, עם מחירים מיוחדים לרכישות מוסדיות.</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-primary"
          >
            <h3 className="text-xl font-bold mb-4 text-primary">שירות לקוחות מצוין</h3>
            <p className="text-gray-700">הלקוחות שלנו הם בראש סדר העדיפויות שלנו. אנו מחויבים לספק חוויית קנייה מעולה ושירות אישי לכל לקוח.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;