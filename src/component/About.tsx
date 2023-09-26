import React, { MouseEventHandler, useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Cards from './Cards';
import Brand from './Brand';
import Contact from './Contact';

type Props = {}

const About = (props: Props) => {
  const [pageType, setPageType] = useState<string>('BRAND');
  const [brandClass, setBrandClass] = useState<string>('about-Click');
  const [contactClass, setContactClass] = useState<string>('about-unClick');

  const renderPage = () => {
    if (pageType === 'BRAND') {
      return <Brand />;
    } else if (pageType === 'CONTACT') {
      return <Contact />;
    } else {
      return <></>;
    }
  }

  const onBrandClick = () => {
    setPageType("BRAND");
    setBrandClass("about-Click");
    setContactClass("about-unClick");
  }

  const onContactClick = () => {
    setPageType("CONTACT")
    setContactClass("about-Click");
    setBrandClass("about-unClick");
  }

  return (
    <>
      <div style={{height:"240px", width:"440px"}}>
        <img style={{width:"100%"}}src='./Group 1.png'/>
      </div>
      <div className='row about-Clicks' >
        <button onClick={onBrandClick} className={brandClass}>BRAND</button>
        <button onClick={onContactClick} className={contactClass}>CONTACT</button>
      </div>
      <div>
        {renderPage()}
      </div>

      <Cards/>
    </>

  )
}

export default About