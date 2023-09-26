import React from 'react'
import Cards from './Cards';
import event from '../event.json';

type Props = {}

const Event = (props: Props) => {
  return (
    <>
      <div>
        <img className='event-thumb' src='./event-thumb.jpg'/>
      </div>
      <div className='margin'>
      <div className='promotion'>PROMOTION</div>
        <div className='events'>
          {
            event.map((i)=>(
              <div>
                <div className='event-relative'>
                  <img className='event-img' src={i.image}></img>
                  {
                    i.isTwoPlusOne && <img className='twoplus' src='./Group 17.png'></img>
                  }
                </div>
                <div className='event-title'>{i.name}</div>
              </div>
            ))
          }
        </div>
      </div>
      <Cards/>
    </>
  )
}

export default Event