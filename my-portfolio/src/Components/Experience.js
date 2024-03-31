import React from "react";
import Subtitle from "./Subtitle";
import ExperienceData from "./ExperienceData";
import { EXPERIENCE } from "../utils/constants";

function Experience() {
  return (
    <div id="experience">
      <div className="ExpDesc flex flex-col flex-1">
        <div>
          <Subtitle>EXPERIENCE</Subtitle>
        </div>

        {EXPERIENCE.map((exp) => (
          <ExperienceData
            company={exp?.company}
            role={exp?.role}
            desc={exp?.desc}
            startDate={exp?.startDate}
            endDate={exp?.endDate}
            skills={exp?.skills}
          />
        ))}

      </div>
    </div>
  );
}

export default Experience;
