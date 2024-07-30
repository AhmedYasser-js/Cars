import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import air from '../../assets/assignment-images/imges/landing-page/icons/air.png';
import auto from '../../assets/assignment-images/imges/landing-page/icons/auto.png';
import user from '../../assets/assignment-images/imges/landing-page/icons/user.png';
import doors from '../../assets/assignment-images/imges/landing-page/icons/doors.png';
import right from '../../assets/assignment-images/imges/landing-page/icons/right.png';
import star from '../../assets/assignment-images/imges/landing-page/icons/Star.png';
import car1 from '../../assets/assignment-images/imges/landing-page/car1.svg'
import car2 from '../../assets/assignment-images/imges/landing-page/car2.svg';
import aos from 'aos';
import 'aos/dist/aos.css';

export default function Details() {
  const { id } = useParams(); // Access the id parameter from the URL
  const [car, setCar] = useState(null); // State to store the fetched car data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`https://freetestapi.com/api/v1/cars/${id}`);
        setCar(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails(); // Fetch car details when the component mounts
  }, [id]);

  useEffect(() => {
    aos.init({ duration: 1500 });
  }, []);

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading car details.</p>;

  // Render the car details
  return (
    <div>
      <section className='pt-5'>
        <div className='d-md-flex justify-content-between align-items-center mp-5'>
          <div id='bg-car_2' className='w-100 w-lg-50 me-lg-4 flex-column'>
            <img data-aos="zoom-in" className='w-100' src={car.id % 2 ? car1 : car2} alt="" />
          </div>
          <div className='w-100 w-lg-50 me-lg-4'>
            <button className='secondBtn py-2'>WHY CHOOSE US</button>
            <h1 className='main-heading mt-3 mb-5'>
              We offer the best experience with <br className='d-none d-lg-block' /> our rental deals
            </h1>
            <div className="w-100 text-center">
              <div className='mt-3'>
                <div className='text-start'>
                  <h5>{car.make}</h5>
                  <p><img src={star} alt="" /><span>4.8 (2,436 reviews)</span></p>
                </div>
                <div className="text-start">
                  <p className=""><img src={user} alt="" />{car.owners}</p>
                  <p className=""><img src={auto} alt="" /> Auto</p>
                  <p className=""><img src={air} alt="" /> Air Conditioning</p>
                  <p className=""><img src={doors} alt="" /> 2 Doors</p>
                </div>
                <div className='custom-line w-25'></div>
                <div className='d-flex gap-2 my-3'>
                  <div className="">Price</div>
                  <div className=""><span className='fw-bold'>{car.price}</span> <span className='text-icon'> /day</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
