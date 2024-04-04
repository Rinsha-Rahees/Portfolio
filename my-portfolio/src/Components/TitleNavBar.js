import React from "react";

function TitleNavBar() {
  return (
    <div className="flex bg-blue-dark fixed px-7 py-3 top-0 z-10 w-full justify-end">
      <a href="mailto:rinsharahees6@gmail.com" target="_blank">
        <span className="flex items-center rounded-full w-fit text-xl px-4 py-1 border border-blue-neon text-blue-neon font-medium">
          Connect
        </span>
      </a>
    </div>
  );
}

export default TitleNavBar;
