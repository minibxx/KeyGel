import React from 'react'
import brand from '../brand.json';

type Props = {}

const Brand = (props: Props) => {
  return (
    <>
      <div className='brands'>
        {
          brand.map(item=>(
            <div className='row reverse'>
              <img src={item.photo}/>
              <div className='column'>
                <div className='brand-title'>{item.title}</div>
                <div className='brand-detail'>{item.detail}</div>
              </div>
            </div>
          ))
        }
        </div>
    </>
  )
}

export default Brand