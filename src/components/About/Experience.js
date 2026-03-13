import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo0 from "../../Assets/Experience/UOL.jpg";
import logoKLE from "../../Assets/Experience/KLE.jpg";
import logoCodilar from "../../Assets/Experience/codilar.jpg";
import logoACC from "../../Assets/Experience/ACC.jpg";

const timelineData = [
  {
    id: 1,
    type: "education",
    date: "2023 – 2024",
    title: "MSc Data Science and AI",
    organization: "University of Liverpool",
    location: "Liverpool, United Kingdom",
    description:
      "Postgraduate study in data science and artificial intelligence, covering machine learning, deep learning, statistical modelling, and real-world AI applications.",
    logo: logo0,
  },
  {
    id: 2,
    type: "work",
    date: "Sep 2022 – Aug 2023",
    title: "Jr Developer",
    organization: "Codilar Technologies",
    description:
      "Built Tableau dashboards for sales and customer insights, automated Python-based data workflows reducing reporting effort by ~40%, and delivered KPI reports in an Agile team environment.",
    logo: logoCodilar,
  },
  {
    id: 3,
    type: "work",
    date: "Jan 2022 – Jun 2022",
    title: "Jr Engineer Intern",
    organization: "ACC LTD",
    description:
      "Analysed production data using SPC methods to optimise manufacturing efficiency, presented process improvement reports to cross-functional teams, and collaborated with senior engineers at India's leading cement and concrete brand.",
    logo: logoACC,
  },
  {
    id: 4,
    type: "parttime",
    date: "Oct 2024 – Dec 2025",
    title: "Host",
    organization: "Liverpool Football Club",
    location: "Liverpool, United Kingdom",
    description:
      "Delivered premium hospitality to guests at Anfield, managing event spaces and ensuring exceptional matchday experiences for a diverse international audience in a fast-paced, high-profile environment.",
  },
  {
    id: 6,
    type: "education",
    date: "2018 – 2022",
    title: "B.E Mechanical Engineering",
    organization: "KLE Technological University",
    location: "Hubli, India",
    description:
      "Undergraduate study in mechanical engineering covering thermodynamics, manufacturing, and design. Developed analytical and problem-solving skills applied to real-world engineering challenges.",
    logo: logoKLE,
  },
];

const filterLabels = {
  education: "Education",
  work: "Work",
  parttime: "Part-Time",
  all: "All",
};

const typeBadgeClass = {
  education: "tl-badge tl-badge--education",
  work: "tl-badge tl-badge--work",
  parttime: "tl-badge tl-badge--parttime",
};

function Experience() {
  const [activeFilter, setActiveFilter] = useState("education");

  const filtered =
    activeFilter === "all"
      ? timelineData
      : timelineData.filter((item) => item.type === activeFilter);

  return (
    <Container>
      <h1 className="experience-heading">
        Work <strong className="purple">Experience</strong>
      </h1>

      {/* Filter buttons */}
      <div className="tl-filters">
        {Object.entries(filterLabels).map(([key, label]) => (
          <button
            key={key}
            className={`tl-filter-btn${activeFilter === key ? " active" : ""}`}
            onClick={() => setActiveFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="tl-wrapper">
        {filtered.map((item, index) => (
          <div
            key={item.id}
            className={`tl-item tl-item--${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="tl-dot" />
            <div className="tl-card">
              <div className="tl-card__header">
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={item.organization}
                    className="tl-card__logo"
                  />
                ) : (
                  <div className="tl-card__logo-fallback">
                    {item.organization.charAt(0)}
                  </div>
                )}
                <div className="tl-card__meta">
                  <span className={typeBadgeClass[item.type]}>
                    {filterLabels[item.type]}
                  </span>
                  <span className="tl-card__date">{item.date}</span>
                </div>
              </div>
              <h3 className="tl-card__title">{item.title}</h3>
              <h5 className="tl-card__org">{item.organization}</h5>
              {item.location && (
                <p className="tl-card__location">{item.location}</p>
              )}
              {item.description && (
                <p className="tl-card__desc">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Experience;
