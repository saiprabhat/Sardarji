import React from "react";
import companyLogo from "../images/logoo3.png";
import './App.css';

export default function Header() {
  return (
    <header class="header" data-header>
      <div class="container">
        <a
          href="#"
          class="logo"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign:"Center"
          }}
        >
          <img
            
            src={companyLogo}
            style={{ height: "125px", paddingBottom: "1.5px",paddingTop:"0.5px", }}
          />
          {/* <p style={{ fontSize: "32px" }}>Sardar Ji</p> */}
        </a>

        <nav class="navbar" data-navbar>
          <button class="close-btn" aria-label="close menu" data-nav-toggler>
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>

          <a href="#" class="logo">
            <p>Sardar Ji</p>
          </a>

          <ul class="navbar-list">
            {/* <li class="navbar-item">
              <a href="#home" class="navbar-link hover-underline active">
                <div class="separator"></div>

                <span class="span"></span>
              </a>
            </li>

            <li class="navbar-item">
              <a href="#menu" class="navbar-link hover-underline">
                <div class="separator"></div>

                <span class="span"></span>
              </a>
            </li> */}

            {/* <li class="navbar-item">
              <a href="#about" class="navbar-link hover-underline">
                <div class="separator"></div>

                <span class="span" style={{ fontSize: "22px" }}>
                  Sardar ji
                </span>
              </a>
            </li> */}

            {/* <li class="navbar-item">
              <a href="#" class="navbar-link hover-underline">
                <div class="separator"></div>

                <span class="span">Our Chefs</span>
              </a>
            </li>

            <li class="navbar-item">
              <a href="#" class="navbar-link hover-underline">
                <div class="separator"></div>

                <span class="span">Contact</span>
              </a>
            </li> */}
          </ul>

          <div class="text-center">
            <p class="headline-1 navbar-title">Locations to Serve You</p>

          <div className="info-box">
            <address className="body-4">
              170 Bovaird Dr W Unit#16<br />
              Brampton,ON
              </address>
            <a
              href="tel:+1 905-216-2040"
              class="body-1 contact-number hover-underline"
            >
              +1 905-216-2040
              </a>
              <a href="mailto:sardarjibar170@gmail.com" className="body-4 sidebar-link">
              sardarjibar170@gmail.com
            </a>
              </div>

              <div className="info-box">
            <address className="body-4">
              15 Brisdale Dr, Brampton, ON L7A 0S9<br />
              Brampton,ON
              </address>
            <a
              href="tel:++1 905-846-7800"
              class="body-1 contact-number hover-underline"
            >
              +1 905-846-7800
              </a>
              <a href="mailto:sj.brisdale@gmail.com" className="body-4 sidebar-link">
              sj.brisdale@gmail.com
            </a>
            </div> 
              
              <div className="info-box">
            <address className="body-4">
            130 FatherTobin Rd<br />
              Brampton,ON
              </address>
            <a
              href="tel:+1 905-494-1636"
              class="body-1 contact-number hover-underline"
            >
              +1 905-494-1636
              </a>
              <a href="mailto:sj.fathertobin@gmail.com" className="body-4 sidebar-link">
              sj.fathertobin@gmail.com
            </a>
              </div> 
              
              <div className="info-box">
            <address className="body-4">
            1975,Cottrelle Blvd <br />
              Brampton,ON
              </address>
            <a
              href="tel:+1 905-459-2002"
              class="body-1 contact-number hover-underline"
            >
              +1 905-459-2002
              </a>
              <a href="mailto:sj.mcvean@gmail.com" className="body-4 sidebar-link">
              sj.mcvean@gmail.com
            </a>
              </div>


            <p class="body-4 navbar-text">Open: 24 Hours</p>

            <a href="mann.kulvinder@yahoo.in" class="body-4 sidebar-link">
            mann.kulvinder@yahoo.in
            </a>

            <div class="separator"></div>

            <p class="contact-label">Booking Request</p>

            {/* <a
              href="tel:+1 905-459-3939"
              class="body-1 contact-number hover-underline"
            >
              +1 905-459-3939
            </a> */}
          </div>
        </nav>

        {/* <!-- <a href="#" class="btn btn-secondary">
        <span class="text text-1">Find A Table</span>

        <span class="text text-2" aria-hidden="true">Find A Table</span>
      </a> --> */}

        <button class="nav-open-btn" aria-label="open menu" data-nav-toggler>
          <span class="line line-1"></span>
          <span class="line line-2"></span>
          <span class="line line-3"></span>
        </button>

        <div class="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
}
