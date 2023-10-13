import React, { useEffect } from 'react'
type Props = {}
const kakao = (window as any).kakao;

const Contact = (props: Props) => {

  useEffect(()=>{// 지도 컴포넌트가 처음 렌더링 될 때 지도를 띄우기 위해 두 번째 인자를 [](빈배열)로 설정
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    
    const options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.3868323, 127.125458),
      level: 3
    };
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    var marker = new kakao.maps.Marker({ 
      // 지도 중심좌표에 마커를 생성합니다 
      position: map.getCenter() 
    }); 
    // 지도에 마커를 표시합니다
    marker.setMap(map);

    var infowindow = new kakao.maps.InfoWindow({
      content: '<div style="width:150px;text-align:center;padding:8px 0 6px 0;color:black; border-style:none">(주)키젤글로벌</div>'
  });
  infowindow.open(map, marker);

  },[])

  return (
    <div className='contacts'>
      <div className='map' id="map"></div>
      <div className='row contact'>
        <div className='column'>
          <div className='contact-bold'>CONTACT</div>
          <div>+82 10 3339 6102</div>
          <div>+82 10 3321 9594</div>
        </div>
        <div className='column'>
          <div className='contact-bold'>OPERATE</div>
          <div>평일 AM 9:30 - PM 17:00</div>
          <div>점심 PM 12:30 - PM 13:30</div>
          <div>토요일 일요일 공휴일 휴무</div>
        </div>
      </div>
    </div>
  )
}

export default Contact