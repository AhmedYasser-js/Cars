import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.phone) tempErrors.phone = "Phone number is required";
        if (!formData.email) tempErrors.email = "Email is required";
        return tempErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await axios.post('https://caars.free.beeceptor.com', formData);
                    toast.success('Data submitted successfully!');
            } catch (error) {
                toast.error('Failed to submit data');
            }
        } else {
            setErrors(validationErrors);
            for (let error in validationErrors) {
                alert(validationErrors[error]);
            }
        }
    };

    return (
        <div>
        <div className=''>
            <form className='w-100 mt-5' onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control border border-0 rounded rounded-4 px-3 py-2"
                        placeholder="Name"
                        aria-label="Name"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control border border-0 rounded rounded-4 px-3 py-2"
                        placeholder="Phone Number"
                        aria-label="Phone Number"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control border border-0 rounded rounded-4 px-3 py-2"
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon1"
                    />
                </div>

                <div className='text-center pb-2'>
                    <button className='px-5 py-2 mainBtn fw-medium text-white'>Send</button>
                </div>
            </form>
            <ToastContainer />
        </div>
        </div>
    );
}
