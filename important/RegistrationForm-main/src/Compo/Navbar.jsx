import React from 'react'
import "./navbar.css"
import logoo from './complogo.png'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='NavContainer'>
    <div className='LeftLogo'><img src={logoo} /></div>
    <div className='RightNavContainer'>
     <ul className='MenuConatiner'>
     <Link  to="/home" className='NavCommonStyle'><li style={{color:"white"}}>Home</li></Link>
      <Link to="/internsip" className='NavCommonStyle'><li>Internsip</li></Link>
      <Link to="/contactUs" className='NavCommonStyle'><li>ConatctUs</li></Link>
      <Link to="/services" className='NavCommonStyle'><li>Services</li></Link>
      {/* <Link to="/registerbtn"><li><button>Register</button></li></Link> */}
      <li><button className='registerbtn'>Register</button></li>

     </ul>
     
    </div>
    </div>
  )
}

export default Navbar
