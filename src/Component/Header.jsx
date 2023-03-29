import React from "react";
import companyLogo from "../images/logo.svg";

export default function Header() {
  return (
    <header class="header" data-header>
      <div class="container">
        <a href="#" class="logo">
          <p style={{ fontSize: "32px" }}>Sardar Ji</p>
        </a>

        <nav class="navbar" data-navbar>
          <button class="close-btn" aria-label="close menu" data-nav-toggler>
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>

          {/* <a href="#" class="logo">
            <p>Sardar Ji</p>
          </a> */}

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
            <p class="headline-1 navbar-title">Visit Us</p>

            <address class="body-4">
              Restaurant St, Delicious City, <br />
              Brampton,ON
            </address>

            <p class="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>

            <a href="mailto:booking@grilli.com" class="body-4 sidebar-link">
              booking@grilli.com
            </a>

            <div class="separator"></div>

            <p class="contact-label">Booking Request</p>

            <a
              href="tel:+88123123456"
              class="body-1 contact-number hover-underline"
            >
              +88-123-123456
            </a>
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
