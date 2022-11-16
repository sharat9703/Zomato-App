import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header './Header';
import Footer './Footer';
import Home from './Component/Home/Home';

const Routing =()=>{
    return(
        <BrowserRouter>
        <div>
            <Header/>
             <Route exact path={'/'} component={Home}/>
            <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;