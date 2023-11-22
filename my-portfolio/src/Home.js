import React from 'react'
import './Home.css';
import Header from './Header';
import About from './About';
import Experience from './Experience';
import Works from './Works';
import Contact from './Contact';


function Home() {
  return (
    <div className="Home text-grey bg-blue-dark leading-7 text-lg">

      <div className='App-content max-w-screen-xl overflow-y-hidden'>

        <div className='App-column flex flex-col flex-1 ml-3'>

          <div className='Contents top-8 lg:fixed lg:left-10 xl:left-30 2xl:ml-96 '>
            <Header id='header' />
          </div>


          <div className='lg:ml-40'>

            <div className='Contents mx-10 mb-10 lg:max-w-3xl lg:ml-80'>
              <About />
              <Experience />

              <Works />

              <div className='relative'>

              </div>

              <div className='scrollUp sticky w-12 flex float-right' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>

                <img src='\Images\up-arrow-blue.png' />

              </div>


              {/* Potfolio Downloadable pdf  */}

              {/* <Contact id='contact' /> */}

              {/* Footer Contact */}

            </div>

          </div>



        </div>


      </div>


    </div>
  )
}

export default Home