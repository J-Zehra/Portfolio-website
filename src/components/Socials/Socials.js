import React from 'react'
import { AiTwotoneMail } from 'react-icons/ai'
import { FaFacebookMessenger } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'

export const Socials = () => {
    return (
        <>
            <a target={'_blank'} href="mailto: jazencode@gmail.com">
                <AiTwotoneMail/>
            </a>
            <a target={'_blank'} href="https://m.me/mojackoooo">
                <FaFacebookMessenger/>
            </a>
            <a target={'_blank'} href="https://github.com/J-Zehra">
                <AiFillGithub/>
            </a>
        </>
    )
}
