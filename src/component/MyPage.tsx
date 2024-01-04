import React from 'react'
import { useEffect, useState } from 'react'

type Props = {}

const MyPage = (props: Props) => {
  const [setting, setSetting] = useState('');

  const settingClcick = () => {
    setSetting()
  }
  return (
    <>
      <div className='profile content'>
        <div className='P-title'>My Profile</div>
        <div><img src='./profile.png' /></div>
        <div>키젤을 방문해주셔서 감사합니다. <br/>회원 등급은 [키린이]입니다.</div>
      </div>

      <div className='content'>
        <div className='P-title'>My Account</div>
        <div className='row accounts'>
          <div className='row '>
            <div><img src='./🦆 icon _Dollar Sign_-1.png' /></div>
            <div>포인트</div>
          </div>
          <div className='row '>
            <div><img src='./🦆 icon _Reward_-1.png' /></div>
            <div>리워드</div>
          </div>
          <div className='row '>
            <div><img src='./🦆 icon _Coins_.png' /></div>
            <div>적립금</div>
          </div>
        </div>
      </div>

      <div>내 정보 관리</div>
      <div className='row '>
        <div><img src='./🦆 icon _setting 2_-2.png' /></div>
        <div><img src='./🦆 icon _setting 2_-2.png' /></div>
        <div onClick={settingClcick}><img src='./🦆 icon _setting 2_-2.png' /></div>
      </div>
    </>
  )
}

export default MyPage