import React from 'react';
import './App.scss';
import { BrowserRouter, HashRouter, Route, Routes, Link } from 'react-router-dom';
import About from './component/About';
import Header from './component/Header';
import Event from './component/Event';
import Art from './component/Art';
import Color from './component/Color';
import MyPage from './component/MyPage';
import Footer from './component/Footer';
import Detail from './component/Detail';
import Main from './component/Main';
import Checkout from './component/Checkout';

function App() {
  return (
    <BrowserRouter basename='/KeyGel'>
      <article>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/event" element={<Event/>}></Route>
          <Route path="/art" element={<Art/>}></Route>
          <Route path="/color" element={<Color/>}></Route>
          <Route path="/mypage" element={<MyPage/>}></Route>
          <Route path="/color/:number" element={<Detail/>}></Route>
          <Route path="/check" element={<Checkout/>}></Route>
        </Routes>
        <Footer/>
      </article>
    </BrowserRouter>
  );
}

export default App;
