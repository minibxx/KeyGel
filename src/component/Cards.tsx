import React from 'react'

type Props = {}

const Cards = (props: Props) => {
  return (
    <>
        <div className='row cards'>    
            <div className='column card'>
                <img className='card-img' src='./Vector.png'/>
                <div>Welcome KIT</div>
                <div>신규 회원가입시 <br/> 월컴쿠폰 키트 증정</div>
            </div>
            <div className='column card'>
                <img className='card-img' src='./🦆 icon _camera_.png'/>
                <div>REVIEW</div>
                <div>포토리뷰 작성시 <br/> 적립금 2배 적립</div>
            </div>
            <div className='column card'>
                <img className='card-img' src='./🦆 icon _heart_.png'/>
                <div>EVENT</div>
                <div>이달에만 진행하는 <br/> 특별이벤트</div>
            </div>
        </div>
    </>
  )
}

export default Cards