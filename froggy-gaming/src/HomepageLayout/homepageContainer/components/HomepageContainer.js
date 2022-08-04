import React from "react";
import HomepageCategory from "../../homepageCategory/components/HomepageCategory";
import SectionDivider from "../../sectionDivider/components/SectionDivider";
import "../assets/homepagecontainer.css";

const HomepageContainer = (props) => {
  return (
    <div className="homepage">
      <SectionDivider>{props.sectionContent}</SectionDivider>
      <HomepageCategory></HomepageCategory>
    </div>
  );
};

export default HomepageContainer;
