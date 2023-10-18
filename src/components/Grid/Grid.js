import React from 'react'
import Row from './Row';
export default function Grid() {
    const colmns = [1, 2, 3, 4, 5, 6];
  return (
    <div className='m-4'>
        {
            colmns.map((row, index) => <Row key={index} id={index} />)
        }
    </div>
  )
}
