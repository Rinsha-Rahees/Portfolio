import React from "react";
import Skillset from "./Skillset";

function ExperienceData(props) {

  const { company, role, desc, startDate, endDate, skills } = props

  return (
    <div className="flex flex-col lg:flex-row my-3 py-5 2xl:text-2xl border rounded-md border-blue-600 shadow-md p-2">
      <div className="flex w-full lg:w-1/4 2xl:w-1/6 mb-2 lg:mr-2 lg:mt-1 w-50">
        <span>{startDate} - {endDate}</span>
      </div>
      <div className="flex-1 lg:ml-5">
        <h3 className="text-xl text-lightgrey mb-2 2xl:text-3xl">
          {role} . {company}
        </h3>
        <>{desc.map((desc) => (
          <ul key={desc} className="pl-7 list-disc">
            <li>{desc}</li>
          </ul>
        ))}</>

        <div className="sm:flex">
          {skills.map((skill) => (
            <Skillset key={skill}>{skill}</Skillset>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceData;
