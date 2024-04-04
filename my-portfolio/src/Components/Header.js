import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <header
      id="header"
      className="App-header lg:fixed lg:overflow-y-hidden h-full">
      <div className="headerTitle flex flex-col items-left">
        <div>
          <h1 className="text-4xl lg:text-5xl 2xl:text-6xl text-blue-light font-semibold">
            Rinsha Rahees
          </h1>
          <h2 className="text-2xl mt-4 2xl:text-3xl">Front End Developer</h2>
          <p className="mt-4 w-full lg:w-1/3 2xl:text-2xl">
            I love crafting captivating digital experiences with passion and
            precision in every code.
          </p>

          <div className="mt-2 text-sm font-medium flex flex-row w-fit lg:flex-col 2xl:text-2xl">
            <div className="hidden lg:flex">
              <Nav href="#about">ABOUT</Nav>
            </div>
            <Nav href="#works">PROJECT</Nav>
            <Nav href="#skills">SKILLS</Nav>
            <Nav href="#experience">EXPERIENCE</Nav>
          </div>
        </div>

        <ul className="lg:absolute w-1/4 bottom-28  flex items-center justify-between mt-12">
          <li className="w-8 2xl:w-10">
            <a href="mailto:rinsharahees6@gmail.com" target="_blank">
              <img src="/Images/email.png" alt="Email icon"></img>
            </a>
          </li>
          <li className="w-8 2xl:w-10">
            <a href="https://github.com/Rinsha-Rahees" target="_blank">
              <img src="/Images/github.png" alt="Github icon"></img>
            </a>
          </li>
          <li className="w-8 2xl:w-10">
            <a
              href="https://www.linkedin.com/in/rinsha-rahees/"
              target="_blank">
              <img src="/Images/linkedin.png" alt="LinkedIn icon"></img>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
