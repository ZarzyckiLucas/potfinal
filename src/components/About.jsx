import React, { forwardRef } from "react";
import "./About.css";
import teamImage from "../assets/team.jpg";
import golf from "../assets/golf.webp";

const About = forwardRef((props, ref) => {
  return (
    <section className="image-container" id="home" ref={ref}>
      <img src={teamImage} alt="team" className="team-image" />
      <div className="overlay-text">
        <h2>Internships Made Easy</h2>
        <p>Find the best internships that fit your career goals.</p>
      </div>
      <div className="about-div" id="aboutus-section" ref={ref}>
        About Us
      </div>
      <div className="aboutus">
        <div className="text-content">
          <h2>Who we are</h2>
          <p>
            We are a student-led initiative dedicated to creating valuable
            internship and networking opportunities for young adults in Marbella
            and beyond. Our mission is to bridge the gap between students and
            local businesses, offering hands-on experience as well as networking
            opportunities. We guide students as they gain hard skills, helping
            them make informed decisions about their future career paths.
          </p>
        </div>
        <div className="image-content">
          <img src={golf} alt="golf" />
        </div>
      </div>
      <div className="aboutus">
        <div className="image-content">
          <img src={golf} alt="golf" />
        </div>
        <div className="text-content">
          <h2>Our Story</h2>
          <p>
            Founded in February 2024 by two students eager for work experience
            before starting university, we quickly discovered a significant gap
            in Marbella's job market—there were no internship opportunities
            despite the demand from the region's 15 international schools.
            Motivated to fill this need, we branched under The Pool and launched
            this initiative to empower students with real-world experience.
          </p>
        </div>
      </div>
      <div className="aboutus">
        <div className="text-content">
          <h2>Our Vision</h2>
          <p>
            We aim to provide students with meaningful work experience before
            they enter university, preparing them to navigate the corporate
            world with confidence. Our goal is to cultivate a thriving
            professional community in Marbella, encouraging graduates to see it
            as an ideal place to launch and grow their careers, and retaining
            the region's talented workforce.
          </p>
        </div>
        <div className="image-content">
          <img src={golf} alt="golf" />
        </div>
      </div>
    </section>
  );
});

export default About;
