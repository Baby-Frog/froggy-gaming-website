import React from "react";

const SlickItem = ({ image }) => {
  return (
    <div className="image-item">
      <div className="image">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default SlickItem;
