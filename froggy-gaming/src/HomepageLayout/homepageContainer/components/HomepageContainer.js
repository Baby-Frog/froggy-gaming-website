import React from "react";
import HomepageCategory from "../../homepageCategory/components/HomepageCategory";
import HomepageEvent from "../../homepageEvent/components/HomepageEvent";
import MostBuyProducts from "../../homepageMostBuy/components/MostBuyProducts";
import SectionDivider from "../../sectionDivider/components/SectionDivider";
import "../assets/homepagecontainer.css";

const HomepageContainer = () => {
  return (
    <div className="homepage">
      <SectionDivider
        sectionContent={"Chương trình và sự kiện"}
      ></SectionDivider>
      <HomepageEvent></HomepageEvent>
      <SectionDivider sectionContent={"Danh mục sản phẩm"}></SectionDivider>
      <HomepageCategory></HomepageCategory>
      <SectionDivider sectionContent={"Sản phẩm nổi bật"}></SectionDivider>
      <MostBuyProducts></MostBuyProducts>
    </div>
  );
};

export default HomepageContainer;
