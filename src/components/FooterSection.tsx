'use client';

import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const FooterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Subscribing email:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-primary text-white rtl" dir="rtl">
      {/* Hidden SEO keywords */}
      <div className="hidden">
        <span>חנות ספרים</span>
        <span>שירות</span>
        <span>איכות</span>
        <span>מקצועיות</span>
        <span>ישראל</span>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About section */}
          <div className="footer-col">
            <h3 className="text-xl font-bold mb-4 border-b border-secondary pb-2 inline-block">אודות דלתא</h3>
            <p className="mb-4">
              חנות ספרים דלתא הינה חנות מובילה בתחום ספרי הטכנולוגיה, המציעה מגוון רחב של ספרים מקצועיים באיכות גבוהה.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-white hover:text-secondary transition-colors duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="text-xl font-bold mb-4 border-b border-secondary pb-2 inline-block">ניווט מהיר</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary transition-colors duration-300">דף הבית</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-300">חנות</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-300">קטגוריות</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-300">מבצעים מיוחדים</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-300">ספרים חדשים</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-300">אודות</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-300">צור קשר</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h3 className="text-xl font-bold mb-4 border-b border-secondary pb-2 inline-block">צור קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaMapMarkerAlt className="ml-2" />
                <span>רחוב הרצל 123, תל אביב</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="ml-2" />
                <span>03-1234567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="ml-2" />
                <span>info@deltabookstore.co.il</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-semibold mb-1">שעות פעילות:</h4>
              <p>ראשון-חמישי: 9:00 - 20:00</p>
              <p>שישי: 9:00 - 14:00</p>
              <p>שבת: סגור</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h3 className="text-xl font-bold mb-4 border-b border-secondary pb-2 inline-block">הרשמה לניוזלטר</h3>
            <p className="mb-4">הירשמו לניוזלטר שלנו וקבלו עדכונים על ספרים חדשים ומבצעים מיוחדים.</p>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="הכנס/י את כתובת האימייל שלך"
                  className="px-4 py-2 bg-white bg-opacity-20 rounded focus:outline-none focus:ring-2 focus:ring-secondary text-right"
                  required
                />
                <button
                  type="submit"
                  className="bg-secondary text-primary px-4 py-2 rounded font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  הרשמה
                </button>
              </div>
              {subscribed && (
                <div className="mt-2 text-secondary font-semibold animate-pulse">
                  תודה על הרשמתך!
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white border-opacity-20 text-center">
          <p>© {new Date().getFullYear()} חנות ספרים דלתא. כל הזכויות שמורות.</p>
          <div className="mt-2 flex justify-center space-x-4 space-x-reverse text-sm">
            <a href="#" className="hover:text-secondary transition-colors duration-300">תנאי שימוש</a>
            <a href="#" className="hover:text-secondary transition-colors duration-300">מדיניות פרטיות</a>
            <a href="#" className="hover:text-secondary transition-colors duration-300">מדיניות החזרות</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;