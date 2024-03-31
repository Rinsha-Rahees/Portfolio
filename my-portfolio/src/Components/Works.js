import React from "react";
import Subtitle from "./Subtitle";
import WorkDesc from "./WorkDesc";
import { PROJECTS } from "../utils/constants";

function Works() {
  return (
    <div id="works" className="my-24">
      <div className="WorkDesc flex flex-col flex-1">
        <Subtitle>PROJECTS</Subtitle>
        {PROJECTS.map((project) => <WorkDesc name={project?.name} desc={project?.desc} skills={project?.skills} img={project?.screenshotUrl} git={project?.github} livelink={project?.liveLink}/>)}
      </div>
    </div>
  );
}

export default Works;
