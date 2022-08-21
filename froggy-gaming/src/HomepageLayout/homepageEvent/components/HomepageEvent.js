import React from "react";
import { EventData } from "./EventData";
import "../assets/homepageevent.css";

const HomepageEvent = () => {
  return (
    <div className="event">
      {EventData.length > 0 &&
        EventData.map((item, index) => (
          <div className="event-aos" key={item.id}>
            <div className="event-item">
              <img
                src={item.image_url}
                alt="Event"
                className="event-item-img"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default HomepageEvent;
