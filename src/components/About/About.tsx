import "./About.scss";

import { HeadingSection } from "../HeadingSection/HeadingSection";
import { skills } from "../../constants/clusterWidgets";
import { useState } from "react";

export function About() {
  const [isSelected, setIsSelected] = useState<number | null>(null);

  return (
    <div className="about_container">
      <HeadingSection
        sectionName="about me"
        sectionDescribe="Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology"
      />

      <div className="about_content">
        <div className="about_content_main about">
          <h3 className="content_title">Get to know me!</h3>
          <p>
            I'm a <b>Frontend Web Developer</b> building the Front-end of
            Websites and Web Applications that leads to the success of the
            overall product. Check out some of my work in the Projects section.
          </p>

          <p>
            I also like sharing content related to the stuff that I have learned
            over the years in Web Development so it can help other people of the
            Dev Community. Feel free to Connect or Follow me on my Linkedin
            where I post useful content related to Web Development and
            Programming
          </p>

          <p>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>

        <div className="about_skills about">
          <h3 className="content_title">My Skills</h3>

          <div className="skill_container">
            {skills.map((skill, key) => {
              return (
                <div
                  onMouseEnter={() => setIsSelected(skill.id)}
                  onMouseLeave={() => setIsSelected(null)}
                  key={key}
                  className="skill_item"
                  style={{
                    background: isSelected === skill.id ? skill.bgColor : "",
                    color: isSelected === skill.id ? "#fff" : "",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <div className="skill_logo">
                    <img src={skill.logo} alt="" />
                  </div>

                  {skill.tech}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
