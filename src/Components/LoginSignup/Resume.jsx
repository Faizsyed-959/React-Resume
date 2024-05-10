import React from 'react';
import './Resume.css'; // Import the CSS file
import myPic from '../Assets/my-pic.jpg'; // Import the profile picture
import cert1 from '../Assets/cert-1.jpg'; // Import certificate PDFs
import cert2 from '../Assets/cert-2.jpg';
import cert3 from '../Assets/cert-3.jpg';
import cert4 from '../Assets/cert-4.jpg';
import cert5 from '../Assets/cert-5.jpg';
import cert6 from '../Assets/cert-6.jpg';
import cert7 from '../Assets/cert-7.jpg';

const Resume = () => {
  return (
    <div className="resume">
      <img className="picture" src={myPic} alt="Pic" />
      <div className="contact-info">
        <h2>Faiz Fareed Syed</h2>
        <p>FaizFS.Data@gmail.com | +971 50-451-1307</p>
      </div>
      <div className="objective">
        <h3>Objective</h3>
        <p>
          An aspiring Computer Science engineer, seeking opportunities to learn
          and excel in the Data Science Field. Looking for a 16-week Internship
          Program in an Esteemed Company.
        </p>
      </div>
      <div className="education">
        <h3>Education</h3>
        <h4>Manipal Academy of Higher Education Dubai, UAE</h4>
        <p>Computer Science & Engineering, B.Tech (Expected October 2024)</p>
        <p>(Presently in my Final year)</p>
        <h4>Sri Chaitanya Hyderabad, India</h4>
        <p>MPC July 2020</p>
      </div>
      <div className="experience">
        <h3>Professional Experience</h3>
        <h4>HiOctane Labs Hyderabad, India</h4>
        <h5>Undergrad Data science Intern (July 2023 - August 2023)</h5>
        <ul>
          <li>
            <strong>Data Import and Cleaning:</strong>
            <ul>
              <li>
                Proficiently utilized Microsoft Excel to import and cleanse
                extensive datasets for analysis.
              </li>
              <li>
                Employed advanced Excel formulas and functions to ensure
                accurate and detailed data preparation.
              </li>
            </ul>
          </li>
          <li>
            <strong>Data Exploration and Visualization:</strong>
            <ul>
              <li>
                Conducted thorough data exploration using Excel, identifying
                patterns and trends crucial for analysis.
              </li>
              <li>
                Created insightful visual representations, including charts and
                graphs, to enhance the team's understanding of complex data.
              </li>
            </ul>
          </li>
          {/* More experience items */}
        </ul>
      </div>
      <div className="projects">
        <h3>Academic and Self development projects (MAHE-Dubai)</h3>
        <ul>
          <li>
            <strong>Customer Segmentation and Analysis using Master Data Management:</strong> Applied Excel in the Master Data Management project for Customer Segmentation. I was required to import, clean data, and utilize sorting, filtering, and PivotTables to uncover patterns, facilitating the creation of targeted customer segments for more informed decision-making.
          </li>
          <li>
            <strong>Robotic arm:</strong> Worked on developing an automated robotic arm using python, to move an object from one side to another, within the given range of motion. Similar to Hamilton automation and Lonza automation system.
          </li>
          {/* More project items */}
        </ul>
      </div>
      <div className="skills">
        <h3>Skills & Interests</h3>
        <h4>Hard Skills</h4>
        <ul>
          <li>Microsoft Excel</li>
          <li>Python</li>
          <li>SQL</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Android Studio</li>
          <li>Matlab</li>
          <li>WireShark</li>
          <li>Tensor Flow</li>
        </ul>
        <h4>Soft Skills</h4>
        <ul>
          <li>Collaboration</li>
          <li>Multi-Tasking</li>
          <li>Adaptability</li>
          <li>Communication</li>
          <li>Time Management</li>
        </ul>
        <h4>Languages</h4>
        <ul>
          <li>English</li>
          <li>Hindi</li>
        </ul>
      </div>
      <div className="certificates">
        <h3>Certificates</h3>
        <ul>
          <li><a href={cert1} target="_blank" rel="noopener noreferrer">Certificate 1</a></li>
          <li><a href={cert2} target="_blank" rel="noopener noreferrer">Certificate 2</a></li>
          <li><a href={cert3} target="_blank" rel="noopener noreferrer">Certificate 3</a></li>
          <li><a href={cert4} target="_blank" rel="noopener noreferrer">Certificate 4</a></li>
          <li><a href={cert5} target="_blank" rel="noopener noreferrer">Certificate 5</a></li>
          <li><a href={cert6} target="_blank" rel="noopener noreferrer">Certificate 6</a></li>
          <li><a href={cert7} target="_blank" rel="noopener noreferrer">Certificate 7</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
