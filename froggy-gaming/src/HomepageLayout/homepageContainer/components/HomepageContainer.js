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
      {/* Slider Showcase */}
      <SlickSlider></SlickSlider>
      <div className="homepage">
        {/* Homepage Event */}
        <SectionDivider
          sectionContent={"Chương trình và sự kiện"}
          marginBlock={"1.5rem"}
        ></SectionDivider>
        <HomepageEvent></HomepageEvent>
        {/* Danh mục sản phẩm */}
        <SectionDivider
          sectionContent={"Danh mục sản phẩm"}
          marginBlock={"3.5rem"}
        ></SectionDivider>
        <HomepageCategory></HomepageCategory>
        {/* Sản phẩm nổi bật */}
        <SectionDivider
          sectionContent={"Sản phẩm nổi bật"}
          marginBlock={"5rem"}
        ></SectionDivider>
        <MostBuyProducts></MostBuyProducts>
        <ShowMore></ShowMore>
        {/* Sản phẩm bán chạy */}
        <SectionDivider
          sectionContent={"Sản phẩm bán chạy"}
          marginBlock="1rem"
        ></SectionDivider>
        {/* Tin tức Froggy Gaming */}
        <SectionDivider
          sectionContent={"Froggy Gaming"}
          marginBlock="1rem"
        ></SectionDivider>
        {/* brandSlider */}
        <SectionDivider
          sectionContent={"Các thương hiệu"}
          marginBlock="1rem"
        ></SectionDivider>
        <BrandSlider></BrandSlider>
        {/* homepageFeedback */}
        <SectionDivider
          sectionContent={"Đánh giá từ khách hàng"}
          marginBlock="1rem"
        ></SectionDivider>
      </div>
    </Fragment>
  );
};

export default HomepageContainer;
