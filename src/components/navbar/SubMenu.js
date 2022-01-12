import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideDrawerLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  list-style: none;
  width:35vh;
  height: 5rem;
  text-decoration: none;
  font-size: 1.5rem;
  &:hover {
    background: #B7B7A4;
    cursor: pointer;
  }
`;
const SidebarLabel = styled.span`
  margin-left: 0.5rem;
`;

const DropdownLink = styled(Link)`
  background: #112233;
  width:35vh;
  height: 5rem;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 1.2rem;
  &:hover {
    background: #B7B7A4;
    cursor: pointer;
  }
`;

const SubMenu = ({ item, onClick }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);
    
    return (
        <>
            <SideDrawerLink to={item.path}  onClick={item.subNav && showSubnav}>
                <div>
                  {item.icon}
                  <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                  {item.subNav && subnav
                    ? item.iconOpened
                    : item.subNav
                    ? item.iconClosed
                    : null}
                </div>
            </SideDrawerLink>
            {/* {subnav &&
                item.subNav.map((item, index) => {
                return (
            <DropdownLink to={item.path} key={index} onClick={onClick} >
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })} */}
        </>
    )
}
export default SubMenu;