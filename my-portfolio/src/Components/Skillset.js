import React from "react";

function Skills({ children }) {
  return (
      <div className="flex items-center justify-center rounded-full w-fit text-sm px-4 py-1 my-3 mr-2 border border-blue-neon text-blue-neon font-medium">
        {children}
    </div>
  );
}

export default Skills;
