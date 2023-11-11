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

        <div className='App-column flex flex-col flex-1 md:relative md:top-8 md:mx-20'>

          <div className='Contents lg:fixed lg:left-1 lg:top-32 xl:fixed xl:left-20 xl:top-32 2xl:fixed 2xl:left-80 2xl:top-32'>
            <Header id='header' /> 
          </div>

          <div className='Contents lg:max-w-2xl lg:ml-96 xl:ml-96 2xl:ml-96'>
            <About/>
            <Experience/>
            <Experience/>
            <Experience/>
            <Experience/>
            <Works/>
            
           
            
            {/* Potfolio Downloadable pdf  */}

            {/* <Contact id='contact' /> */}

            {/* Footer COntact */}

          </div>


        </div>


      </div>


    </div>
  );
}

export default App;
