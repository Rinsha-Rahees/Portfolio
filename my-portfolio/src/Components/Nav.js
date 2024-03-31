import React from "react";

function Nav(props) {
  const { children, href } = props;
  
  return (
    <nav>
      <ul className="NavItems flex items-center mt-5 hover:text-blue-light">
        <li className="flex items-center mr-10 ">
          <hr className="w-8 mr-3 hidden lg:flex" />
          <a 
          href={href} 
          >
            {children}
        </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
