import "./Projects.scss";

import { ProjectItems } from "./ProjectItems";
import { Section } from "../HeadingSection/Section";
import { projects } from "../../constants/clusterWidgets";

export function Projects() {
  return (
    <>
      <Section
        sectionName="projects"
        sectionDescribe="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
      >
        <div className="project_wrapper">
          {projects.map((project, key) => {
            return <ProjectItems key={key} items={project} />;
          })}
        </div>
      </Section>
    </>
  );
}
