import React from "react";
import Logo from "../navigationBar/assets/froggy-gaming-logo.png";
import "../footer/styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <FooterContent
          header={"Thông tin chung"}
          row1="Giới thiệu Froggy Gaming"
          row2="Tin tức"
          row3="Đánh giá khách hàng"
          row4="Liên hệ"
        ></FooterContent>
        <FooterContent
          header={"Chính sách chung"}
          row1="Quy định chung"
          row2="Chính sách vận chuyển"
          row3="Chính sách bảo hành"
          row4="Chính sách đổi, trả lại hàng"
          row5="Chính sách cho doanh nghiệp"
        ></FooterContent>
        <FooterContent
          header={"Thông tin khuyến mãi"}
          row1="Sản phẩm bán chạy"
          row2="Sản phẩm khuyến mãi"
          row3="Hàng thanh lý"
        ></FooterContent>
        <FooterContent
          header={"Follow us! <3"}
          row1={<i class="fa-brands fa-facebook"></i>}
          row2={<i class="fa-brands fa-youtube"></i>}
          row3={<i class="fa-brands fa-tiktok"></i>}
          row4={<i class="fa-brands fa-instagram"></i>}
        ></FooterContent>
      </div>
    </footer>
  );
};

export default Footer;

function FooterContent({ header, row1, row2, row3, row4, ...props }) {
  return (
    <div className="footer-content">
      <ul className="footer-row">
        <h3>{header}</h3>
        <div className="footer-column">
          <li className="footer-item">{row1}</li>
          <li className="footer-item">{row2}</li>
          <li className="footer-item">{row3}</li>
          <li className="footer-item">{row4}</li>
          {props.row5 && <li className="footer-item">{props.row5}</li>}
        </div>
      </ul>
    </div>
  );
}
