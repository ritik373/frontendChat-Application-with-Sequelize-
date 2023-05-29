import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

function Private(props) {

    const token=useSelector((state)=>state.auth.token);
  
    if(!token){
        return <Link to="/login"></Link>

    }else{
        return props.children;
    }
};

export default Private;