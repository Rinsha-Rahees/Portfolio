import React from 'react'
import Nav from './Components/Nav'

function Header() {
  return (
    <header className="App-header mx-16 mt-8">

      <div className="headerTitle flex flex-col flex-1 items-left">

        <h1 className='text-5xl 2xl:text-6xl text-beige-purple font-semibold'>Rinsha Rahees</h1>
        <h2 className='text-2xl mt-4 2xl:text-3xl text-beige-purple2'>Front End</h2>
        <p className='text-beige-purple2 mt-4 max-w-xs 2xl:text-2xl'>Iam web developer typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>

        <div className="headerMenu mt-2 flex flex-row flex-1 items-left md:flex md:flex-col md:flex-1 2xl:text-2xl">

          <Nav href='#about'>-About</Nav>
          <Nav href='#experience'>-Experience</Nav>
          <Nav href='#works'>-Projects</Nav>
          
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