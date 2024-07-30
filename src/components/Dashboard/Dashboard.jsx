import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Dashboard.scss'; // Make sure to create and import a CSS file for styling

export default function Dashboard() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      {showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <i class="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}
