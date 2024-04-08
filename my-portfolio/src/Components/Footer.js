import React from "react";

function Footer() {
  return (
    <div className="flex flex-col w-fit h-fit z-10 py-12">
      <a
        className="flex w-full h-fit justify-center items-start text-2xl 2xl:text-3xl hover:underline text-lightgrey cursor-pointer"
        href="https://drive.google.com/file/d/1n_19ZaFD22VSPs6MueGnen0gvZ5mGCkJ/view?usp=sharing"
        target="_blank">
        <h3>
          View full resume
        </h3>
        <img src="\Images\up-right-arrow.png" className="w-6" />
      </a>
      <a 
      className="flex w-full h-fit justify-center mt-16 text-grey cursor-pointer"
      href="mailto:rinsharahees6@gmail.com" 
      target="_blank">
        <h4>
          rinsharahees6@gmail.com
        </h4>
      </a>
    </div>
  );
}

export default Footer;
