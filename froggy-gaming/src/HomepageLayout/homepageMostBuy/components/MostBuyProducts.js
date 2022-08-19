import React from "react";
import { MostBuyData } from "./MostBuyData";
import "../assets/relevance.css";
import { Fragment } from "react";

const MostBuyProducts = () => {
  console.log(MostBuyData);
  return (
    <div className="relevance">
      {MostBuyData.length > 0 &&
        MostBuyData.map((item, index) => (
          <div className="relevance-item" key={item.id}>
            {/* 2 cái bên dưới align dọc với nhau, đều được bọc bởi 1 div và div đó có background skew */}
            <div className="relevance-img">
              <img src={item.img_url} alt="" />
            </div>
            {/* Background skew */}
            <div className="relevance-description">
              <div className="relevance-name">{item.product_name}</div>
              <div className="relevance-compatible">
                {/* Hotswap, Bluetooth, Wireless, ... */}
                <div className="relevance-compatible-item">
                  {item.product_compatible.map((item) => (
                    <img src={item} alt="k" />
                  ))}
                </div>
              </div>
              {/* Grid */}
              <div className="relevance-specification">
                <div className="relevance-brand">{item.brand}</div>
                <div className="relevance-keycap">{item.keycap}</div>
                <div className="relevance-switch">{item.switch}</div>
                <div className="relevance-layout">{item.layout}</div>
                <div className="relevance-weight">{item.weight}</div>
                <div className="relevance-feature">{item.feature}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MostBuyProducts;
