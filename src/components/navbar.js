import React from 'react';
import './navbar.css';
import spacexlogo from '../assets/spacexlogo.png'

const Navbar=()=>{

    return(
        <React.Fragment>
            <nav className='navbar'>
                <menu className='nav-menu'>
                    <img src={spacexlogo} alt='logo' />
                </menu>
            </nav>
        </React.Fragment>
    )
}
export default Navbar;