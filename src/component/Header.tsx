import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Detail from './Detail';


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
                <img className='logo-img' src='./logo.png'></img>
              </div>
            </Link>
            <div className='row' style={{gap: "10px"}}>
                <img src='./🦆 icon _search glasses.png'></img>
                <img src='./🦆 icon _shopping cart_.png'></img>
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