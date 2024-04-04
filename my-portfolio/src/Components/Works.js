import React from "react";
import Subtitle from "./Subtitle";
import WorkDesc from "./WorkDesc";
import { PROJECTS } from "../utils/constants";

function Works() {
  return (
    <div id="works">
      <div className="WorkDesc flex flex-col flex-1 mt-6 z-10">
        <Subtitle>PROJECTS</Subtitle>
        {PROJECTS.map((project) => <WorkDesc key={project?.name} name={project?.name} desc={project?.desc} skills={project?.skills} img={project?.screenshotUrl} livelink={project?.liveLink}/>)}
      </div>
      
    </div>
  );
}

export default Works;
