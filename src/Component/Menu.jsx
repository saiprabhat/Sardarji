import React from "react";
import drinks from "../images/drinks.png";
import { dict } from "../data/main";

export default function Menu() {
  return (
    <section class="section menu color" aria-label="menu-label" id="menu">
      {Object.keys(dict).map((r) => {
        return (
          <div class="container" id={r}>
            <p
              class="section-subtitle text-center label-2"
              style={
                r == "Beverages" ? { fontSize: "32px" } : { fontSize: "22px" }
              }
            >
              {r.split("_").join(" ")}
            </p>

            {r == "Beverages" ? (
              <h2
                class="headline-1 section-title text-center"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <figure
                  class="card-banner img-holder"
                  style={{ width: 300, height: 300 }}
                >
                  <img
                    src={drinks}
                    width="600"
                    height="600"
                    loading="lazy"
                    alt="Greek Salad"
                    class="img-cover"
                  />
                </figure>
              </h2>
            ) : (
              <></>
            )}

            <ul class="grid-list">
              {dict[r].map((details) => {
                return (
                  <li>
                    <div class="menu-card hover:card">
                      {/* {r == "Beverages" ? (
                        <figure
                          class="card-banner img-holder"
                          style={{ width: 100, height: 100 }}
                        >
                          <img
                            src={menu1}
                            width="100"
                            height="100"
                            loading="lazy"
                            alt="Greek Salad"
                            class="img-cover"
                          />
                        </figure>
                      ) : (
                        <></>
                      )} */}

                      <div>
                        <div class="title-wrapper">
                          <h3 class="title-3">
                            <a
                              class="card-title"
                              style={{
                                fontSize: "20px",
                                lineHeight: "8px",
                                cursor: "pointer",
                              }}
                            >
                              {details?.name}
                            </a>
                          </h3>

                          {details.special ? (
                            <span class="badge label-1">Special</span>
                          ) : null}

                          <p class="card-text label-1">{details.des}</p>
                        </div>
                        <span class="span title-2">{details.price}</span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            {/* <!-- 
              <p class="menu-text text-center">
                During winter daily from <span class="span">7:00 pm</span> to
                <span class="span">9:00 pm</span>
              </p> -->
              <!-- 
              <a href="#" class="btn btn-primary">
                <span class="text text-1">View All Menu</span>
        
                <span class="text text-2" aria-hidden="true">View All Menu</span>
              </a> --> */}

            {/* <img
                  src="./assets/images/shape-5.png"
                  width="921"
                  height="1036"
                  loading="lazy"
                  alt="shape"
                  class="shape shape-2 move-anim"
                />
                <img
                  src="./assets/images/shape-6.png"
                  width="343"
                  height="345"
                  loading="lazy"
                  alt="shape"
                  class="shape shape-3 move-anim"
                /> */}
          </div>
        );
      })}
    </section>
  );
}
