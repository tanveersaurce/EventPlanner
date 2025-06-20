import React from 'react'
import {Link} from "react-router-dom"
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <>
        <div className = " bg bg-transparent flex justify-center gap-10 p-7 text-2-x1 items-center sticky top-0 rotate-z-2 z-99"></div>
        <link to = {"/Home"}>Home</link>
        <link to = {"/About"}>About</link>
        <link to = {"/Service"}>Our Services</link>
        <link to = {"/"}>
            <img src="{logo}" alt="" className='h-[5rem]' />
        </link>
        <link to = {"/Stories"}>stories</link>
        <link to = {"/Contact"}>contact</link>
        <button>Login to plan your event</button>
    </>
  )
}

export default Navbar