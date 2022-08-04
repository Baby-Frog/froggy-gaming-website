import React, { useEffect, useState, useRef } from "react";
import lodash from "lodash";
import axios from "axios";
import "../assets/scss/Nav.css";
import Logo from "../assets/images/froggy-gaming-logo.png";

const Nav = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [mobileNav, setMobileNav] = useState(false);
  const handleFetchNews = useRef({});
  handleFetchNews.current = async () => {
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=5`
      );
      setHits(response.data?.hits || []);
    } catch (error) {
      console.log(error);
    }
  };
  const handleMobileNav = () => {
    setMobileNav((mobileNav) => !mobileNav);
    document.body.classList.toggle("nav-open");
  };
  useEffect(() => {
    handleFetchNews.current(query);
  }, [query]);

  return (
    <div className={`header ${mobileNav ? "active" : ""}`}>
      <div className="header-hamburger-toggle">
        <i className="fa-solid fa-bars" onClick={handleMobileNav}></i>
      </div>
      <div className="header-logo">
        <img src={Logo} alt="Logo" className="header-icon" />
        <span className="header-brand">
          <span>Froggy</span>
          <span>Gaming</span>
        </span>
      </div>
      <div className="header-invin-flex">
        <p>hello</p>
      </div>
      <div className={`header-navigation ${mobileNav ? "active" : ""}`}>
        <ul className="header-navigation-list">
          <li className="header-navigation-item mobile">
            <form className="header-navigation-form" autoComplete="off">
              <div className="header-navigation-form-find mobile">
                <input
                  type={"search"}
                  htmlFor="search"
                  className="header-navigation-form-input"
                  placeholder="Nhập vào sản phẩm muốn tìm"
                />
                <ion-icon name="search-outline"></ion-icon>
              </div>
            </form>
          </li>
          <li className="header-navigation-item">Tin tức</li>
          <li className="header-navigation-item">Danh mục</li>
          <li className="header-navigation-item">Bàn phím</li>
          <li className="header-navigation-item">Chuột</li>
          <li className="header-navigation-item">Tai Nghe</li>
          <li className="header-navigation-item">Microphone</li>
          <li className="header-navigation-item">Hỗ trợ</li>
          <li className="header-navigation-item header-navigation-item--divider"></li>
          <li className="header-navigation-item">
            <ion-icon name="search-outline"></ion-icon>
            <form className="header-navigation-form" autoComplete="off">
              <div className="header-navigation-form-find">
                <input
                  type={"search"}
                  htmlFor="search"
                  className="header-navigation-form-input"
                  placeholder="Nhập vào sản phẩm muốn tìm"
                  onChange={lodash.debounce(
                    (e) => setQuery(e.target.value),
                    1000
                  )}
                />
                <ion-icon name="search-outline"></ion-icon>
              </div>
              <div className="header-navigation-form-query">
                {query &&
                  hits.length > 0 &&
                  hits.map((item, index) => (
                    <span key={index}>{item.title}</span>
                  ))}
                {hits.length <= 0 && (
                  <div className="header-navigation-form-notfound">
                    Không có sản phẩm nào
                  </div>
                )}
              </div>
            </form>
          </li>

          <li className="header-navigation-item">
            <div className="header-navigation-user">
              <i className="fa-solid fa-user-gear"></i>
              <span>Đăng nhập/Đăng ký</span>
            </div>
          </li>
          <li className="header-navigation-item">
            <div className="header-navigation-cart">
              <ion-icon name="cart-outline"></ion-icon>
              <span>Giỏ hàng</span>
              <div className="header-navigation-cart-number">1</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="header-close" onClick={handleMobileNav}>
        <i className="fa-solid fa-times"></i>
      </div>
      <div className="header-overlay" onClick={handleMobileNav}></div>
    </div>
  );
};

export default Nav;
