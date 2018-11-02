import React from 'react';
import Login from '../../images/Login.png';
import Cart from '../../images/cart.png';
import LinusBanner from '../../images/LinusBanner.png'
import '../../App.css';

const Nav = () =>{
    return(
        <div className='Nav'>
        <img src={LinusBanner} className='bannerImg' alt='Banner'/>
        <img src={Login} className='navImg' alt='Login'/>
        <img src={Cart} className='navImg' alt='Cart'/>
        </div>
    )
}

export default Nav