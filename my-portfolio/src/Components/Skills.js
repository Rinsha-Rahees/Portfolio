import React from 'react'

function Skills({children}) {

  return (
    <div className='skills flex flex-row items-center rounded-xl p-2 my-3 mr-4 bg-blue-greenish text-blue-neon font-medium'>{children}</div>
  )
}

export default Skills