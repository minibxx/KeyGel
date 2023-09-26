import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  

  return (
    <>
    <div className='row ft-list'>
        <div>
            <div className='ft-bold'>COMPANY</div>
            <div className='ft-medium'>(주)키젤글로벌</div>
            <div className='ft-bold'>BUSINESS LICENCE</div>
            <div className='ft-medium'>347-87-01215</div>
            <div className='ft-bold'>FAX</div>
            <div className='ft-medium'>+82 31 716 7550</div>
        </div>
        <div>
            <div className='ft-bold'>BANK INFO</div>
            <div className='ft-medium'>신한은행 140-012-420233</div>
            <div className='ft-bold'>CEO / PHONE</div>
            <div className='ft-medium'>이경은 / +82 10 3339 6102</div>
            <div className='ft-bold'>EMAIL</div>
            <div className='ft-medium'>keygelglobal@naver.com</div>
        </div>
    </div>
    <div className='row header'>
        <img className='logo-img' src='./logo.png'></img>
        <div className='row' style={{gap: "10px"}}>
            <img style={{width:"30px"}} src='./🦆 icon _instagram_.png'></img>
            <img style={{width:"30px"}} src='./🦆 icon _youtube_.png'></img>
        </div>
    </div>
    <div style={{fontSize:"13px", marginBottom:"50px"}}>경기도 성남시 분당구 서현로 210번길 2, 205, 206호(서현동, 성지하이텔) </div>
    </>
  )
}

export default Footer