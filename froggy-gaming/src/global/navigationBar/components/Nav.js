import React, { useEffect, useRef, useReducer } from "react";
import lodash from "lodash";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import "../styles/Nav.css";
import Logo from "../assets/froggy-gaming-logo.png";
import LoadingSkeleton from "../../../SkeletonLoading/LoadingSkeleton";
import NavCategory from "./NavCategory";
import useScrolled from "../../../hooks/useScrolled";

const initialState = {
  data: [],
  query: "",
  loading: true,
  mobileNav: false,
};

const gamingProductsReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return { ...state, data: action.payload };
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
  const { height, isScrolled, setIsScrolled } = useScrolled(300);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.innerWidth > 1024 && window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, [height, setIsScrolled]);
  const handleFetchData = useRef({});
  const isMounted = useRef(true);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  handleFetchData.current = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    if (state.query.trim().length === 0) {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    }
    try {
      const response = await axios.get(
        // `https://api.themoviedb.org/3/search/movie?api_key=3ce49afbabd14f11e4b7097cf42c2ab9&query=${state.query}`
        `http://localhost:8386/api/v1/produ/search/query=${state.query}`
      );
      console.log(response);
      if (isMounted) {
        dispatch({
          type: "SET_DATA",
          payload: response.data?.results || [],
        });
        setTimeout(() => {
          dispatch({
            type: "SET_LOADING",
            payload: false,
          });
        }, 1500);
      }
    } catch (error) {
      return error;
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
    handleFetchData.current(state.query);
  }, [state.query]);

  return (
    <div
      className={`header ${state.mobileNav && "active"} ${
        isScrolled && "header--fixed"
      }`}
    >
      <div className="header-hamburger-toggle">
        <i className="fa-solid fa-bars" onClick={handleMobileNav}></i>
      </div>
      <Link to={"/"} className="header-logo">
        <img src={Logo} alt="Logo" className="header-icon" />
        <span className="header-brand">
          <span>Froggy</span>
          <span>Gaming</span>
        </span>
      </Link>
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
              {state.loading && (
                <div
                  className="header-navigation-form-query"
                  style={{
                    height: state.query.trim().length === 0 ? "0px" : "260px",
                  }}
                >
                  <ProductItemsSkeleton></ProductItemsSkeleton>
                  <ProductItemsSkeleton></ProductItemsSkeleton>
                  <ProductItemsSkeleton></ProductItemsSkeleton>
                  <ProductItemsSkeleton></ProductItemsSkeleton>
                  <ProductItemsSkeleton></ProductItemsSkeleton>
                  <ProductItemsSkeleton></ProductItemsSkeleton>
                </div>
              )}
              {!state.loading && (
                <div
                  className="header-navigation-form-query"
                  style={{
                    height: state.query.trim().length === 0 ? "0px" : "260px",
                    marginBlock:
                      state.query.trim().length === 0 ? "0px" : "1rem",
                  }}
                >
                  {state.data.length > 0 &&
                    state.data.map((item, index) => (
                      <ProductItems key={item.id} data={item}></ProductItems>
                    ))}
                  {state.data.length <= 0 && (
                    <div className="header-navigation-form-notfound">
                      Không có sản phẩm nào
                    </div>
                  )}
                </div>
              )}
            </form>
          </li>

          <Link
            to={"/category"}
            className="header-navigation-item header-navigation-item--flex"
          >
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="computer-icon"
            >
              <path
                d="M19.6445 10.2915C19.6147 10.188 19.5525 10.0966 19.4671 10.0307C18.7419 9.47168 17.9973 9.16426 17.2593 9.09492C17.2593 9.09492 17.161 9.0791 16.9243 9.0791C16.6874 9.0791 16.5667 9.09451 16.5667 9.09451C15.8551 9.17843 15.1425 9.49178 14.4433 10.0307C14.3578 10.0965 14.2957 10.188 14.2659 10.2915C13.9227 11.4812 13.8312 12.6224 13.9776 13.883C14.107 14.9974 14.4141 16.1159 14.7723 17.3576C14.8021 17.4612 14.8643 17.5526 14.9496 17.6184C15.4987 18.0418 16.2109 18.2747 16.9551 18.2747C17.6992 18.2747 18.4116 18.0418 18.9607 17.6185C19.0461 17.5527 19.1082 17.4612 19.1381 17.3577C19.4963 16.1158 19.8034 14.9974 19.9328 13.8831C20.0792 12.6224 19.9877 11.4811 19.6445 10.2915ZM17.3983 12.3574C17.3983 12.6022 17.1998 12.8006 16.9551 12.8006C16.7103 12.8006 16.512 12.6022 16.512 12.3574V10.5091C16.512 10.2644 16.7103 10.0659 16.9551 10.0659C17.1998 10.0659 17.3983 10.2644 17.3983 10.5091V12.3574Z"
                fill="#29324E"
              ></path>
              <path
                d="M13.583 17.0868H12.7839L12.1244 14.8446H13.4705C13.4284 14.6043 13.3925 14.3641 13.3644 14.123C13.2795 13.3916 13.2692 12.6969 13.3347 12.0111H1.5456V2.12031H17.5168V8.46947C18.0371 8.52166 18.5539 8.67359 19.0624 8.92259V1.34751C19.0624 0.920715 18.7163 0.574707 18.2896 0.574707H0.772799C0.346008 0.574707 0 0.920715 0 1.34751V14.0718C0 14.4987 0.346008 14.8446 0.772799 14.8446H6.93788L6.27848 17.0868H5.47951C5.27662 17.0868 5.11212 17.2513 5.11212 17.4542V18.0583C5.11212 18.2612 5.27662 18.4257 5.47951 18.4257H13.583C13.7859 18.4257 13.9503 18.2612 13.9503 18.0583V17.4542C13.9502 17.2513 13.7858 17.0868 13.583 17.0868Z"
                fill="#29324E"
              ></path>
            </svg>
            <span>Danh mục</span>
            <i className="fa-solid fa-angle-down"></i>
            <NavCategory></NavCategory>
          </Link>
          <li className="header-navigation-item">Tin tức</li>
          <li className="header-navigation-item">Sự kiện</li>
          <li className="header-navigation-item">Chính sách</li>
          <li className="header-navigation-item">Giới thiệu</li>
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
              {state.loading && (
                <div
                  className="header-navigation-form-query"
                  style={{
                    height: state.query.trim().length === 0 ? "0px" : "260px",
                  }}
                >
                  <ProductItemsSkeleton></ProductItemsSkeleton>
                  <ProductItemsSkeleton></ProductItemsSkeleton>
                  <ProductItemsSkeleton></ProductItemsSkeleton>
                  <ProductItemsSkeleton></ProductItemsSkeleton>
                  <ProductItemsSkeleton></ProductItemsSkeleton>
                  <ProductItemsSkeleton></ProductItemsSkeleton>
                </div>
              )}
              {!state.loading && (
                <div
                  className="header-navigation-form-query"
                  style={{
                    height: state.query.trim().length === 0 ? "0px" : "260px",
                    marginBlock:
                      state.query.trim().length === 0 ? "0px" : "1rem",
                  }}
                >
                  {state.data.length > 0 &&
                    state.data.map((item) => (
                      <ProductItems key={item.id} data={item}></ProductItems>
                    ))}
                  {state.data.length <= 0 && (
                    <div className="header-navigation-form-notfound">
                      Không có sản phẩm nào
                    </div>
                  )}
                </div>
              )}
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

const ProductItems = ({ data }) => {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <div className="header-navigation-form-query-flex">
        <img
          src={`${imagePath}${data.poster_path}`}
          alt=""
          className="header-navigation-form-query-img"
        />
        <div className="header-navigation-form-query-description">
          <span className="header-navigation-form-query-title">
            {data.title}
          </span>
          <div className="header-navigation-form-query-overview">
            {data.overview}
          </div>
          <div className="header-navigation-form-query-vote">
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.66713 1.02447C7.7719 0.702008 8.2281 0.702009 8.33287 1.02447L9.71753 5.28602C9.76439 5.43023 9.89877 5.52786 10.0504 5.52786H14.5313C14.8703 5.52786 15.0113 5.96173 14.737 6.16102L11.1119 8.7948C10.9892 8.88393 10.9379 9.04191 10.9847 9.18612L12.3694 13.4477C12.4742 13.7701 12.1051 14.0383 11.8308 13.839L8.20572 11.2052C8.08305 11.1161 7.91695 11.1161 7.79428 11.2052L4.16918 13.839C3.89488 14.0383 3.52581 13.7701 3.63059 13.4477L5.01525 9.18612C5.06211 9.04191 5.01078 8.88393 4.88811 8.7948L1.26301 6.16102C0.988711 5.96173 1.12968 5.52786 1.46874 5.52786H5.9496C6.10123 5.52786 6.23561 5.43023 6.28247 5.28602L7.66713 1.02447Z"
                stroke="#FFB86C"
                strokeWidth="1.5"
              />
            </svg>
            <span className="header-navigation-form-query-voteavg">
              {data.vote_average}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductItemsSkeleton = () => {
  return (
    <div>
      <div className="header-navigation-form-query-flex">
        <div className="header-navigation-form-query-img">
          <LoadingSkeleton radius="8px"></LoadingSkeleton>
        </div>

        <div className="header-navigation-form-query-description">
          <span className="header-navigation-form-query-title">
            <LoadingSkeleton height="20px"></LoadingSkeleton>
          </span>
          <div className="header-navigation-form-query-overview">
            <LoadingSkeleton height="90px" marginTop="10px"></LoadingSkeleton>
          </div>
          <div className="header-navigation-form-query-vote">
            <LoadingSkeleton
              width="90px"
              height="15px"
              marginTop="10px"
            ></LoadingSkeleton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
