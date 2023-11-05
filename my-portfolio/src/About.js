import React from 'react'

function About() {
  return (
    <div id="about" className="About-Content flex flex-col items-center mx-36 md:m-4 lg:m-4 md:flex-row">

      <div className="AboutDesc flex-1 p-6">
        <p className='text-white text-5xl mb-4'>RINSHA RAHEES</p>
        <p className='text-white text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
      </div>

      <div className="AboutImg flex-1 md:shrink-0">
        <img src='Images\blackNwhiteFace.jpg' alt='black n white face'
          className='bg-cover bg-center'></img>
      </div>

      {/* Responsive upto Mobile view. By default flex:col ensures it will target mobile devices. From breaking point 'md' and above 
            we'll specify different. */}

    </div>
  )
}

export default About