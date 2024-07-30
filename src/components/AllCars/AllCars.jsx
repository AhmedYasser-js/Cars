import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import car1 from '../../assets/assignment-images/imges/landing-page/car1.svg';
import car2 from '../../assets/assignment-images/imges/landing-page/car2.svg';
import star from '../../assets/assignment-images/imges/landing-page/icons/Star.png';
import air from '../../assets/assignment-images/imges/landing-page/icons/air.png';
import auto from '../../assets/assignment-images/imges/landing-page/icons/auto.png';
import user from '../../assets/assignment-images/imges/landing-page/icons/user.png';
import doors from '../../assets/assignment-images/imges/landing-page/icons/doors.png';
import right from '../../assets/assignment-images/imges/landing-page/icons/right.png';
import '../AllCars/AllCars.scss';
import aos from 'aos';
import 'aos/dist/aos.css';

export default function AllCars() {
  const [allCars, setAllCars] = useState([]);
  const [search, setSearch] = useState(''); // Initialize with an empty string
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const [redirectToDetails, setRedirectToDetails] = useState(null);

  useEffect(() => {
    const getAllCars = async () => {
      try {
        let response = await axios.get('https://freetestapi.com/api/v1/cars');
        setAllCars(response.data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    getAllCars();
  }, []);

  useEffect(() => {
    aos.init({ duration: 1500 });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allCars.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allCars.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCarClick = (carId) => {
    setRedirectToDetails(carId);
  };

  return (
    <div>
      {redirectToDetails && <Navigate to={`/details/${redirectToDetails}`} />}
      <section className="pt-5 container">
        <h3 className="text-gray_2 pt-5">
          <Link to="/home" className="link">
            Home
          </Link>
          /Cars
        </h3>
        <div className="text-center mt-3">
          <button className="secondBtn">POPULAR RENTAL DEALS</button>
          <h1 className="main-heading">Most popular cars rental deals</h1>
        </div>
        <div className="input-group my-1 shadow-lg rounded rounded-4 w-75 mx-auto">
          <span className="input-group-text px-3 py-3 bg-transparent text-white rounded-end-0 border border-4 border-end-0 border-0">
            <i className="fa-solid fa-location-dot icon-color fs-3 mx-2"></i>
          </span>
          <div className="y-line my-auto"></div>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="form-control border-0 text-black py-1 rounded-0 border-end-0 border-start-0 bg-transparent ps-3 border border-4"
            placeholder="Search By Name"
          />
          <span className="border-0 border border-4 px-3 bg-transparent d-flex align-items-center justify-content-center" id="basic-addon1" role="button">
            <button className="mainBtn px-4 py-2">Search</button>
          </span>
        </div>
        <div className="d-flex flex-wrap gap-3 justify-content-center my-5">
          {currentItems
            .filter((item) => search === '' || item.make.toLowerCase().includes(search.toLowerCase()))
            .map((car) => (
              <div data-aos="zoom-in-down" className="w-lg-23 shadow rounded rounded-4 p-3 text-center" key={car.id}>
                <div>
                  <img src={car.id % 2 ? car1 : car2} className="w-75" alt="" />
                </div>
                <div className="mt-3">
                  <div className="text-start">
                    <h5>{car.make}</h5>
                    <p>
                      <img src={star} alt="" />
                      <span>4.8 (2.436 reviews)</span>
                    </p>
                  </div>
                  <div className="row text-icon">
                    <p className="col-6 text-start">
                      <img src={user} alt="" />
                      {car.owners}
                    </p>
                    <p className="col-6 text-end">
                      <img src={auto} alt="" /> Auto
                    </p>
                    <p className="col-6 text-start">
                      <img src={air} alt="" /> Air Conditioning
                    </p>
                    <p className="col-6 text-end">
                      <img src={doors} alt="" /> 2 Doors
                    </p>
                  </div>
                  <div className="custom-line w-100"></div>
                  <div className="d-flex justify-content-between my-3">
                    <div className="">Price</div>
                    <div className="">
                      <span className="fw-bold">{car.price}</span> <span className="text-icon"> /day</span>{' '}
                    </div>
                  </div>
                  <div>
                    <button className="mainBtn w-100" onClick={() => handleCarClick(car.id)} style={{ cursor: 'pointer' }}>
                      Rent Now
                      <img src={right} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="pagination mb-5">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
