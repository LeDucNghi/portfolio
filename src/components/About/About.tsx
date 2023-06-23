import "./About.scss";

import { Section } from "../Section/Section";
import { skills } from "../../constants/clusterWidgets";
import { useState } from "react";

export function About() {
  const [isSelected, setIsSelected] = useState<number | null>(null);

  return (
    <Section
      sectionName="about me"
      sectionDescribe="Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology"
      id="about"
    >
      <div className="about_content">
        <div className="about_content_main about">
          <h3 className="content_title">Get to know me!</h3>
          <p>
            My name is <b>Le Duc Nghi</b> and I have just graduated from{" "}
            <b>HUTECH University</b> recently with a major in Information
            Technology. During my time at university, I gained a foundation in
            <b>HTML/CSS/SASS</b>, especially <b>ReactJS</b>, and had the
            opportunity to work at <b>Capgemini company as Intern</b>. And I am
            eager to apply my skills and knowledge to real-world challenges and
            to continue learning and growing in my field.{" "}
          </p>

          <p>
            Through many projects, I have experience in designing and
            implementing user interfaces with <b>Figma</b> for web applications.
            In addition to these core skills, I have also worked with <b>MUI</b>{" "}
            for building responsive and accessible user interfaces. I have
            experience with state management using <b>ReduxJS</b> and have used
            tools such as <b>Redux-Toolkit</b> and <b>Redux-Thunk</b> to manage
            complex application states. My focus is on creating intuitive and
            responsive user experiences that meet the needs of the end user.
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
    </Section>
  );
}
