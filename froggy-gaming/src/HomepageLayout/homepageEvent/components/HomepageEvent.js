import React from "react";
import { EventData } from "./EventData";
import "../assets/homepageevent.css";

const HomepageEvent = () => {
  return (
    <div className="event">
      {EventData.length > 0 &&
        EventData.map((item, index) => (
          <div className="event-item" key={index}>
            <img src={item.image_url} alt="" className="event-item-img" />
          </div>
        ))}
    </div>
  );
};

export default HomepageEvent;
