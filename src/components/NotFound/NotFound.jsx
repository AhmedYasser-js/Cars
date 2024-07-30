import React from 'react'
import notFound from '../../assets/assignment-images/imges/not-found/404-not-found.png';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>

      <div className='d-flex justify-content-center flex-column align-items-center'>
        <div className='text-center'>
          <img className='w-50' src={notFound} alt="" />
        </div>
        <div>
        <Link to='/home'>

        <button type="back" className="btn btn-primary mb-5">
          Back to Home
        </button>
        </Link>
      </div>
      </div>
      
    </div>
  )
}
