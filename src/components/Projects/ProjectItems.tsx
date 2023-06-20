import "./Projects.scss";

import * as React from "react";

import { Images } from "../../constants/images";

export interface Techs {
  id: number;
  tech: string;
  logo?: string;
  bgColor?: string;
}

export interface ProjectItems {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  techs: Techs[];
  githubLink: string;
  demoLink: string;
}

export interface IProjectItemsProps {
  anchorContent?: "left" | "right";
  items: ProjectItems;
}

export function ProjectItems({ items }: IProjectItemsProps) {
  const [isSelected, setIsSelected] = React.useState<number | null>(null);

  return (
    <div className="project_items">
      <div className="project_thumbnail">
        <img src={items.thumbnail} alt="" />
      </div>

      <div className="project_content">
        <h4 className="items">{items.title} </h4>

        <p className="items">{items.description}</p>

        <div className="project_techs items">
          {items.techs.map((skill, key) => {
            return (
              <div
                onMouseEnter={() => setIsSelected(skill.id)}
                onMouseLeave={() => setIsSelected(null)}
                key={key}
                className="tech_item"
                style={{
                  background: isSelected === skill.id ? skill.bgColor : "",
                  color: isSelected === skill.id ? "#fff" : "",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <div className="tech_logo">
                  <img src={skill.logo} alt="" />
                </div>

                {skill.tech}
              </div>
            );
          })}
        </div>

        <div className="project_buttons items">
          <a target="_blank" rel="noreferrer noopener" href={items.githubLink}>
            code
            <img src={Images.github} alt="" />
          </a>
          <a target="_blank" rel="noreferrer noopener" href={items.demoLink}>
            live demo
            <img src={Images.share} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
