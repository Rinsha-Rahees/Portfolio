import React from 'react'

function Skills(props) {

    const {children} = props

  return (
    <div className='skills rounded-full border-2 w-fit p-2 my-3 mr-4 bg-beige-purple text-navyblue-100 font-medium'>{children}</div>
  )
}

export default Skills