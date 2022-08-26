import React from 'react';

import "./CategoryList.css"
import Acer from "../../asset/img/laptop-acer.png";
import Dell from "../../asset/img/laptop-dell.png";
import Gaming from "../../asset/img/laptop-dell-alien.png";
import Macbook from "../../asset/img/macbook.png";
import Gigabyte from "../../asset/img/laptop-gigibyte.png";
import Msi from "../../asset/img/laptop-ms.png";

const CategoryList = () => {
    return (
        <div>
            <div className="cat-content">
                <a href="https://www.google.com" className="cat-items">
                    <span className="cat-text">Laptop Acer</span>
                    <img src={Acer} alt="" className="cat-image" />
                </a>
                <a href="https://www.google.com" className="cat-items">
                    <span className="cat-text">Laptop Msi</span>
                    <img src={Msi} alt="" className="cat-image" />
                </a>
                <a href="https://www.google.com" className="cat-items">
                    <span className="cat-text">Laptop Dell</span>
                    <img src={Dell} alt="" className="cat-image" />
                </a>
                <a href="https://www.google.com" className="cat-items">
                    <span className="cat-text">Laptop Gaming</span>
                    <img src={Gaming} alt="" className="cat-image" />
                </a>
                <a href="https://www.google.com" className="cat-items">
                    <span className="cat-text">Laptop Macbook</span>
                    <img src={Macbook} alt="" className="cat-image" />
                </a>
                <a href="https://www.google.com" className="cat-items">
                    <span className="cat-text">Laptop Gigabyte</span>
                    <img src={Gigabyte} alt="" className="cat-image" />
                </a>
            </div>
        </div>
    );
};

export default CategoryList;