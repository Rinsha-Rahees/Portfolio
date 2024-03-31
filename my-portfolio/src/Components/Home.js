import React from "react";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Works from "./Works";

function Home() {
  return (
    <div className="Home flex flex-col md:flex-row md:justify-between text-grey leading-7 text-lg p-8">
      <div className="flex h-fit w-full max-w-md 2xl:max-w-xl">
        <Header id="header" />
      </div>

      <div className="flex flex-col h-full w-full">
          <About />
          <Works />
          <Experience />
      </div>

      <div
        className="scrollUp w-8 fixed bottom-2 right-2 animate-bounce lg:invisible"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img src="\Images\up-arrow-blue.png" />
      </div>
    </div>
  );
}

export default Home;
