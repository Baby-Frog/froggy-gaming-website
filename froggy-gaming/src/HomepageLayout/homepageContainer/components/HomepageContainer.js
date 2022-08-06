import React from "react";
import HomepageCategory from "../../homepageCategory/components/HomepageCategory";
import SectionDivider from "../../sectionDivider/components/SectionDivider";
import "../assets/homepagecontainer.css";

const HomepageContainer = () => {
  return (
    <div className="homepage">
      <SectionDivider sectionContent={"Danh mục sản phẩm"}></SectionDivider>
      <HomepageCategory></HomepageCategory>
    </div>
  );
};

export default HomepageContainer;
