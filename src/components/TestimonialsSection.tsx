'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
  avatar: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'דניאל כהן',
      quote: 'חנות הספרים דלתא היא המקום הטוב ביותר לרכישת ספרי טכנולוגיה. הבחירה מדהימה והצוות תמיד מוכן לעזור.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'מיכל לוי',
      quote: 'מצאתי את כל ספרי התכנות שחיפשתי בחנות דלתא. השירות מעולה והידע של הצוות מרשים ביותר.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'יוסי אברהם',
      quote: 'הזמנתי ספר נדיר בתחום הסייבר והצוות של דלתא השיג אותו עבורי תוך ימים ספורים. שירות יוצא מן הכלל!',
      rating: 4,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 4,
      name: 'נועה שלום',
      quote: 'חנות דלתא היא הבית השני שלי. אני מוצאת שם תמיד את הספרים העדכניים ביותר בתחום הטכנולוגיה והמחירים הוגנים.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 5,
      name: 'אלון דוד',
      quote: 'הייעוץ המקצועי שקיבלתי בחנות דלתא עזר לי למצוא בדיוק את הספרים שהייתי צריך ללימודי ההנדסה שלי.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedTestimonials, setDisplayedTestimonials] = useState<Testimonial[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setDisplayedTestimonials([testimonials[currentIndex]]);
    } else {
      const numToShow = Math.min(3, testimonials.length);
      const startIndex = currentIndex % testimonials.length;
      
      const selected = [];
      for (let i = 0; i < numToShow; i++) {
        const index = (startIndex + i) % testimonials.length;
        selected.push(testimonials[index]);
      }
      
      setDisplayedTestimonials(selected);
    }
  }, [currentIndex, isMobile, testimonials]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar 
        key={index} 
        className={`inline-block ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`} 
      />
    ));
  };

  return (
    <section className="testimonials-section bg-secondary py-16 px-4 md:px-8 lg:px-16 rtl text-right overflow-hidden" dir="rtl">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          מה הלקוחות אומרים על חנות ספרים דלתא
        </motion.h2>
        
        <div className="relative" ref={containerRef}>
          <div className="flex justify-center">
            <button 
              onClick={prevTestimonial}
              className="testimonial-nav-button right-0 md:right-2"
              aria-label="הקודם"
            >
              <FaChevronRight className="text-primary text-xl" />
            </button>
            
            <div className="testimonials-container overflow-hidden w-full mx-4 md:mx-12">
              <div className="flex justify-center">
                <AnimatePresence mode="wait">
                  {displayedTestimonials.map((testimonial) => (
                    <motion.div
                      key={testimonial.id}
                      className="testimonial-card"
                      initial={{ opacity: 0, scale: 0.8, x: 100 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8, x: -100 }}
                      transition={{ 
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100
                      }}
                    >
                      <div className="testimonial-avatar-container">
                        <img 
                          src={testimonial.avatar} 
                          alt={`תמונה של ${testimonial.name}`}
                          className="testimonial-avatar"
                        />
                      </div>
                      <div className="testimonial-content">
                        <div className="testimonial-rating mb-2">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="testimonial-quote">"{testimonial.quote}"</p>
                        <h3 className="testimonial-name">{testimonial.name}</h3>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="testimonial-nav-button left-0 md:left-2"
              aria-label="הבא"
            >
              <FaChevronLeft className="text-primary text-xl" />
            </button>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 mx-1 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-300'
                }`}
                aria-label={`עבור לביקורת ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;