import React from 'react'
import { AiTwotoneMail } from 'react-icons/ai'
import { FaFacebookMessenger } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'

export const Socials = () => {
    return (
        <>
            <a href="#">
                <AiTwotoneMail/>
            </a>
            <a href="#">
                <FaFacebookMessenger/>
            </a>
            <a href="#">
                <AiFillGithub/>
            </a>
        </>
    )
}
