import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../../store/auth-slice';
import { useDispatch } from 'react-redux';
import { Button, Heading } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar(props) {

    const name = localStorage.getItem("name");
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    // -------------------------------
    const navigate=useNavigate();
    const handleLogout = () => {
        dispatch(authActions.logout());
        navigate("/login");
      };
      // ------------------------------------------------------------
      const handleLogin = () => {
        navigate("/login");
      };
    return (
        <div>
            
            <div className="Navbar">
        <Heading>What's Chat</Heading>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/chat"}>Chat</Link>
        </div>
        <div>
          {name && <p className="name">{name}</p>}
          {token ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <Button onClick={handleLogin}>Login</Button>
          )}
        </div>
      </div>
            
        </div>
    );
}

export default Navbar;