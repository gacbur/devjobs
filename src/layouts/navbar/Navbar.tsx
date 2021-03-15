import React from 'react'
import { Nav, NavLink, LogoCnt, NavCnt } from './NavbarElements'

import { VscPinned } from 'react-icons/vsc'

const Navbar = () => {
    return (
        <NavCnt>
            <Nav>
                <LogoCnt>
                    <NavLink to="/">devJobs</NavLink>
                </LogoCnt>
                <ul>
                    <li className="pin"><NavLink to="/pinned"><VscPinned /></NavLink></li>
                    <li><button>toggle light/darktheme</button></li>
                </ul>
            </Nav>
        </NavCnt>
    )
}

export default Navbar
