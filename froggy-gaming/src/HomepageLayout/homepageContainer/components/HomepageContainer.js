import React from "react";
import { Fragment } from "react";
import ShowMore from "../../../ShowMore/ShowMore";
import BrandSlider from "../../brandSlider/BrandSlider";
import HomepageCategory from "../../homepageCategory/components/HomepageCategory";
import HomepageEvent from "../../homepageEvent/components/HomepageEvent";
import MostBuyProducts from "../../homepageMostBuy/components/MostBuyProducts";
import SlickSlider from "../../homepageSlider/components/SlickSlider";
import SectionDivider from "../../sectionDivider/components/SectionDivider";
import "../assets/homepagecontainer.css";

const HomepageContainer = () => {
  return (
    <Fragment>
      <SlickSlider></SlickSlider>
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
        <ShowMore></ShowMore>
        <SectionDivider
          sectionContent={"Các thương hiệu"}
          marginBlock="1rem"
        ></SectionDivider>
        <BrandSlider></BrandSlider>
      </div>
    </Fragment>
  );
};

export default HomepageContainer;
