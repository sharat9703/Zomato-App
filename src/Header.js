import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header =(props)=>{
    return(
        <div className='d-none'>
            <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to={'/'}>Zomato</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav d-flex justify-content-between align-items-center w-100">
       <div>
       <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </div> 
        <div className='nav-link d-flex justify-content-between'>
            <button className='btn btn-success me-3'><i className="fa fa-sign-in" aria-hidden="true"></i>Sign in</button>
            <button className='btn btn-dark'>Sign Up</button>
        </div>       
      </div>


    </div>
  </div>
</nav>
        </div>
    )
}

export default Header;