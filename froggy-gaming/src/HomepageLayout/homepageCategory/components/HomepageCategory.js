import React from "react";
import { CategoryData } from "./CategoryData";
import "../assets/homepagecat.css";

const HomepageCategory = () => {
  return (
    <div>
      <div className="homepage-category">
        {CategoryData.length > 0 &&
          CategoryData.map((item) => (
            <div key={item.id} className="homepage-category-item">
              <span className="homepage-category-name">
                {item.category_name}
              </span>
              <img
                src={item.download_url}
                alt="Product"
                className="homepage-category-img"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomepageCategory;
