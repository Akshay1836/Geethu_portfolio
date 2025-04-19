// About.jsx
import React from "react";
import '../styles/About.css';

const About = () => {
  return (
    <div id="about" className="container about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text" data-aos="fade-left" data-aos-delay="300">
          <p>
            Hey! I'm Geethu P Uday, Results-driven Data Engineer with 3+ years of experience in data integration, ETL workflows, and data pipeline development. Proficient in Python, SQL, and big data technologies such as PySpark and Hadoop.
          </p>
          <p>
            
          Demonstrated expertise in automating data ingestion, building scalable data workflows, and ensuring data integrity to support analytics and decision-making. Completed a Master’s in Data Science and Statistical Learning, with hands-on experience in machine learning, predictive modeling, and big data processing. Seeking to leverage strong technical skills to contribute to data-driven engineering solutions in a dynamic environment.
          </p>
        
          
          <div className="hobbies-section">
            <h3 className="hobbies-title">Hobbies & Interests</h3>
            <div className="hobbies-grid">
            
            
              <div className="hobby-item">
                <div className="hobby-icon">💻</div>
                <div className="hobby-name">Coding</div>
              </div>
              <div className="hobby-item">
                <div className="hobby-icon">📚</div>
                <div className="hobby-name">Reading</div>
              </div>
              <div className="hobby-item">
                <div className="hobby-icon">🌐</div>
                <div className="hobby-name">Web Development</div>
              </div>
            
            </div>
          </div>
          
          <div className="about-details">
            <div className="detail-item">
              <span className="detail-label">Name:</span>
              <span className="detail-value">Geethu P Uday</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">geethuudayanan@gmail.com</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Location:</span>
              <span className="detail-value"> Limerick, IE</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Availability:</span>
              <span className="detail-value">Full-time  / Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;