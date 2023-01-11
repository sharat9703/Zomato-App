import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const lurl = 'https://zomatoajulypi.heroku.com/location';

class Search extends Component{

  constructor(){
  super()

  this.state={
    location:''
  }
}

  render(){ 
   
    return(
      
      <header>
        <div id="search">
        <div className="float-lg-end m-3 float-md-start float-sm-start float-xs-start">
            <Link to={'/'} className="btn text-light h1 fw-bold fs-5">Login</Link>
            <Link to={'/'} className="btn text-light h1 fw-bold fs-5">Sign up</Link>
        </div>
        <div id="logo">
          <span className="text-danger">e!</span>   
        </div>
        <div id="heading" className="text-light text-center">Find the Best Restaurants, Cafes and Bars  </div>
        <div id="dropdown" className="row position-absolute">
          <select className="col-lg-5 col-md-5 col-sm-12 ">
            <option>----SELECT CITY----</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
          </select>
          <select id="restSelect" className="col-lg-7 col-md-7 col-sm-12">
            <option>----SELECT Restaurants----</option>
            <option>Wow Moms</option>
            <option>ChopStick</option>
          </select>
        </div>
      </div>
      </header>
    )
  }
    
}

/*componentDidMount(){
  
}*/

export default Search;