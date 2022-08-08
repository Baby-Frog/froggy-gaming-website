import React from "react";
import "../assets/sectiondivider.css";

const SectionDivider = ({ sectionContent }) => {
  return (
    <div className="section">
      <div className="section-content">
        <h3>{sectionContent}</h3>
      </div>
    </div>
  );
};

export default SectionDivider;
