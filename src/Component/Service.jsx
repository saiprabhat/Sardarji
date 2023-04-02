import React from "react";
import serviceOne from "../images/service-1.jpg";
import serviceTwo from "../images/service-2.jpg";
import serviceThree from "../images/service-3.jpg";
import shapeOne from "../images/shape-1.png";
import shapeTwo from "../images/shape-2.png";

export default function Service() {
  return (
    <section
      className="section service bg-black-10 text-center"
      aria-label="service"
      id="service"
    >
      <div className="container">
        <p className="section-subtitle label-2">Flavors For Royalty</p>

        <h2 className="headline-1 section-title">We Offer Top Notch</h2>

        <p className="section-text">
          Experience top-notch Indian cuisine with authentic flavors, crafted by
          skilled chefs using fresh ingredients and aromatic spices which are
          served best with all-new and flavorful Cocktails.
        </p>

        <ul className="grid-list">
  
          
        <li>
            <div className="service-card">
              <a href="#menu" className="has-before hover:shine">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 200, height: 240 }}
                >
                  <img
                    src={serviceTwo}
                    width="200"
                    height="240"
                    loading="lazy"
                    alt="Appetizers"
                    className="img-cover"
                  />
                </figure>
              </a>

              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a href="#menu">Appetizers</a>
                </h3>

                <a href="#menu" className="btn-text hover-underline label-2">
                  View Menu
                </a>
              </div>
            </div>
          </li>

          <li>
            <div className="service-card">
              <a href="#Beverages" className="has-before hover:shine">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 200, height: 240 }}
                >
                  <img
                    src={serviceThree}
                    width="200"
                    height="240"
                    loading="lazy"
                    alt="Drinks"
                    className="img-cover"
                  />
                </figure>
              </a>

              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a href="#Beverages">Drinks</a>
                </h3>

                <a
                  href="#Beverages"
                  className="btn-text hover-underline label-2"
                >
                  View Menu
                </a>
              </div>
            </div>
          </li>

          <li>
            <div className="service-card">
              <a href="#Veg_Curries" className="has-before hover:shine">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 200, height: 240 }}
                >
                  <img
                    src={serviceOne}
                    width="200"
                    height="240"
                    loading="lazy"
                    alt="Dinner"
                    className="img-cover"
                  />
                </figure>
              </a>

              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a href="#Veg_Curries">Dinner</a>
                </h3>

                <a
                  href="#Veg_Curries"
                  className="btn-text hover-underline label-2"
                >
                  View Menu
                </a>
              </div>
            </div>
          </li>


   
       
        </ul>

        <img
          src={shapeOne}
          width="246"
          height="412"
          loading="lazy"
          alt="shape"
          className="shape shape-1 move-anim"
        />
        <img
          src={shapeTwo}
          width="343"
          height="345"
          loading="lazy"
          alt="shape"
          className="shape shape-2 move-anim"
        />
      </div>
    </section>
  );
}
