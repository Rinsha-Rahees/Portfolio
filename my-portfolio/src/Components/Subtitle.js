import React from 'react'

function Subtitle({children}) {
  return (
    <h1 className='text-xl text-lightgrey font-semibold mt-8 lg:invisible'>{children}</h1>
  )
}

export default Subtitle