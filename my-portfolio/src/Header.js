import './Header.css';

import React from 'react'

function Header() {
  return (
    <div className='headerContainer'>

        {/* <header className="App-header"> */}

        
          <div className="headerMenu">
            <div className="About">
              <p className='text-xl font-medium text-white'>About</p>
            </div>
            <div className="Portfolio">
              <p className='text-xl font-medium text-white'>Portfolio</p>
            </div>
            <div className="Contact">
              <p className='text-xl font-medium text-white'>Contact</p>
            </div>


            {/* Responsive till Tablet view.
             MOBILE VIEW - NOT RESPONSIVE : Change to menu items in mobile view later */}
            
          </div>

        {/* </header> */}
        
    </div>
  )
}

export default Header