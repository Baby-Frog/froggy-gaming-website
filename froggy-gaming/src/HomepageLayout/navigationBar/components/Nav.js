import React, { useEffect, useRef, useReducer } from "react";
import lodash from "lodash";
import axios from "axios";
import "../assets/scss/Nav.css";
import Logo from "../assets/images/froggy-gaming-logo.png";

const initialState = {
  hits: [],
  query: "",
  loading: true,
  mobileNav: false,
};

const gamingProductsReducer = (state, action) => {
  switch (action.type) {
    case "SET_HITS": {
      return { ...state, hits: action.payload };
    }
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }

    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }

    case "SET_MOBILENAV": {
      return { ...state, mobileNav: action.payload };
    }

    default:
      break;
  }
};

const Nav = () => {
  const [state, dispatch] = useReducer(gamingProductsReducer, initialState);
  const handleFetchNews = useRef({});
  handleFetchNews.current = async () => {
    if (state.query.trim().length === 0) {
      dispatch({
        type: "SET_QUERY",
        payload: "",
      });
    }
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${state.query}&hitsPerPage=5`
      );
      dispatch({
        type: "SET_HITS",
        payload: response.data?.hits || [],
      });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleMobileNav = () => {
    dispatch({
      type: "SET_MOBILENAV",
      payload: !state.mobileNav,
    });
    document.body.classList.toggle("nav-open");
  };
  useEffect(() => {
    handleFetchNews.current(state.query);
  }, [state.query]);

  return (
    <div className={`header ${state.mobileNav ? "active" : ""}`}>
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
        <div className="header-hamburger-toggle">
          <i className="fa-solid fa-bars" onClick={handleMobileNav}></i>
        </div>
      </div>
      <div className={`header-navigation ${state.mobileNav ? "active" : ""}`}>
        <ul className="header-navigation-list">
          <li className="header-navigation-item mobile">
            <form className="header-navigation-form" autoComplete="off">
              <div className="header-navigation-form-find mobile">
                <input
                  type={"search"}
                  htmlFor="search"
                  className="header-navigation-form-input"
                  placeholder="Nhập vào sản phẩm muốn tìm"
                  onChange={lodash.debounce(
                    (e) =>
                      dispatch({
                        type: "SET_QUERY",
                        payload: e.target.value,
                      }),
                    1000
                  )}
                />
              </div>
              <div className="header-navigation-form-query">
                {state.query &&
                  state.hits.length > 0 &&
                  state.hits.map((item, index) => (
                    <span key={index}>{item.title}</span>
                  ))}
                {state.hits.length <= 0 && (
                  <div className="header-navigation-form-notfound">
                    Không có sản phẩm nào
                  </div>
                )}
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
                    (e) =>
                      dispatch({
                        type: "SET_QUERY",
                        payload: e.target.value,
                      }),
                    1000
                  )}
                />
                {!state.loading ? (
                  <ion-icon name="search-outline"></ion-icon>
                ) : (
                  <div className="loading-circle"></div>
                )}
              </div>
              <div className="header-navigation-form-query">
                {state.query &&
                  state.hits.length > 0 &&
                  state.hits.map((item, index) => (
                    <span key={index}>{item.title}</span>
                  ))}
                {state.hits.length <= 0 && (
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
