import "./Projects.scss";

import { ProjectItems } from "./ProjectItems";
import { Section } from "../Section/Section";
import { projects } from "../../constants/clusterWidgets";

export function Projects() {
  return (
    <Section
      sectionName="projects"
      sectionDescribe="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
      id="projects"
    >
      <>
        {projects.map((project, key) => {
          return (
            <ProjectItems
              side={project.id % 2 ? "left" : "right"}
              key={key}
              items={project}
            />
          );
        })}
      </>
    </Section>
  );
}
