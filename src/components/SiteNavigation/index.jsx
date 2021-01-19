import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    width: 100vw;
    height: 20vh;

    display: flex;
    justify-content: center;
    border-bottom: 1px solid grey;
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
        text-decoration: none;
        border-bottom: 2px solid black;
        padding-bottom: .2em;
    }

    & > a:hover {
        border-bottom: 2px solid pink;
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
                <NavLink>
                    <Link to='/blog'>Blog</Link>
                </NavLink>
            </NavList>
        </Nav>
    )
}

export default SiteNavigation;