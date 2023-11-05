import React from 'react'

function Header() {
  return (
    <header className="App-header items-center p-4 text-beige-light bg-beige-dark text-2xl font-medium">

      <div className="headerMenu flex flex-row justify-center items-center">


        <div className="About">
          <button className='aboutBtn'>About</button>
        </div>

        <div className="Portfolio mx-24"> {/* margin-left & margin-right: 6rem; 96px */}
          <span>Works</span>
        </div>
        <div className="Contact mr-24">
          <span>Portfolio</span>
        </div>
        <div className="Contact">
          <span>Contact</span>
        </div>

      </div>

      {/* Responsive till Tablet view.
             MOBILE VIEW - NOT RESPONSIVE : Change to MENU items in mobile view later */}

    </header>

  )
}

export default Header