import React, { forwardRef } from "react";
import "./Offer.css";
// import serviceIcon1 from "../assets/service1.svg";
// import serviceIcon2 from "../assets/service2.svg";
// import serviceIcon3 from "../assets/service3.svg";

const Offer = () => {
  return (
    <section className="offer-section" id="offer-section">
      <div className="offer-header">
        <h2>What We Offer</h2>
        <p>
          Explore the wide range of services and opportunities tailored for you.
        </p>
      </div>

      <div className="offer-grid">
        {/* Card 1 */}
        <div className="offer-card">
          <img
            src="https://via.placeholder.com/150"
            alt="Internships"
            className="offer-icon"
          />
          <h3>Internships</h3>
          <p>
            Hands-on experience in your desired field with top-tier companies.
          </p>
        </div>

        {/* Card 2 */}
        <div className="offer-card">
          <img
            src="https://via.placeholder.com/150"
            alt="Mentorship"
            className="offer-icon"
          />
          <h3>Courses</h3>
          <p>
            Free access to "The Startup Tribe", an online learning platform with
            various courses targeting entrepreneurs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="offer-card">
          <img
            src="https://via.placeholder.com/150"
            alt="Career Counseling"
            className="offer-icon"
          />
          <h3>Events</h3>
          <p>
            Unique networking opportunities, meeting different entrepreneurs and
            companies on the Costa del Sol.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
