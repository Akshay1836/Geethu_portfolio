import React from "react";
import experience from "./data/experience.json";
import '../styles/Experience.css';

const Experience = () => {
  return (
    <div className="container ex" id="experience">
      <h1>EXPERIENCE</h1>
      {experience.map((data) => (
        <div
          key={data.id}
          className="ex-items text-center my-5"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="left">
            <img src={`/assets/${data.imageSrc}`} alt={data.role} />
          </div>
          <div className="right">
            <h2>{data.role}</h2>
            <h4>
              <span className="date">{data.startDate} - {data.endDate}</span>{" "}
              <span className="location">{data.location}</span>
            </h4>
            {data.experiences.map((exp, index) => (
              <h5 key={index}>{exp}</h5>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
