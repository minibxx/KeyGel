import React from 'react'
import color from '../color.json'
import { Link } from 'react-router-dom'

type Props = {}

const Color = (props: Props) => {
  return (
    <>
      <div className='row colors'>
        {
          color.map((item)=>(
            <div className='color'>
              <img className='colorPhoto' src={item.photo}/>
              <Link to={`/color/${item.number}`}><div>{item.number}</div></Link>
              
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Color