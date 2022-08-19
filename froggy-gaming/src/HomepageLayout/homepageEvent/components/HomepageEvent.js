import React from "react";
import { EventData } from "./EventData";
import "../assets/homepageevent.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomepageEvent = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="event">
      {EventData.length > 0 &&
        EventData.map((item, index) => (
          <div
            className="event-item"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-offset="200"
            data-aos-once="true"
            key={index}
          >
            <img src={item.image_url} alt="Event" className="event-item-img" />
          </div>
        ))}
    </div>
  );
};

export default HomepageEvent;
