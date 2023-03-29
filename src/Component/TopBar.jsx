import React from "react";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container">
        <address className="topbar-item">
          <div className="icon">
            <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
          </div>

          <span className="span">
            1975,Cottrelle Blvd,Brampton,ON
          </span>
        </address>

        <div className="separator"></div>

        <div className="topbar-item item-2">
          <div className="icon">
            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
          </div>

          <span className="span">Daily : 5:00 pm to 5:00 am</span>
        </div>

        <a href="tel:+1 437-987-8659" className="topbar-item link">
          <div className="icon">
            <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
          </div>

          <span className="span">+1 437-987-8659</span>
        </a>

        <div className="separator"></div>

        <a href="mailto:amanhas4700@gmail.com" className="topbar-item link">
          <div className="icon">
            <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
          </div>

          <span className="span">amanhas4700@gmail.com</span>
        </a>
      </div>
    </div>
  );
}
