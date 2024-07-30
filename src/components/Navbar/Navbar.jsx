import React, { useState, useEffect } from 'react';
import '../Navbar/Navbar.scss';
import logo from '../../assets/assignment-images/imges/nav/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80); // Change this condition as needed
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${isScrolled ? 'bg-white  bg-nav' : 'bg-transparent'} px-0 py-4 d-flex justify-content-between fw-medium position-fixed w-100`}
      >
        <div className="container">
          <div>
            <img src={logo} alt="Logo" className="" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" 
                href='#BecomeArenter'
                >
                  Become a renter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page"
                href='#RentalDeals'
                >
                  Rental deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page"
                href='#HowItWorks'
                >
                  How it works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page"
                href='#WhyChooseUs'
                >
                  Why choose us
                </a>
              </li>
            </ul>
            <div>
              <button className="btn px-3 py-2 bg-transparent fw-medium">
                Sign in
              </button>
              <button className="px-3 py-2 mainBtn fw-medium text-white">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
