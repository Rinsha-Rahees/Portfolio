import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App w-full h-full bg-blue-dark">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <a className="flex w-full h-fit justify-center items-start mt-12"
        href="https://drive.google.com/file/d/1MrBjCWdm-kKIkiMAUj9uv6rWY6hJkP6p/view?usp=sharing"
        target="_blank">
        <h3 className="text-2xl 2xl:text-3xl hover:underline text-lightgrey">
          View full resume
        </h3>
        <img src="\Images\up-right-arrow.png" className="w-6" />
      </a>
      <a href="mailto:rinsharahees6@gmail.com" target="_blank">
        <h4 className="flex w-full justify-center mt-12 py-5 text-grey">
          @rinsharahees6@gmail.com
        </h4>
      </a>
    </div>
  );
}

export default App;
