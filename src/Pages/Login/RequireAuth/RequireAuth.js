import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const {user, isLoading} = useAuth();
    console.log(user);
    const location = useLocation();
    
    if(isLoading){
        return <Loading></Loading>
    }
     
    if(user?.email){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }}   />;
};

export default RequireAuth;