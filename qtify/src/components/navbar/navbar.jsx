import React from 'react'
import navStyle from "./navbar.module.css"
import Logo from "../../assests/Group 1.png"
import Button from "../button/button"
import Searchbar from '../searchbar/searchbar'
// import SearchFunc from '../searchbar/searchFunc'
const navbar = ({data}) => {
  return (
    <nav className={navStyle.navbar}>
      <div className={navStyle.logoDiv}><img  src={Logo} alt="logo" width={67}/></div>
      <Searchbar text="Search a album of your choice"/>
       <Button text="Give Feedback"/>
    </nav>
  )
}

export default navbar