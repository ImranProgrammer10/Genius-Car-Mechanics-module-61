import React from 'react';
import {   useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
 

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location=useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, navigate);
    }
   
  
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleSignIn} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;