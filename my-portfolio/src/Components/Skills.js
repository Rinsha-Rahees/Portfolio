import React from "react";
import Subtitle from "./Subtitle";
import { TOOLS } from "../utils/constants";
import SkillDataMap from "./SkillDataMap";

function Skills() {
  return (
    <div id="skills">
      <div className="WorkDesc flex flex-col flex-1 my-8">
        <Subtitle>SKILLS</Subtitle>

        <div className="grid grid-cols-1 w-2/3 self-center sm:w-full sm:self-start sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 mt-4 text-blue-light font-medium">
        {TOOLS.map((tool) => (
            <SkillDataMap key={tool?.name} name={tool?.name} icon={tool?.src} />
        ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
