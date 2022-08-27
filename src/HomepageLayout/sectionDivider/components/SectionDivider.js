import React from "react";
import "../assets/sectiondivider.css";

const SectionDivider = ({ sectionContent, ...props }) => {
  return (
    <div className="section">
      <div
        className="section-content"
        style={{
          marginBlock: props.marginBlock,
        }}
      >
        <h3>{sectionContent}</h3>
      </div>
    </div>
  );
};

export default SectionDivider;
