import React, { useEffect, useState } from 'react';
import andriod from '../../assets/assignment-images/imges/landing-page/andriod.png';
import ios from '../../assets/assignment-images/imges/landing-page/ios.png';
import carLanding from '../../assets/assignment-images/imges/landing-page/car-landing.png';
import Easily from '../../assets/assignment-images/imges/landing-page/Easily.png';
import air from '../../assets/assignment-images/imges/landing-page/icons/air.png';
import auto from '../../assets/assignment-images/imges/landing-page/icons/auto.png';
import user from '../../assets/assignment-images/imges/landing-page/icons/user.png';
import doors from '../../assets/assignment-images/imges/landing-page/icons/doors.png';
import right from '../../assets/assignment-images/imges/landing-page/icons/right.png';
import star from '../../assets/assignment-images/imges/landing-page/icons/Star.png';
import darckRight from '../../assets/assignment-images/imges/landing-page/icons/arrow-right.svg';
// import car1 from '../../assets/assignment-images/imges/landing-page/car1.svg';
// import car2 from '../../assets/assignment-images/imges/landing-page/car2.svg';
import car1 from '../../assets/assignment-images/imges/landing-page/car1.svg'
import car2 from '../../assets/assignment-images/imges/landing-page/car2.svg'
import location from '../../assets/assignment-images/imges/landing-page/location.png';
import carIcon from '../../assets/assignment-images/imges/landing-page/car-icon.png';
import calender from '../../assets/assignment-images/imges/landing-page/calender.png';
import Audi from '../../assets/assignment-images/imges/landing-page/sec-5/Audi.png';
import lock from '../../assets/assignment-images/imges/landing-page/sec-5/lock.png';
import chat from '../../assets/assignment-images/imges/landing-page/sec-5/chat.png';
import message from '../../assets/assignment-images/imges/landing-page/sec-5/message.png';
import userIcone from '../../assets/assignment-images/imges/landing-page/sec-5/user.png';
import bgSec6_1 from '../../assets/assignment-images/imges/landing-page/sec-6/bgSec6_1.svg';
import bgSec6_2 from '../../assets/assignment-images/imges/landing-page/sec-6/bgSec6_2.svg';
import man from '../../assets/assignment-images/imges/landing-page/sec-6/man.png';
import iphone from '../../assets/assignment-images/imges/landing-page/sec-7/iPhone-14.png';

import aos, { AOS } from 'aos';
import 'aos/dist/aos.css';

import AutoSlider from '../AutoSlider/AutoSlider';
import './Home.scss';
import axios from 'axios';
// import AutoSliderUsers from '../AutoSliderUsers/AutoSliderUsers';
import Form from '../Form/Form';
import { Link, Navigate } from 'react-router-dom';

export default function Home() {


  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState(''); // Initialize with an empty string



  let getAllCars = async () => {
    let responce = await axios.get('https://freetestapi.com/api/v1/cars');
    // console.log(responce.data);
    setCars(responce.data);
    console.log(cars);
  }

  useEffect(() => {
    getAllCars();
  }, []);

  useEffect(() => {
    aos.init({duration: 1500});
  }, []);



  const cars_1 = cars.slice(0, 4);
  // const cars_2 = cars.slice(2, 4);


  // ! Navigate

  const [redirectToDetails, setRedirectToDetails] = useState(null);

  const handleCarClick = (carId) => {
    setRedirectToDetails(carId);
  };

  if (redirectToDetails !== null) {
    return <Navigate to={`/details/${redirectToDetails}`} />;
  }

  // * Navigate

  return (
    <div>

      <section className='d-lg-flex justify-content-between vh-100 align-items-center w-100 mx-auto pt-5 pt-lg-0 overflow-hidden'>
        <div className=' offset-lg-1 offset-0  w-lg-25 pt-5 pt-lg-0'>
          <h1 className='w-lg-50 w-100 font-hero'>Find, book and <br className='d-none d-lg-block' /> rent a car <span className='Easily'>Easily <img className='Easily-img w-90' src={Easily} alt="" /></span></h1>
          <p className='w-lg-50 w-100 mt-4'>Get a car wherever and whenever you <br className='d-none d-lg-block' /> need it with your IOS and Android device.</p>
          <div>
            <img className='me-2' src={andriod} alt="" />
            <img src={ios} alt="" />
          </div>
        </div>

        <div  id='bg-car' className=' pt-0 pt-lg-5 w-lg-75 my-lg-0 my-4'>
          <img data-aos="fade-left"   src={carLanding} className='space-top w-100' alt="" />
        </div>
      </section>

      <section id='BecomeArenter' className="dealsCars container pt-5 d-block">
        <div className="input-group mb-3 shadow-lg rounded rounded-4">
          <span
            className=" input-group-text px-3 py-3 bg-transparent text-white rounded-end-0 border border-4 border-end-0 border-0"
            id="basic-addon1">
            <i class="fa-solid fa-location-dot icon-color fs-3 mx-2"></i>
          </span>
          <div className="y-line my-auto"></div>
          <input type='text'
          onChange={(e) => setSearch(e.target.value)}
          className="form-control border-0 text-black  py-1 rounded-0 border-end-0 border-start-0 bg-transparent ps-3 border border-4"
            placeholder="Search By Name" />
          <span
            className=" border-0 border border-4 px-3 bg-transparent d-flex align-items-center justify-content-center"
            id="basic-addon1" role="button" >
            <button className="mainBtn px-4 py-2">Search</button>
          </span>
        </div>

        <div className="pt-2 text-center">
          <button className="secondBtn px-4 mt-4">POPULAR RENTAL DEALS</button>
          <h1 className='main-heading my-4'>Most popular cars rental deals</h1>

          {/*  */}
          <div className="d-flex gap-3 flex-wrap flex-lg-nowrap">

            <div className=' d-flex gap-3 flex-wrap flex-md-nowrap '>
              {cars_1.filter((item) => search === '' || item.make.toLowerCase().includes(search.toLowerCase())).map((car) => (
                <div data-aos="flip-down" className="w-lg-25 w-100 shadow rounded rounded-4 p-3 text-center">
                  <div>
                    <img src={car.id % 2 ? car1 : car2} className='w-75' alt="" />
                  </div>
                  <div className='mt-3'>
                    <div className=' text-start '>
                      <h5>{car.make}</h5>
                      <p><img src={star} alt="" /><span>4.8 (2.436 reviews)</span></p>
                    </div>
                    <div className="row text-icon">
                      <p className="col-6 text-start"><img src={user} alt="" />{car.owners}</p>
                      <p className="col-6 text-end"><img src={auto} alt="" /> Auto</p>
                      <p className="col-6 text-start"><img src={air} alt="" /> Air Conditioning</p>
                      <p className="col-6 text-end"><img src={doors} alt="" /> 2 Doors</p>
                    </div>
                    <div className='custom-line w-100'></div>
                    <div className='d-flex justify-content-between my-3'>
                      <div className="">Price</div>
                      <div className=""><span className='fw-bold'>{car.price}</span> <span className='text-icon'> /day</span> </div>
                    </div>
                    <div>
                      <button
                        className='mainBtn w-100'
                        onClick={() => handleCarClick(car.id)}
                        style={{ cursor: 'pointer' }}
                      >
                        Rent Now
                        <img src={right} alt="" />
                      </button>

                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className=' d-flex gap-3 flex-wrap flex-md-nowrap '>
              {cars_2.map((car) => (
                <div className="w-100 shadow rounded rounded-4 p-3 text-center">
                  <div>
                    <img src={car.id % 2 ? car1 : car2} className='w-75 py-1' alt="" />
                  </div>
                  <div className='mt-3'>
                    <div className=' text-start '>
                      <h5>{car.make}</h5>
                      <p><img src={star} alt="" /><span>4.8 (2.436 reviews)</span></p>
                    </div>
                    <div className="row text-icon">
                      <p className="col-6 text-start"><img src={user} alt="" />{car.owners}</p>
                      <p className="col-6 text-end"><img src={auto} alt="" /> Auto</p>
                      <p className="col-6 text-start"><img src={air} alt="" /> Air Conditioning</p>
                      <p className="col-6 text-end"><img src={doors} alt="" /> 2 Doors</p>
                    </div>
                    <div className='custom-line w-100'></div>
                    <div className='d-flex justify-content-between my-3'>
                      <div className="">Price</div>
                      <div className=""><span className='fw-bold'>{car.price}</span> <span className='text-icon'> /day</span> </div>
                    </div>
                    <div>
                      <button
                        className='mainBtn w-100'
                        onClick={() => handleCarClick(car.id)}
                        style={{ cursor: 'pointer' }}
                      >
                        Rent Now
                        <img src={right} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>

        <div className="text-center my-5">


          <Link to='/allCars'>
            <button className=' btn  border border-3 px-4 py-2 text-gray'>
              {/* <Navigate to="/allCars" /> */}
              Show all vehicles <img src={darckRight} className='text-black' alt="" /></button>
          </Link>

        </div>
      </section>

      <section className='mb-5' data-aos="fade-up">
        <div className='text-center mt-5'>
          <button className='secondBtn px-4 py-2'>HOW IT WORK</button>
          <h1 className='main-heading mb-5 mt-3'>Rent with following 3 working steps</h1>
        </div>

        <div className='d-flex justify-content-center gap-md-5 gap-4  flex-wrap'>
          <div className='text-center'>
            <img src={location} alt="" />
            <h3 className='mt-4'>Choose location</h3>
            <p>Choose your and find <br />
              your best car</p>
          </div>
          <div className='text-center mx-md-5'>
            <img src={calender} alt="" />
            <h3 className='mt-4'>Pick-up date</h3>
            <p>Select your pick up date and <br />
              time to book your car</p>
          </div>
          <div className='text-center'>
            <img src={carIcon} alt="" />
            <h3 className='mt-4'>Book your car</h3>
            <p>Book your car and we will deliver <br />
              it directly to you</p>
          </div>
        </div>
      </section>

      <section className='my-5'>
        <AutoSlider />
      </section>

      <section id='RentalDeals' className=' d-md-flex justify-content-between align-items-center mt-5'>
        <div id='bg-car_2' className='w-100 w-lg-50 me-lg-4'>
          <img  data-aos="zoom-in-up" className='w-100' src={Audi} alt="" />
        </div>

        <div className='ps-5 w-100 w-lg-50' data-aos="zoom-in-down">
          <button className='secondBtn py-2'>WHY CHOOSE US</button>
          <h1 className='main-heading mt-3 mb-5'>We offer the best experience with <br d-none d-lg-block /> our rental deals</h1>

          {/*  */}

          <div className=' d-flex flex-column gap-3'>
            <div className=' d-flex align-items-center '>
              <div>
                <img className=' me-4' src={lock} alt="" />
              </div>

              <div className=' d-flex flex-column '>
                <h5 className=''>Best price guaranteed</h5>
                <p className='text-gray'>Find a lower price? We’ll refund you 100% <br />
                  of the difference.</p>
              </div>
            </div>

            <div className=' d-flex align-items-center '>
              <div>
                <img className=' me-4' src={userIcone} alt="" />
              </div>

              <div className=' d-flex flex-column '>
                <h5 className=''>Experience driver</h5>
                <p className='text-gray'>Don’t have driver? Don’t worry, we have many <br />
                  experienced driver for you.</p>
              </div>
            </div>

            <div className=' d-flex align-items-center '>
              <div>
                <img className=' me-4' src={message} alt="" />
              </div>

              <div className=' d-flex flex-column '>
                <h5 className=''>24 hour car delivery</h5>
                <p className='text-gray'>Book your car anytime and we will deliver it <br />
                  directly to you.</p>
              </div>
            </div>

            <div className=' d-flex align-items-center '>
              <div>
                <img className=' me-4' src={chat} alt="" />
              </div>

              <div className=' d-flex flex-column '>
                <h5 className=''>24/7 technical suppor</h5>
                <p className='text-gray'>Have a question? Contact Rentcars support <br />
                  any time when you have problem.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id='HowItWorks' className='bg-color pb-5'>
        <div className=' d-flex justify-content-center'>
          {/* <img src={bgSec6_2} alt="" /> */}
          <div className='text-center mt-5'>
            <button className='secondBtn px-4 py-2'>HOW IT WORK</button>
            <h1 className='main-heading mb-5 mt-3'>Rent with following 3 working steps</h1>
          </div>
          {/* <img src={bgSec6_1} alt="" /> */}
        </div>

        <div className=' container'>
          <div className='row justify-content-around'>
            <div className='col-lg-6  d-flex justify-content-between shadow rounded rounded-5' data-aos="flip-right">
              <div className='w-50'>
                <img src={man} className='w-100' alt='' />
              </div>
              <div className='w-50 px-4'>
                <h2 className='fs-1 mt-2'>5.0 <span className='fs-5'>stars</span></h2>
                <div className='d-flex flex-start'>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>

                <p className='my-1'>
                  “I feel very secure when using caretall's
                  services. Your customer care team is
                  very enthusiastic and the driver is always on time.”
                </p>
                <h3 className='text-gray_2'>Charlie Johnson</h3>
                <p className='text-gray'>From New York, US</p>
              </div>
            </div>
            <div className='col-lg-6  d-flex justify-content-between shadow rounded rounded-5' data-aos="flip-left">
              <div className='w-50'>
                <img src={man} className='w-100' alt='' />
              </div>
              <div className='w-50 px-4'>
                <h2 className='fs-1 mt-2'>5.0 <span className='fs-5'>stars</span></h2>
                <div className='d-flex flex-start'>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>

                <p className='my-1'>
                  “I feel very secure when using caretall's
                  services. Your customer care team is
                  very enthusiastic and the driver is always on time.”
                </p>
                <h3 className='text-gray_2'>Charlie Johnson</h3>
                <p className='text-gray'>From New York, US</p>
              </div>
            </div>
          </div>
        </div>

      </section>


      <section id='WhyChooseUs' className='d-lg-flex justify-content-between align-items-lg-end align-items-center'>

        <div className='' >
          <div id='bg-Rentcars' className=''>
            <div className='ms-lg-5 ps-lg-5 pt-3 text-center text-lg-start ' data-aos="fade-right">
              <h1 className='main-heading'>Download Rentcars <br /> App for <span className='Easily'>FREE</span> </h1>
              <p className=' mt-3'>For faster, easier booking and exclusive deals.</p>
              <div className='d-flex justify-content-center'>
                <div className='me-2 mt-lg-4  w-lg-50 justify-content-center'>
                  <img className=' w-100' src={andriod} alt="" />
                </div>
                <div className=' mt-lg-4 d-flex w-lg-50  justify-content-center'>
                  <img className=' w-100' src={ios} alt="" />
                </div>
              </div>
              <div className='container'>
                <Form></Form>
              </div>
            </div>
          </div>
        </div>
        <div className=' text-center'>
          <div className='w-75' data-aos="fade-up"
     data-aos-duration="1000">
            <img className='w-100' src={iphone} alt="" />
          </div>
        </div>
      </section>

    </div>
  )
}
