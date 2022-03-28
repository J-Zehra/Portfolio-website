import React from 'react'
import './nav.css'
import { ImHome } from 'react-icons/im'
import { FaUserAlt } from 'react-icons/fa'
import { FaFolder } from 'react-icons/fa'
import { BsFillChatQuoteFill } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'

export const Nav = () => {
    return (
        <nav>
            <div className="about-icon icon">
                <FaUserAlt/>
            </div>
            <div className="projects-icon icon">
                <FaFolder/>
            </div>
            <div className="home-icon icon">
                <ImHome/>
            </div>
            <div className="testimonials-icon icon">
                <BsFillChatQuoteFill/>
            </div>
            <div className="contact-icon icon">           
                <BsFillTelephoneFill/>
            </div>
        </nav>
    )
}
