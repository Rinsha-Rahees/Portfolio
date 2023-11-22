import React from 'react'
import Nav from './Components/Nav'

function Header() {
  return (
    <header id='header' className="App-header mx-12 mt-8">

      <div className="headerTitle flex flex-col flex-1 items-left">

        <h1 className='text-5xl 2xl:text-6xl text-blue-light font-semibold'>Rinsha Rahees</h1>
        <h2 className='text-2xl mt-4 2xl:text-3xl text-blue-light'>Front End</h2>
        <p className='mt-4 max-w-xs 2xl:text-2xl'>I build exceptional and accessible digital experiences for the web.</p>

        <div className="headerMenu mt-2 text-sm text-grey font-medium flex flex-row flex-1 items-left lg:flex lg:flex-col lg:flex-1 2xl:text-2xl">

          <Nav href='#about'>ABOUT</Nav>
          <Nav href='#experience'>EXPERIENCE</Nav>
          <Nav href='#works'>PROJECT</Nav>

        </div>

        <div className="headerSocialMedia">
          <nav>
            <ul className='flex flex-row items-center mt-12'>
              <li className='p-2 w-10 lg:w-12'><a href='#experience'><img src='\Images\mailgrey.png' alt='Email icon'></img></a></li>
              <li className='p-2 w-10 lg:w-12'><a href='#experience'><img src='\Images\linkedingrey.png' alt='Email icon'></img></a></li>
              <li className='p-2 w-10 lg:w-12'><a href='#experience'><img src='\Images\githubgrey.png' alt='Email icon'></img></a></li>
            </ul>
          </nav>

        </div>

      </div>

    </header>

  )
}

export default Header