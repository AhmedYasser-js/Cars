// eslint-disable-next-line no-unused-vars
import React from 'react'
import Frame from '../../assets/assignment-images/imges/footer/Frame.png';
import location from '../../assets/assignment-images/imges/footer/location.png';
import call from '../../assets/assignment-images/imges/footer/call.png';
import facebook from '../../assets/assignment-images/imges/footer/facebook.png';
import instagram from '../../assets/assignment-images/imges/footer/instagram.png';
import logoFooter from '../../assets/assignment-images/imges/footer/logo-footer.png';
import sms from '../../assets/assignment-images/imges/footer/sms.png';
import youtube from '../../assets/assignment-images/imges/footer/youtube.png';
import '../Footer/Footer.scss';


export default function Footer() {
  return (
    <div>
      <footer className='bg-footer'>
        <div className='container px-5'>
          <div className="row">
            <div className="col-md-4">
              <h6 className=' text-white my-5'><img src={Frame} alt="" /> RENTCARS</h6>
              <p className='mb-3 d-flex align-items-center'> <img src={location} alt="" /> <p>25566 Hc 1, Glenallen, <br /> Alaska, 99588, USA</p></p>
              <p className='mb-3'> <img src={call} alt="" /> +603 4784 273 12</p>
              <p className='mb-3'> <img src={sms} alt="" /> rentcars@gmail.com</p>
            </div>
            <div className="col-md-2">
              <h6 className=' text-white my-5'>Our Product</h6>
              <p className='mb-2 d-flex align-items-center'> Career</p>
              <p className='mb-2 d-flex align-items-center'> Career</p>
              <p className='mb-2 d-flex align-items-center'> Career</p>
              <p className='mb-2 d-flex align-items-center'> Career</p>
              <p className='mb-2 d-flex align-items-center'> Career</p>
            </div>
             <div className="col-md-2">
              <h6 className=' text-white my-5'>Our Product</h6>
              <p className='mb-2 d-flex align-items-center'> Career</p>
              <p className='mb-2 d-flex align-items-center'> Career</p>
              <p className='mb-2 d-flex align-items-center'> Career</p>
              <p className='mb-2 d-flex align-items-center'> Career</p>
              <p className='mb-2 d-flex align-items-center'> Career</p>
            </div>
             <div className="col-md-2">
              <h6 className=' text-white my-5'>Our Product</h6>
              <p className='mb-2 d-flex align-items-center'> Career</p>
              <p className='mb-2 d-flex align-items-center'> Career</p>
              <p className='mb-2 d-flex align-items-center'> Career</p>
              <p className='mb-2 d-flex align-items-center'> Career</p>
              <p className='mb-2 d-flex align-items-center'> Career</p>
            </div>
             <div className="col-md-2">
              <h6 className=' text-white my-5'>Follow Us</h6>
              <img src={facebook} alt="" />
              <img className='mx-2' src={instagram} alt="" />
              <img src={youtube} alt="" />
            </div>

          <div className='custom-line w-100'></div>
<p className=' py-3'>Copyright 2023 ・ Rentcars, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
