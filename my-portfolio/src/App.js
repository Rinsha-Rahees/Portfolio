import './App.css';
import Header from './Header';
import About from './About';
import Experience from './Experience';
import Works from './Works';
import Contact from './Contact';

function App() {
  return (
    <div className="App text-beige-purple bg-navyblue-100 font-normal">

      <div className='App-content max-w-screen-xl overflow-y-hidden'>

        <div className='App-column flex flex-col flex-1 md:relative md:10'>

          <div className='Contents top-8 lg:fixed lg:left-10 xl:left-30 2xl:ml-96 '>
            <Header id='header'/>
          </div>


          <div className='lg:ml-40'>

            <div className='Contents lg:max-w-3xl lg:ml-80'>
              <About />
              <Experience />
              <Experience />
              <Experience />
              <Experience />
              <Works />



              {/* Potfolio Downloadable pdf  */}

              {/* <Contact id='contact' /> */}

              {/* Footer COntact */}

            </div>

          </div>



        </div>


      </div>


     </div>
  );
}

export default App;
