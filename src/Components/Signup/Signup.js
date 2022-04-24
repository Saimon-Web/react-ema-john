import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    if (user) {
        navigate('/')
    }

    const handleCreateUser = (event) => {

        event.preventDefault();
        if (password !== confirmpassword) {
            setError('Your password did not match');
            return;
        }
        if (password.length < 6) {
            setError('password must be 6 charcter or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password);



    }
    return (
        <div >
            <div className='form-container'>
                <h2 className='form-title'>SignUp</h2>
                <div className='inner-box'>

                    <form action="" className='form-box' onSubmit={handleCreateUser}>
                        <div className="input-group">
                            <label htmlFor="email" >Email</label> <br />
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password" >Password</label> <br />
                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirm-password" >Confirm Password</label> <br />
                            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>{error}</p>


                        <input className='form-submit' type="submit" value="Sign Up" />
                    </form>
                    ``
                </div>
                <p className='paragraph'>Already have an account? <Link className='link' to='/login'>login</Link></p>
            </div>


            <div className='background-container'></div>



        </div>
    );
};

export default Signup;