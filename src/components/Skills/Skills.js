import "./Skills.css";

import javascriptIcon from "../../assets/icons/javascript.png";
import reactIcon from "../../assets/icons/react.png";
import cssIcon from "../../assets/icons/css.png";
import javaIcon from "../../assets/icons/java.png";
import csharpIcon from "../../assets/icons/csharp.png";
import pythonIcon from "../../assets/icons/python.png";
import sqlIcon from "../../assets/icons/sql.png";
import gitIcon from "../../assets/icons/git.png";

const Skills = () => {
  const skills = [
    { name: "JavaScript", img: javascriptIcon },
    { name: "React", img: reactIcon },
    { name: "CSS", img: cssIcon },
    { name: "Java", img: javaIcon },
    { name: "C#", img: csharpIcon },
    { name: "Python", img: pythonIcon },
    { name: "SQL", img: sqlIcon },
    { name: "Git", img: gitIcon },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Minhas Habilidades</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.img} alt={skill.name} className="skill-img" />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
