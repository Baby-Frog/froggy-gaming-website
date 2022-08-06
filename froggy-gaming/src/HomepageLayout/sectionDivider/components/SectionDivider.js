import React from "react";
import "../assets/sectiondivider.css";

const SectionDivider = ({ sectionContent }) => {
  return (
    <div className="section">
      <h3 className="section-content">
        <h3>{sectionContent}</h3>
      </h3>
    </div>
  );
};

export default SectionDivider;
