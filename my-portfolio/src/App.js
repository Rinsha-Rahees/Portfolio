import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import TitleNavBar from "./Components/TitleNavBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App w-full h-full bg-blue-dark font-merienda tracking-wider">
      <TitleNavBar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <div className="flex w-full justify-center">
      <Footer/>
      </div>
    </div>
  );
}

export default App;
