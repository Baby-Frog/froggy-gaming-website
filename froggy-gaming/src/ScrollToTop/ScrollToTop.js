import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Fragment } from "react";
import "./assets/styles/scrollbutton.css";

const ScrollToTopButton = () => {
  const [toTop, setToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setToTop(true);
      } else {
        setToTop(false);
      }
    });
  }, []);
  const scrollUp = () => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  };
  return (
    <Fragment>
      <div
        className={`scroll-button ${toTop && "scroll-button-show"}`}
        onClick={scrollUp}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 16L11.2929 8.70711C11.6834 8.31658 12.3166 8.31658 12.7071 8.70711L20 16"
            stroke="#121219"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </Fragment>
  );
};

export default ScrollToTopButton;
