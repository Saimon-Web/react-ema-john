import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();
    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }
    const handleCreateUser = (event) => {
        const shipping = { name, phone, address }
        console.log(shipping)
        event.preventDefault();
    }

    return (
        <div >
            <div className='form-container'>
                <h2 className='form-title'>Shipping Information</h2>
                <div className='inner-box'>

                    <form action="" className='form-box' onSubmit={handleCreateUser}>
                        <div className="input-group">
                            <label htmlFor="name" >Your Name</label> <br />
                            <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email" >Email</label> <br />
                            <input value={user?.email} readOnly type="email" name="email" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="address" >Address</label> <br />
                            <input onBlur={handleAddressBlur} type="text" name="password" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone" >Phone Number</label> <br />
                            <input onBlur={handlePhoneBlur} type="number" name="phone" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>{error}</p>


                        <input className='form-submit' type="submit" value="Add Shipping" />
                    </form>

                </div>

            </div>


            <div className='background-container'></div>



        </div>
    );
};

export default Shipment;