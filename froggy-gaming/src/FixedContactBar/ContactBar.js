import React from "react";
import { ContactBarData } from "./ContactBarData";
import "./assets/styles/contactbar.css";

const ContactBar = () => {
  // fixed
  return (
    <div className="contact-bar">
      <ul className="contact-bar-list">
        {ContactBarData.length > 0 &&
          ContactBarData.map((item) => (
            <ContactBarInfo key={item.id} item={item}></ContactBarInfo>
          ))}
      </ul>
    </div>
  );
};

function ContactBarInfo({ item }) {
  return (
    <li className="contact-bar-item">
      <a
        href={item.contact_link}
        target={"_blank"}
        rel="noreferrer"
        className="contact-bar-info"
      >
        <img
          src={item.contact_logo}
          alt="Contact"
          className="contact-bar-image"
        />
        <span className="contact-bar-name">{item.contact_name}</span>
      </a>
    </li>
  );
}

export default ContactBar;
