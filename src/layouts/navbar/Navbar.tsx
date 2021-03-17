import React, { FC } from 'react'
import { Nav, NavLink, LogoCnt, NavCnt, ThemeToggler } from './NavbarElements'

import { VscPinned } from 'react-icons/vsc'

import { FaMoon, FaSun } from 'react-icons/fa'

type NavbarProps = {
    theme: string,
    toggleTheme: (() => void)
}

const Navbar: FC<NavbarProps> = ({ theme, toggleTheme }) => {
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
                            {theme === 'light' ? <FaMoon /> : <FaSun />}
                        </ThemeToggler></li>
                </ul>
            </Nav>
        </NavCnt>
    )
}

export default Navbar
