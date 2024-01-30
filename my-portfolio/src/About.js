import React from 'react'
import Subtitle from './Components/Subtitle'

function About() {
  return (
    <div id="about" className="About-Content">

      <div className="AboutDesc flex flex-col flex-1">

        <Subtitle>ABOUT</Subtitle>

        <p className='2xl:text-2xl mt-6 lg:my-2'>
          I'm a self taught <span className='font-bold text-blue-light'>React Developer </span>who loves to dive deep into and master the technology. I was able to get a hold on <span className='font-bold text-blue-light'>Javascript</span><br/><br/>
          All the experiences like, <span className='font-bold text-blue-light'>mentoring, client interactions, demo presentaions</span> have enhanced my interpersonal communications and relationships.<br/>
          I'm learning and improving day by day, in all walks of life, including my personal, professional, and social endeavors.

        </p>
      </div>

      {/* <hr className='mt-6'/> */}


    </div>
  )
}

export default About