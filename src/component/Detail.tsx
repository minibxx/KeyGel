import React,  { useEffect, useState } from 'react'
import color from '../color.json'
import { useParams, Link } from 'react-router-dom';

interface ColorDetail {
  photo: string,
  number: string,
  price: number,
}

export default function Detail() {
  const [detail, setDetail] = useState<ColorDetail | undefined>({
    photo: '',
    number: '',
    price: 0,
  });
  const { number } = useParams();

  useEffect(()=>{
    setDetail(color.find(arr=> arr.number == number));
  },[]);

  return (
    <div className='row detail'>
      <div><img src={detail?.photo}/></div>
      <div>
        <div>[낱개 구매] KEYGEL KOONGEL 키젤 쿤젤 100칼라 중 {detail?.number}</div>
        <div className='row order'>
          <div>{detail?.number}</div>
          <div>{detail?.price}원</div>
        </div>
        <div className='check-bt'>
          <Link to='/check'>주문하기</Link>
        </div>
      </div>
    </div>
  )
}
