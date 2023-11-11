import React from 'react'

function Header() {
  return (
    <header className="App-header mx-16 mt-8">

      <div className="headerTitle flex flex-col flex-1 items-left">

        <h1 className='text-4xl xl:text-5xl text-beige-purple font-semibold'>Rinsha Rahees</h1>
        <h2 className='text-2xl mt-4 xl:text-2xl text-beige-purple2'>Front End</h2>
        <p className='text-beige-purple2 mt-4 max-w-xs'>Iam web developer typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>

        <div className="headerMenu">
          <nav>
            <ul className='flex flex-row flex-1 items-left sm:flex sm:flex-col sm:flex-1'>
              <li className='p-2'><a href='#about'>-About</a></li>
              <li className='p-2'><a href='#experience'>-Experience</a></li>
              <li className='p-2'><a href='#works'>-Projects</a></li>
            </ul>
          </nav>

        </div>

        <div className="headerSocialMedia">
          <nav>
            <ul className='flex flex-row items-center sticky bottom-0'>
              <li className='p-2 w-10'><a href='#experience'><img src='\Images\mail.png' alt='Email icon'></img></a></li>
              <li className='p-2 w-9'><a href='#experience'><img src='\Images\instagram.png' alt='Email icon'></img></a></li>
              <li className='p-2 w-9'><a href='#experience'><img src='\Images\github.png' alt='Email icon'></img></a></li>
            </ul>
          </nav>

        </div>

      </div>

    </header>

  )
}

export default Header