import React from "react";
import { MostBuyData } from "./MostBuyData";

const MostBuyProducts = () => {
  return (
    <div className="relevance">
      {MostBuyData.length > 0 &&
        MostBuyData.map((item, index) => (
          <div className="relevance-item" key={item.id}>
            <div className="relevance-img">
              <img src={item.img_url} alt="" />
            </div>
            <div className="relevance-description">
              <div className="relevance-name">{item.product_name}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MostBuyProducts;
