import React from "react";
import "./Team.css";

const Team = () => {
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">The Team Behind POT</h2>
            <h4>
              <u>Management</u>
            </h4>
          </div>

          {[
            {
              name: "Yuval Arbel",
              role: "Leader",
              description:
                "Sixth form student at BISM who has years of experience in accounting, management, and entrepreneurship. Passionate about studying Economics and Finance.",
              linkedinUrl: "#",
              imageUrl: "https://via.placeholder.com/150",
            },
            {
              name: "Carlota Pulido",
              role: "Co-Leader",
              description:
                "Social media marketing manager with experience in content creation. About to start her International Business degree at Schiller International University.",
              linkedinUrl: "#",
              imageUrl: "https://via.placeholder.com/150",
            },
            {
              name: "Lucas Zarzycki",
              role: "Co-Leader + Tech Director",
              description:
                "Sixth form student at BISM with experience in programming and a passion for entrepreneurship.",
              linkedinUrl: "#",
              imageUrl: "https://via.placeholder.com/150",
            },
            {
              name: "Lillian Irenijad",
              role: "Co-Leader",
              description:
                "A digital marketing enthusiast with a strong background in public speaking and advertising.",
              linkedinUrl: "#",
              imageUrl: "https://via.placeholder.com/150",
            },
          ].map((member, index) => (
            <div key={index} className="col-sm-6 col-md-3">
              <div className="team-item">
                <img
                  src={member.imageUrl}
                  className="team-img"
                  alt={`Photo of ${member.name}`}
                />
                <h3>{member.name}</h3>
                <div className="team-info">
                  <p>{member.role}</p>
                  <p>{member.description}</p>

                  <ul className="team-icon">
                    <li>
                      <a href={member.linkedinUrl} className="linkedin">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">The Team Behind POT</h2>
            <h4>
              <u>Management</u>
            </h4>
          </div>

          {[
            {
              name: "Iris Arbel",
              role: "Chairman",
              description:
                "Corporate executive with over 20 years experience in strategic consulting, management and entrepreneurship, with a vast experience in business development & investment.",
              linkedinUrl: "#",
              imageUrl: "https://via.placeholder.com/150",
            },
            {
              name: "Fredrik Bage",
              role: "Founder",
              description:
                "Serial entrepreneur with multiple years of experience within corporate finance, banking, e-commerce and tech in general.",
              linkedinUrl: "#",
              imageUrl: "https://via.placeholder.com/150",
            },
            {
              name: "Maria Cepero",
              role: "Legal Director",
              description:
                "20 years of experience in tax, legal, and finance areas, having worked for companies such as Accenture, Symantec, Navas & Cusi Abogados, Uniconta and FIFA subsidiaries.",
              linkedinUrl: "#",
              imageUrl: "https://via.placeholder.com/150",
            },
            {
              name: "Christian Rasmusson",
              role: "Advisor",
              description:
                "Senior executive with years of experience with years of experience in hospitality and real estate management. Swedish born, but raised in Costa del Sol, with profound roots to the local community in Marbella.",
              linkedinUrl: "#",
              imageUrl: "https://via.placeholder.com/150",
            },
          ].map((member, index) => (
            <div key={index} className="col-sm-6 col-md-3">
              <div className="team-item">
                <img
                  src={member.imageUrl}
                  className="team-img"
                  alt={`Photo of ${member.name}`}
                />
                <h3>{member.name}</h3>
                <div className="team-info">
                  <p>{member.role}</p>
                  <p>{member.description}</p>

                  <ul className="team-icon">
                    <li>
                      <a href={member.linkedinUrl} className="linkedin">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="end-team"></div>
    </section>
  );
};

export default Team;
