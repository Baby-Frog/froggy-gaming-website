import React from "react";
import { ContactBarData } from "./ContactBarData";
import "./assets/styles/contactbar.css";
import { useState } from "react";
import { useEffect } from "react";

const ContactBar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);
  // fixed
  return (
    <div className={`contact-bar ${scrolled && "show"}`}>
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
