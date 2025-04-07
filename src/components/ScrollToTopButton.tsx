'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

interface ScrollToTopButtonProps {
  scrollThreshold?: number;
  bottom?: string;
  left?: string;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  scrollThreshold = 300,
  bottom = '2rem',
  left = '2rem',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event to show/hide button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Clean up event listener
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [scrollThreshold]);

  // Scroll to top with smooth animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="חזרה לראש העמוד"
      className={`
        fixed
        z-50
        flex
        items-center
        justify-center
        p-3
        rounded-full
        bg-primary
        text-white
        hover:bg-primary-dark
        focus:outline-none
        focus:ring-2
        focus:ring-secondary
        focus:ring-offset-2
        shadow-lg
        transition-all
        duration-300
        transform
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}
        sm:p-4
        md:p-4
      `}
      style={{ bottom, left }}
      dir="rtl"
    >
      <FaArrowUp className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
    </button>
  );
};

export default ScrollToTopButton;