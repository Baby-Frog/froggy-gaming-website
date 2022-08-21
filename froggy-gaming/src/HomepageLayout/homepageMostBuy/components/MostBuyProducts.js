import React from "react";
import { MostBuyData } from "./MostBuyData";
import "../assets/relevance.css";
import { Fragment } from "react";

const MostBuyProducts = () => {
  console.log(MostBuyData);
  return (
    <div
      className="relevance"
      data-aos="fade-up"
      data-aos-offset="350"
      data-aos-once="true"
      data-aos-duration="500"
    >
      {MostBuyData.length > 0 &&
        MostBuyData.map((item, index) => (
          <div className="relevance-item" key={item.id}>
            {/* 2 cái bên dưới align dọc với nhau, đều được bọc bởi 1 div và div đó có background skew */}
            <div className="relevance-img">
              <img src={item.img_url} alt="" />
            </div>
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
                <div className="relevance-brand relevance-specification-item">
                  <div className="relevance-specification-icon">
                    <svg
                      width="29"
                      height="29"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.83247 11.0607L11.0523 1.84093C11.4819 1.41131 12.0835 1.20028 12.6873 1.26737L19.6877 2.04519C20.6174 2.14849 21.3513 2.8824 21.4546 3.8121L22.2324 10.8125C22.2995 11.4163 22.0885 12.0179 21.6589 12.4475L12.4391 21.6673C11.658 22.4484 10.3917 22.4484 9.61065 21.6673L1.83247 13.8891C1.05143 13.1081 1.05142 11.8418 1.83247 11.0607Z"
                        stroke="#121219"
                        stroke-width="1.5"
                      />
                      <path
                        d="M17.4493 8.1716C18.0351 7.58582 18.0351 6.63607 17.4493 6.05028C16.8635 5.4645 15.9138 5.4645 15.328 6.05028C14.7422 6.63607 14.7422 7.58582 15.328 8.1716C15.9138 8.75739 16.8635 8.75739 17.4493 8.1716Z"
                        stroke="#121219"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                  <div className="relevance-specification-info">
                    <span className="relevance-specification-title">
                      Thương hiệu
                    </span>
                    <span className="relevance-specification-text">
                      {item.brand}
                    </span>
                  </div>
                </div>
                <div className="relevance-keycap relevance-specification-item">
                  <div className="relevance-specification-icon">
                    {item.keyboard ? (
                      <svg
                        width="29"
                        height="29"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 9.65685C4 8.83935 4 8.4306 4.15224 8.06306C4.30448 7.69552 4.59351 7.40649 5.17157 6.82843L5.82843 6.17157C6.40649 5.59351 6.69552 5.30448 7.06306 5.15224C7.4306 5 7.83935 5 8.65685 5H15.3431C16.1606 5 16.5694 5 16.9369 5.15224C17.3045 5.30448 17.5935 5.59351 18.1716 6.17157L18.8284 6.82843C19.4065 7.40649 19.6955 7.69552 19.8478 8.06306C20 8.4306 20 8.83935 20 9.65685V16C20 17.8856 20 18.8284 19.4142 19.4142C18.8284 20 17.8856 20 16 20H8C6.11438 20 5.17157 20 4.58579 19.4142C4 18.8284 4 17.8856 4 16V9.65685Z"
                          stroke="#222222"
                          stroke-width="1.5"
                        />
                        <path
                          d="M14.8332 10L9.1665 10C8.9308 10 8.81295 10 8.73973 10.0732C8.6665 10.1464 8.6665 10.2643 8.6665 10.5L8.6665 13.6667C8.6665 14.4315 8.6665 14.8139 8.76541 15.0194C8.98621 15.4782 9.51649 15.6979 9.99705 15.5296C10.2123 15.4542 10.4827 15.1838 11.0235 14.643C11.274 14.3925 11.3992 14.2673 11.5324 14.1969C11.8248 14.0422 12.1748 14.0422 12.4673 14.1969C12.6004 14.2673 12.7257 14.3925 12.9761 14.643C13.517 15.1838 13.7874 15.4542 14.0026 15.5296C14.4832 15.6979 15.0135 15.4782 15.2343 15.0194C15.3332 14.8139 15.3332 14.4315 15.3332 13.6667V10.5C15.3332 10.2643 15.3332 10.1464 15.2599 10.0732C15.1867 10 15.0689 10 14.8332 10Z"
                          stroke="#2A4157"
                          stroke-opacity="0.24"
                          stroke-linecap="round"
                        />
                        <path
                          d="M4 10H20V16C20 17.8856 20 18.8284 19.4142 19.4142C18.8284 20 17.8856 20 16 20H8C6.11438 20 5.17157 20 4.58579 19.4142C4 18.8284 4 17.8856 4 16V10Z"
                          stroke="#222222"
                          stroke-width="1.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="29"
                        height="29"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="6"
                          y="3"
                          width="12"
                          height="16"
                          rx="6"
                          stroke="#33363F"
                          stroke-width="2"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 22V19"
                          stroke="#33363F"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 13H7"
                          stroke="#33363F"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18 13H16"
                          stroke="#33363F"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 9H7"
                          stroke="#33363F"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18 9H16"
                          stroke="#33363F"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="relevance-specification-info">
                    <div className="relevance-specification-title relevance-specification-title--small">
                      {item.keycap_title || item.microphone_title}
                    </div>
                    <div className="relevance-specification-text relevance-specification-text--small">
                      {item.keycap || item.microphone}
                    </div>
                  </div>
                </div>
                <div className="relevance-switch relevance-specification-item">
                  <div className="relevance-specification-icon">
                    {item.keyboard ? (
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 11C3.5 9.10025 3.50106 7.72573 3.64199 6.67754C3.78098 5.64373 4.04772 5.00253 4.52513 4.52513C5.00253 4.04772 5.64373 3.78098 6.67754 3.64199C7.72573 3.50106 9.10025 3.5 11 3.5H13C14.8998 3.5 16.2743 3.50106 17.3225 3.64199C18.3563 3.78098 18.9975 4.04772 19.4749 4.52513C19.9523 5.00253 20.219 5.64373 20.358 6.67754C20.4989 7.72573 20.5 9.10025 20.5 11V13C20.5 14.8998 20.4989 16.2743 20.358 17.3225C20.219 18.3563 19.9523 18.9975 19.4749 19.4749C18.9975 19.9523 18.3563 20.219 17.3225 20.358C16.2743 20.4989 14.8998 20.5 13 20.5H11C9.10025 20.5 7.72573 20.4989 6.67754 20.358C5.64373 20.219 5.00253 19.9523 4.52513 19.4749C4.04772 18.9975 3.78098 18.3563 3.64199 17.3225C3.50106 16.2743 3.5 14.8998 3.5 13V11Z"
                          stroke="#222222"
                        />
                        <path
                          d="M12 8L12 16"
                          stroke="#222222"
                          stroke-linejoin="round"
                          strokeWidth={"3px"}
                        />
                        <path
                          d="M16 12L8 12"
                          stroke="#222222"
                          stroke-linejoin="round"
                          strokeWidth={"3px"}
                        />
                      </svg>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="16"
                          y="12"
                          width="4"
                          height="7"
                          rx="2"
                          stroke="#33363F"
                          stroke-width="2"
                          stroke-linejoin="round"
                        />
                        <rect
                          x="4"
                          y="12"
                          width="4"
                          height="7"
                          rx="2"
                          stroke="#33363F"
                          stroke-width="2"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4 13V16"
                          stroke="#33363F"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20 13V16"
                          stroke="#33363F"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20 13C20 10.6131 19.1571 8.32387 17.6569 6.63604C16.1566 4.94821 14.1217 4 12 4C9.87827 4 7.84344 4.94821 6.34315 6.63604C4.84286 8.32387 4 10.6131 4 13"
                          stroke="#33363F"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="relevance-specification-info">
                    <div className="relevance-specification-title relevance-specification-title--small">
                      {item.switch_title || item.ear_title}
                    </div>
                    <div className="relevance-specification-text relevance-specification-text--small">
                      {item.switch || item.ear_style}
                    </div>
                  </div>
                </div>
                <div className="relevance-layout relevance-specification-item">
                  <div className="relevance-specification-icon">
                    {item.keyboard ? (
                      <i class="fa-solid fa-keyboard"></i>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12L5 4"
                          stroke="#222222"
                          stroke-linecap="round"
                        />
                        <path
                          d="M19 20L19 17"
                          stroke="#222222"
                          stroke-linecap="round"
                        />
                        <path
                          d="M5 20L5 16"
                          stroke="#222222"
                          stroke-linecap="round"
                        />
                        <path
                          d="M19 13L19 4"
                          stroke="#222222"
                          stroke-linecap="round"
                        />
                        <path
                          d="M12 7L12 4"
                          stroke="#222222"
                          stroke-linecap="round"
                        />
                        <path
                          d="M12 20L12 11"
                          stroke="#222222"
                          stroke-linecap="round"
                        />
                        <circle
                          cx="5"
                          cy="14"
                          r="2"
                          stroke="#222222"
                          stroke-linecap="round"
                        />
                        <circle
                          cx="12"
                          cy="9"
                          r="2"
                          stroke="#222222"
                          stroke-linecap="round"
                        />
                        <circle
                          cx="19"
                          cy="15"
                          r="2"
                          stroke="#222222"
                          stroke-linecap="round"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="relevance-specification-info">
                    <div className="relevance-specification-title relevance-specification-title--small">
                      {item.layout_title || item.frequency_title}
                    </div>
                    <div className="relevance-specification-text relevance-specification-text--small">
                      {item.headphone_frequency || item.layout}
                    </div>
                  </div>
                </div>
                <div className="relevance-weight relevance-specification-item">
                  <div className="relevance-specification-icon">
                    <i class="fa-solid fa-weight-hanging"></i>
                  </div>
                  <div className="relevance-specification-info">
                    <div className="relevance-specification-title">
                      Cân nặng
                    </div>
                    <span className="relevance-specification-text">
                      {item.weight}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MostBuyProducts;
