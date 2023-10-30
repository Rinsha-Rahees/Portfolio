import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Contents'>
       
        <header className="App-header">
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

        </header>


        <div className="About-Content">

            <div className="AboutDesc">
              <p className='text-white text-5xl'>RINSHA RAHEES</p><br/><br/>
              <p className='text-white text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
            </div>
              
            <div className="AboutImg">
              <img src='Images\blackNwhiteFace.jpg' alt='black n white face'
              className='bg-cover bg-center'></img>
            </div>
            

            {/* Responsive till Tablet view.
             MOBILE VIEW - NOT RESPONSIVE : Change to menu items in mobile view later */}
          
          </div>


    </div>
      
    </div>
  );
}

export default App;
