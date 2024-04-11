import React from "react";

function Nav(props) {
  const { children, href } = props;

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;
    window.scrollTo({
      left: 0,
      top: location,
    });
  };
  
  return (
    <nav>
      <ul className="flex items-center mt-5 w-fit hover:text-blue-light">
        <li className="flex items-center mr-6 sm:mr-16 ">
          <hr className="w-8 mr-3 hidden lg:flex" />
          <a 
          href={href} 
          onClick={handleClick}
          >
            {children}
        </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
