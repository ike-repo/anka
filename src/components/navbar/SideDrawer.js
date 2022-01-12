import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SideDrawerData } from './SideDrawerData';
import * as FaIcons from 'react-icons/fa';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import './SideDrawer.css'
import onClickOutside from 'react-onclickoutside';
import logo from '../../assets/anka_logo.svg';

const SideDrawerNav = styled.nav`
    background: #52796F;
    width: 35vh;
    height: 110vh;
    display: flex;
    justify-content: start;
    position: fixed;
    top: 0;
    left: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    transition: 750ms;
    z-index:1;
`;

const SideDrawerWrap = styled.div`
    width:50%
`;

function SideDrawer( {item} ){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    SideDrawer.handleClickOutside = () => setIsOpen(false);
    const handleSubMenuClick = () => {
            setIsOpen(false)
    }
    return(
        <div className="navbar-small-container">
            
            <div>
                <Link className="logoSet" to="/anka/" >
                    <img className="logo-side-drawer" src={ logo } alt="logo"></img>
                </Link>
            </div>
            <div>
                <IconContext.Provider value={{ style: { color: 'red' }}} >
                    <SideDrawerNav onClick={handleSubMenuClick} isOpen={isOpen}>
                        <SideDrawerWrap >
                            {SideDrawerData.map((item, index) => {
                            return <SubMenu item={item} key={index} 
                                onClick={handleSubMenuClick} isOpen={isOpen}/>;
                            })}
                        </SideDrawerWrap>
                    </SideDrawerNav>
                </IconContext.Provider>
            </div>
            <div className="hamburger-small">
                <FaIcons.FaBars onClick={ toggle } className='side-drawer' />
            </div>
    </div>
    )
};
const clickOutsideConfig = {
    handleClickOutside: () => SideDrawer.handleClickOutside,
};

export default onClickOutside(SideDrawer, clickOutsideConfig);