import React from 'react'
import Nav from './Nav'

function Header() {
  return (
    <header id='header' className="App-header md:fixed md:overflow-y-hidden">

      <div className="headerTitle flex flex-col items-left">

        <h1 className='text-4xl lg:text-5xl 2xl:text-6xl text-blue-light font-semibold'>Rinsha Rahees</h1>
        <h2 className='text-2xl mt-4 2xl:text-3xl text-blue-light'>Front End Developer</h2>
        <p className='mt-4 w-full md:w-2/5 lg:w-2/4 2xl:text-2xl'>I love crafting captivating digital experiences with passion and precision in every code.</p>

        <div className="headerMenu mt-2 text-sm font-medium flex flex-row flex-1 items-left lg:flex lg:flex-col lg:flex-1 2xl:text-2xl">

          <Nav href='#about'>ABOUT</Nav>
          <Nav href='#works'>PROJECT</Nav>
          <Nav href='#experience'>EXPERIENCE</Nav>

        </div>

            <ul className='flex flex-row items-center mt-6'>
              <li className='mr-4 w-8 2xl:w-10'><a href="mailto:rinsharahees6@gmail.com" target="_blank"><img src='/Images/email.png' alt='Email icon'></img></a></li>
              <li className='mr-4 w-8 2xl:w-10'><a href="https://github.com/Rinsha-Rahees" target="_blank"><img src='/Images/github.png' alt='Github icon'></img></a></li>
              <li className='w-8 2xl:w-10'><a href="https://www.linkedin.com/in/rinsha-rahees/" target="_blank"><img src='/Images/linkedin.png' alt='LinkedIn icon'></img></a></li>
            </ul>


      </div>

    </header>

  )
}

export default Header