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
        marginBlock={"1.5rem"}
      ></SectionDivider>
      <HomepageEvent></HomepageEvent>
      <SectionDivider
        sectionContent={"Danh mục sản phẩm"}
        marginBlock={"3.5rem"}
      ></SectionDivider>
      <HomepageCategory></HomepageCategory>
      <SectionDivider
        sectionContent={"Sản phẩm nổi bật"}
        marginBlock={"5rem"}
      ></SectionDivider>
      <MostBuyProducts></MostBuyProducts>
    </div>
  );
};

export default HomepageContainer;
