import React from 'react'
import arts from '../art.json';

type Props = {}

const Art = (props: Props) => {
  return (
    <>
      <div className='arts'>
        
        {
          arts.map(item=>(
              <img className='art' src={item}/>
          ))
        }
      </div>
    </>
  )
}

export default Art