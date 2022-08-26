import React from "react";
import BrandSlider from "../HomepageLayout/brandSlider/BrandSlider";
import SectionDivider from "../HomepageLayout/sectionDivider/components/SectionDivider";

import "./CategoryContainer.css";
import CategoryList from "./components/CategoryList/CategoryList";
import CategoryQuote from "./components/CategoryQuote/CategoryQuote";

const CategoryContainer = () => {
  return (
    <div className="category-main">
      <div className="cat-list">
        <p>
          <a href="#">
            <i aria-hidden="true" class="fa fa-home">
              {" "}
            </i>
          </a>
        </p>
        <p>{">"}</p>
        <p>
          <a href="#">Trang chủ</a>
        </p>
        <p>{">"}</p>
        <p>
          <a href="#"> Danh mục</a>
        </p>
      </div>
      <CategoryQuote></CategoryQuote>
      {/*  */}
      <SectionDivider sectionContent={"Gaming Gear"}></SectionDivider>
      <CategoryList></CategoryList>
      <SectionDivider sectionContent={"Các thương hiệu"}></SectionDivider>
      <BrandSlider></BrandSlider>
    </div>
  );
};

export default CategoryContainer;
