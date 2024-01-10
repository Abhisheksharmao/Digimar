import React from 'react'
import './css/nav.css'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <div>
      <div className="navbar">
        <div className="logo"><h1>logo</h1></div>
        <input type="search" name="" id="searchbtn" placeholder='Search.....'  />
        <div className="oth">
            <h3 className='tabs'><Link to="/" style={{color: "white" , textDecoration: "none"}} >Home</Link></h3>
            <h3 className='tabs' ><Link to="/Newblog" style={{color: "white" , textDecoration: "none"}}>New Blog</Link></h3>
      </div>

      </div>


    </div>
  )
}
