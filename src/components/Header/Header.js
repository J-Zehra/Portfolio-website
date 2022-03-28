import React from 'react'
import './header.css'
import logo from '../../Images/logo.png'
import { CgDarkMode } from 'react-icons/cg'

export const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <img className='logo' src={logo} alt="logo" />
                <h1 className='logo-name'>ZEHRA</h1>
            </div>
            <div className="dark-light-mode">
                <CgDarkMode/>
            </div>
        </header>
    )
}
