import React, { useState } from "react";
import "../styles/dropdown.css";

const NavCategory = () => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <div className="category">
        <ul className="category-list">
          <li className="category-item">
            <a
              href="../"
              target={"_blank"}
              rel={"noreferrer"}
              className={`category-link ${selected && "selected"}`}
            >
              <span>Bàn phím cơ</span>
              <i className="category-icon fa-solid fa-angle-right"></i>
            </a>
            <ul
              className="category-menu"
              onMouseOver={() => setSelected(true)}
              onMouseLeave={() => setSelected(false)}
            >
              <div className="category-grid">
                <h4 className="category-name">Thương hiệu</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Giá tiền</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Logitech Series</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Razer Series</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Corsair Series</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
            </ul>
          </li>
          <li className="category-item">
            <a
              href="https://www.google.com"
              target={"_blank"}
              rel={"noreferrer"}
              className={`category-link ${selected && "selected"}`}
            >
              <span>Chuột</span>
              <i className="category-icon fa-solid fa-angle-right"></i>
            </a>
            <ul
              className="category-menu"
              onMouseOver={() => setSelected(true)}
              onMouseLeave={() => setSelected(false)}
            >
              <div className="category-grid">
                <h4 className="category-name">Thương hiệu</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Giá tiền</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Logitech Series</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Razer Series</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Corsair Series</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
            </ul>
          </li>
          <li className="category-item">
            <a
              href="https://www.google.com"
              target={"_blank"}
              rel={"noreferrer"}
              className={`category-link ${selected && "selected"}`}
            >
              <span>Tai nghe</span>
              <i className="category-icon fa-solid fa-angle-right"></i>
            </a>
            <ul
              className="category-menu"
              onMouseOver={() => setSelected(true)}
              onMouseLeave={() => setSelected(false)}
            >
              <div className="category-grid">
                <h4 className="category-name">Thương hiệu</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Giá tiền</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Logitech Series</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Razer Series</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Corsair Series</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
            </ul>
          </li>
          <li className="category-item">
            <a
              href="https://www.google.com"
              target={"_blank"}
              rel={"noreferrer"}
              className={`category-link ${selected && "selected"}`}
            >
              <span>Microphone</span>
              <i className="category-icon fa-solid fa-angle-right"></i>
            </a>
            <ul
              className="category-menu"
              onMouseOver={() => setSelected(true)}
              onMouseLeave={() => setSelected(false)}
            >
              <div className="category-grid">
                <h4 className="category-name">Thương hiệu</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Giá tiền</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Logitech Series</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Razer Series</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Corsair Series</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
            </ul>
          </li>
          <li className="category-item">
            <a
              href="https://www.google.com"
              target={"_blank"}
              rel={"noreferrer"}
              className={`category-link ${selected && "selected"}`}
            >
              <span>Bàn ghế</span>
              <i className="category-icon fa-solid fa-angle-right"></i>
            </a>
            <ul
              className="category-menu"
              onMouseOver={() => setSelected(true)}
              onMouseLeave={() => setSelected(false)}
            >
              <div className="category-grid">
                <h4 className="category-name">Thương hiệu</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Giá tiền</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Logitech Series</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Razer Series</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Corsair Series</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
            </ul>
          </li>
          <li className="category-item">
            <a
              href="https://www.google.com"
              target={"_blank"}
              rel={"noreferrer"}
              className={`category-link ${selected && "selected"}`}
            >
              <span>Keycaps</span>
              <i className="category-icon fa-solid fa-angle-right"></i>
            </a>
            <ul
              className="category-menu"
              onMouseOver={() => setSelected(true)}
              onMouseLeave={() => setSelected(false)}
            >
              <div className="category-grid">
                <h4 className="category-name">Thương hiệu</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Giá tiền</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Logitech Series</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Razer Series</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
              <div className="category-grid">
                <h4 className="category-name">Corsair Series</h4>
                <li className="category-choice">Akko</li>
                <li className="category-choice">Logitech</li>
                <li className="category-choice">Ducky</li>
                <li className="category-choice">Corsair</li>
                <li className="category-choice">Asus</li>
                <li className="category-choice">Dare-U</li>
                <li className="category-choice">Steelseries</li>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavCategory;
