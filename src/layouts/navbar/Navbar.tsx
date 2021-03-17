import React, { FC } from 'react'
import { Nav, NavLink, LogoCnt, NavCnt, ThemeToggler } from './NavbarElements'

import { VscPinned } from 'react-icons/vsc'

type NavbarProps = {
    toggleTheme: (() => void)
}

const Navbar: FC<NavbarProps> = ({ toggleTheme }) => {
    return (
        <NavCnt>
            <Nav>
                <LogoCnt>
                    <NavLink to="/">devJobs</NavLink>
                </LogoCnt>
                <ul>
                    <li className="pin"><NavLink to="/pinned"><VscPinned /></NavLink></li>
                    <li>
                        <ThemeToggler
                            type='button'
                            onClick={() => toggleTheme()}
                        >
                            darkmode
                            </ThemeToggler></li>
                </ul>
            </Nav>
        </NavCnt>
    )
}

export default Navbar
