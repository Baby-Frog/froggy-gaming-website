import React from "react";
import Aos from "aos";
import { CategoryData } from "./CategoryData";
import "../assets/homepagecat.css";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomepageCategory = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="homepage-category">
        {CategoryData.length > 0 &&
          CategoryData.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-offset="200"
              data-aos-once="true"
              className="homepage-category-item"
            >
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
