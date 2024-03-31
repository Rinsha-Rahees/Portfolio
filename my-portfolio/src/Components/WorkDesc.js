import React from "react";
import Skills from "./Skills";

function WorkDesc(props) {
  const { name, desc, skills, img, git, livelink } = props;

  console.log(skills);

  return (
    <a href={livelink} target="_blank">
      <div className="flex flex-col-reverse lg:flex-row my-5 2xl:text-2xl hover:bg-blue-greenish rounded-md p-2">
        <div className="flex w-full lg:w-1/4 2xl:w-1/6  h-fit my-6 lg:mr-2 lg:mt-2 w-50">
          <img src={img} className="w-full" />
        </div>
        <div className="flex-1 lg:ml-5">
          <div className="flex items-start justify-start">
            <h3 className="text-xl mb-2 text-lightgrey 2xl:text-3xl">{name}</h3>
            <img src="\Images\up-right-arrow.png" className="w-5" />
          </div>

          <p>{desc}</p>
          <div className="flex">
            {skills.map((skill) => (
              <Skills key={skill}>{skill}</Skills>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

export default WorkDesc;
