import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoName from '../../assets/anka_text_logo.svg';
import logo from '../../assets/anka_logo.svg';
import SideDrawer from './SideDrawer';

function Navbar ()
{
    const [ click, setClick ] = useState( false );
    const handleClick = () => setClick( !click );
    // const closeMobileMenu = () => setClick( false );

    return (
        ( window.innerWidth > 1024 ?
            <div>
                <nav className="NavbarItems" >
                    <div className='logoset'>
                        <Link to="/" >
                            <img className="logo" src={ logo } alt="logo" ></img>
                        </Link >
                        <Link to="/" >
                            <img className="logoName" src={ logoName } alt="logo name" ></img>
                        </Link >
                    </div>

                    <div className='menu-icon' onClick={ handleClick } >
                        <i className={ click ? 'fas fa-times' : 'fas fa-bars' }
                        />
                    </div>
                    <ul className={ click ? 'nav-menu active' : 'nav-menu passive' } >
                        {
                            MenuItems.map( ( item, index ) =>
                            {
                                return (
                                    <li key={ index }>
                                        <a className={ item.cName } href={ item.path } > { item.name } </a>
                                    </li>
                                )
                            } ) }
                    </ul>
                </nav>
            </div>
            :
            <SideDrawer /> )
    );
}

export default Navbar;