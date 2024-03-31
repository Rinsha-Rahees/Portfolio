import React from "react";
import Skills from "./Skills";

function ExperienceData(props) {

  const { company, role, desc, startDate, endDate, skills } = props

  return (
    <div className="flex flex-col lg:flex-row my-5 2xl:text-2xl">
      <div className="flex w-full lg:w-1/4 2xl:w-1/6 mb-2 lg:mr-2 lg:mt-1 w-50">
        <span>{startDate} - {endDate}</span>
      </div>
      <div className="flex-1 lg:ml-5">
        <h3 className="text-xl text-lightgrey mb-2 2xl:text-3xl">
          {role} . {company}
        </h3>
        <p>{desc.map((desc) => (
          <ul className="list-disc">
            <li>{desc}</li>
          </ul>
        ))}</p>

        <div className="flex h-fit">
          {skills.map((skill) => (
            <Skills key={skill}>{skill}</Skills>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceData;
