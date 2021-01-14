import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    width: 100vw;
    height: 20vh;

    display: flex;
    justify-content: center;
    background-color: gray;
`;

const NavList = styled.ul`
    list-style: none;
    background-color: transparent;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const NavLink = styled.li`
    padding: 1em;

    & > a {
        color: black;
        transition: .2s;
    }

    & > a:hover {
        color: green;
    }
`;


function SiteNavigation() {
    return(

        <Nav>
            <NavList>
                <NavLink>
                    <Link to='/'>Home</Link>
                </NavLink>
                <NavLink>
                    <Link to='/about'>About</Link>
                </NavLink>
                <NavLink>
                    <Link to='/contact'>Contact</Link>
                </NavLink>
            </NavList>
        </Nav>
    )
}

export default SiteNavigation;