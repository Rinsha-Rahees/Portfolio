import React from 'react'
import './Home.css';
import Header from './Header';
import About from './About';
import Experience from './Experience';
import Works from './Works';
import Contact from './Contact';


function Home() {
  return (
    <div className="Home text-grey bg-blue-dark leading-7 text-lg relative">

      <div className='App-content max-w-screen-xl overflow-y-hidden'>

        <div className='App-column flex flex-col flex-1'>

          <div className='Contents top-8 ml-2 lg:fixed lg:left-10 xl:left-30 2xl:ml-96 '>
            <Header id='header' />
          </div>


          <div className='ml-2 mr-12 mb-8 lg:ml-40'>

            <div className='Contents lg:max-w-3xl lg:ml-80'>
              <About />
              <Experience />

              <Works />



              {/* Potfolio Downloadable pdf  */}

              {/* <Contact id='contact' /> */}

              {/* Footer Contact */}

            </div>

          </div>



        </div>


      </div>
        <div className='scrollUp w-8 fixed bottom-2 right-2 animate-bounce lg:invisible' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>

          <img src='\Images\up-arrow-blue.png' />

        </div>


    </div >
    
  )
}

export default Home