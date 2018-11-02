import React, { Component } from 'react';
import '../../App.css';
import whiteLogoShirt from '../../images/LTTWhiteLogo.png';
import wanStealth from '../../images/WANStealth.png';
import lttSweatshirt from '../../images/LTTSweatshirt.png';
import brofist from '../../images/Brofist.png';
import linusKeyCap from '../../images/LinusKeyCap.png';
import wanHoodie from '../../images/WANHoodie.png';
import brofistMug from '../../images/BrofistMug.png';
import keepOnDiggin from '../../images/KeepOnDiggin.png';
import techquickie from '../../images/Techquickie.png';
import trollLinusShirt from '../../images/TrollLinusShirt.png';
import idMountThat from '../../images/IdMountThat.png';
import holyBalls from '../../images/HolyBalls.png';
import Resolution from '../../images/Resolution.png';
import lttHat from '../../images/LTTHat.png';
import Expressive from '../../images/Expressive.png';
import resolutionMug from '../../images/ResolutionMug.png';
import firepole from '../../images/Firepole.png';
import firetruck from '../../images/Firetruck.png';
import CSF from '../../images/CSF.png';


export default class Dashboard extends Component {
    render() {
        return (
            <div className='productsPage'>
                <div className='productsContainer'>
                    <div className='item'>
                        <img src={whiteLogoShirt} alt='White Logo Shirt' className='productImg' />
                        <div>White Logo Shirt</div>
                        <div>$25</div>
                    </div>
                    <div className='item'>
                        <img src={wanStealth} alt='Wan Stealth Shirt' className='productImg' />
                        <div>WAN Stealth Shirt</div>
                        <div>$25</div>
                    </div>
                    <div className='item'>
                        <img src={lttSweatshirt} alt='LTT Sweatshirt' className='productImg' />
                        <div>LTT Sweatshirt</div>
                        <div>$25</div>
                    </div>
                    <div className='item'>
                        <img src={brofist} alt='Brofist Shirt' className='productImg' />
                        <div>Brofist Shirt</div>
                        <div>$25</div>
                    </div>
                    <div className='item'>
                        <img src={linusKeyCap} alt='Linus Troll KeyCaps' className='productImg' />
                        <div>Troll Linus KeyCaps</div>
                        <div>$25</div>
                    </div>
                    <div className='item'>
                        <img src={wanHoodie} alt='WAN Hoodie' className='productImg' />
                        <div>WAN Hoodie</div>
                        <div>$25</div>
                    </div>
                    <div className='item'>
                        <img src={brofistMug} alt='Brofist Mug' className='productImg' />
                        <div>Brofist Mug</div>
                        <div>$25</div>
                    </div>
                    <div className='item'>
                        <img src={keepOnDiggin} alt='Keep On Diggin Shirt' className='productImg' />
                        <div>Keep On Diggin' Shirt</div>
                        <div>$25</div>
                    </div>
                    <div className='item'>
                        <img src={techquickie} alt='Techquickie Shirt' className='productImg' />
                        <div>Techquickie Shirt</div>
                        <div>$25</div>
                    </div>
                    <div className='item'>
                        <img src={trollLinusShirt} alt='Troll Linus Shirt' className='productImg' />
                        <div>Troll Linus Shirt</div>
                        <div>$25</div>
                    </div>
                    <div className='item'>
                        <img src={idMountThat} alt='Id Mount that Shirt' className='productImg' />
                        <div>I'd Mount That Shirt</div>
                        <div>$25</div>
                    </div>
                    <div className='item'>
                        <img src={holyBalls} alt='Holy Balls Shirt' className='productImg' />
                        <div>Holy Balls</div>
                        <div>$25</div>
                    </div>
                    <div className='item'>
                        <img src={Resolution} alt='Resolution Shirt' className='productImg' />
                        <div>Resolution Is Just A Number</div>
                        <div>$25</div>
                    </div>
                    <div className='item'>
                        <img src={lttHat} alt='LTT Hat' className='productImg' />
                        <div>Linus Tech Tips Snapback</div>
                        <div>$25</div>
                    </div>
                    <div className='item'>
                        <img src={Expressive} alt='Expressive Shirt' className='productImg' />
                        <div>Expressive Linus Shirt</div>
                        <div>$25</div>
                    </div>
                    <div className='item'>
                        <img src={resolutionMug} alt='Resolution Mug' className='productImg' />
                        <div>Resolution Is Just A Number</div>
                        <div>$25</div>
                    </div>
                    <div className='item'>
                        <img src={firepole} alt='Firepole Shirt' className='productImg' />
                        <div>Firepole Shirt</div>
                        <div>$25</div>
                    </div>
                    <div className='item'>
                        <img src={firetruck} alt='Firetruck Shirt' className='productImg' />
                        <div>Firetruck Shirt</div>
                        <div>$25</div>
                    </div>
                    <div className='item'>
                        <img src={CSF} alt='Channel Super Fun Shirt' className='productImg' />
                        <div>Channel Super Fun Shirt</div>
                        <div>$25</div>
                    </div>
                </div>
            </div>
        )
    }
}