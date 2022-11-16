import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer =()=>{
    return(
        <footer className="bg-dark mb-0 bottom-0 mt-auto w-100" >
      <hr/>
      <h3 className="text-white text-center">© Sharat's Lab</h3>
      <div className="container py-5 text-white d-sm-block">
        <p className="float-end mb-1 d-sm-block">
          <Link to={'/'}>Back to top</Link>
        </p>
        <p className="mb-1 d-sm-block">
          If you want to contact us , please do so! <Link to={'/'}>Contact</Link>
        </p>
        <p className="mb-0 d-sm-block">
          Wanna Know More About Us? <Link to={'/'}>Visit the homepage</Link> or read
          our <Link to={'/'}>About us</Link> page.
        </p>
      </div>
    </footer>
    )
}

export default Footer;