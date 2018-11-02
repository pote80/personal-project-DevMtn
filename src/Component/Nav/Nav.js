import React from 'react';
import Login from '../../images/Login.png';
import Cart from '../../images/cart.png';
import LinusBanner from '../../images/LinusBanner.png'
import '../../App.css';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='Nav'>
            <Link to={`/`}>
                <div>
                    <img src={LinusBanner} className='bannerImg' alt='Banner' />
                </div>
            </Link>
            <div className='navIcon'>
                <Link to={`/auth`}>
                    <div>
                        <img src={Login} className='navImg' alt='Login' />
                    </div>
                </Link>
                <Link to={`/Cart`}>
                    <div>
                        <img src={Cart} className='navImg' alt='Cart' />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Nav