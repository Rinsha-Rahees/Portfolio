import React from "react";
import Skillset from "./Skillset";

function WorkDesc(props) {
  const { name, desc, skills, img, livelink } = props;

  return (
    <a
      className="flex flex-col-reverse lg:flex-row my-3 py-5 2xl:text-2xl hover:bg-blue-greenish border rounded-md border-blue-600 shadow-md p-2"
      href={livelink}
      target="_blank">
      <div className="flex w-full lg:w-1/4 2xl:w-1/6  h-fit my-6 lg:mr-2 lg:mt-2 w-50">
        <img src={img} className="w-full rounded-md" />
      </div>
      <div className="flex-1 lg:ml-5">
        <div className="flex items-start justify-start">
          <h3 className="text-xl mb-2 text-lightgrey 2xl:text-3xl">{name}</h3>
          <img src="\Images\up-right-arrow.png" className="w-5" />
        </div>

        <p>{desc}</p>
        <div className="sm:flex">
          {skills.map((skill) => (
            <Skillset key={skill}>{skill}</Skillset>
          ))}
        </div>
      </div>
    </a>
  );
}

export default WorkDesc;
