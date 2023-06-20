import "./Projects.scss";

import { HeadingSection } from "../HeadingSection/HeadingSection";
import { ProjectItems } from "./ProjectItems";
import { projects } from "../../constants/clusterWidgets";

export function Projects() {
  return (
    <div className="project_container">
      <HeadingSection
        sectionName="projects"
        sectionDescribe="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
      />

      <div className="project_wrapper">
        {projects.map((project, key) => {
          return <ProjectItems key={key} items={project} />;
        })}
      </div>
    </div>
  );
}
