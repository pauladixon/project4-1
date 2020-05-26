import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) =>{
    let nav = props.user?
    <div>
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
   </div>
    :
    <div>
        <Link to="/signup">
            Signup
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/login">
            Login
        </Link>
    </div>;

    return (
    <div className='NavBar'>
        {nav}
    </div>
    );
}

export default NavBar;