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

          <span className="span">Daily : 24 Hours</span>
        </div>

        <a href="tel:+1 647-786-7611" className="topbar-item link">
          <div className="icon">
            <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
          </div>

          <span className="span">+1 647-786-7611</span>
        </a>

        <div className="separator"></div>

        <a href="mailto:mann.kulvinder@yahoo.in" className="topbar-item link">
          <div className="icon">
            <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
          </div>

          <span className="span">mann.kulvinder@yahoo.in</span>
        </a>
      </div>
    </div>
  );
}
