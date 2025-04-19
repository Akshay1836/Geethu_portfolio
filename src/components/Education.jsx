import React from "react";
import education from "./data/education.json";
import "../styles/Education.css";

const Education = () => {
  return (
    <div className="container education" id="education">
      <h1 className="education-heading">EDUCATION</h1>
      <div className="education-timeline">
        {education.map((item) => (
          <div
            key={item.id}
            className="education-item"
            data-aos="fade-up" 
            data-aos-duration="1000"
          >
            <div className="education-header">
              <div className="education-logo">
                <img src={`/assets/${item.logoSrc}`} alt={item.institution} />
              </div>
              <div className="education-title">
                <h3>{item.degree}</h3>
                <div className="education-info">
                  <span className="institution">{item.institution}</span>
                  <span className="location">{item.location}</span>
                </div>
                <span className="year">{item.year}</span>
              </div>
            </div>

            <div className="education-content">
              <p className="education-description">{item.description}</p>

              {item.courses && item.courses.length > 0 && (
                <div className="education-courses">
                  <h4>Key Courses:</h4>
                  <ul>
                    {item.courses.map((course, index) => (
                      <li key={index}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
