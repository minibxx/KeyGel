import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Detail from './Detail';
import logo from '../img/logo.png'
import cart from '../img/shopping cart.png'
import glass from '../img/search glasses.png'


type Props = {

}
const Header = (props: Props) => {
  const [hover,setHover] = useState(false);  

  const MouseEnter = () =>{
    setHover(true);
  }
  const MouseLeave = () =>{
    setHover(false)
  }
  return (
    <>
        <header className='row header'>
            <Link to="/">
              <div>
                <img className='logo-img' src={logo}></img>
              </div>
            </Link>
            <div className='row' style={{gap: "10px"}}>
                <img src={glass}></img>
                <img src={cart}></img>
            </div>
        </header>
        <ul className='row nav'>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/event">EVENT</Link></li>
          <li className='nav-keygel'>KEYGEL
            <ul className='column nav-detail'>
              <li><Link to="/color">COLORS</Link></li>
              <li><Link to="/color">BRUSH</Link></li>
              <li><Link to="/color">LAMP</Link></li>
            </ul>
          </li>
          <li><Link to="/art">REVIEW</Link></li>
          <li><Link to="/mypage">MYPAGE</Link></li>        
        </ul>
       
    </>
  )
}

export default Header