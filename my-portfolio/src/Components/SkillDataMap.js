import React from 'react'

function SkillDataMap({name, icon}) {
  return (
    <div className='flex py-5'>
    <h2 className='mr-4'>{name}</h2>
    <img 
    className='w-7'
    src={icon}
    alt='Skill Logo'/>
    </div>
  )
}

export default SkillDataMap