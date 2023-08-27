import React from 'react'

function Spinner() {
  return (
    <div className='flex flex-col gap-y-2 items-center'>
        <div className='spinner'></div>
        <p>Loading...</p>
    </div>
  )
}

export default Spinner
 