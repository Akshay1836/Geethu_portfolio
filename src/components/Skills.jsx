import React from "react";
import skills from "./data/skills.json";
import '../styles/Skills.css';

const Skills = () => {
  return (
    <div className="container skills" id="skills">
      <h1>SKILLS</h1>
      <div className="items">
        {skills.map((data) => (
          <div
            className="item" 
            key={data.id}
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src={`/assets/${data.imageSrc}`} alt={data.title} />
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
