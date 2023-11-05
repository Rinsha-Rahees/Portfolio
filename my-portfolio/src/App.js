import './App.css';
import Header from './Header';
import About from './About';
import Works from './Works';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App() {
  return (
    <div className="App text-navyblue-100 bg-beige-purple2">

      <div id="contents" className='Contents max-w-screen-2xl'>

        <Header id="header" />

        <About id='about' />

        <Works id='works' />

        <Portfolio id='portfolio' />

        {/* Potfolio Downloadable pdf  */}

        <Contact id='contact' />

        {/* Footer COntact */}

      </div>


    </div>
  );
}

export default App;
