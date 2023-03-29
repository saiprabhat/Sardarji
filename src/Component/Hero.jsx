import React from "react";
import HeroSliderOne from "../images/hero-slider-1.jpg";
import HeroSliderTwo from "../images/hero-slider-2.jpg";
import HeroSliderThree from "../images/hero-slider-3.jpg";
import { BsArrowUpRight, BsArrowDownLeft } from "react-icons/bs";

export default function Hero() {
  return (
    <section class="hero text-center" aria-label="home" id="home">
      <ul class="hero-slider" data-hero-slider>
        <li class="slider-item active" data-hero-slider-item>
          <div class="slider-bg">
            <img
              src={HeroSliderOne}
              width="1880"
              height="950"
              alt=""
              class="img-cover"
            />
          </div>

          <p class="label-2 section-subtitle slider-reveal">
            Tradational & Hygine
          </p>

          <h1 class="display-1 hero-title slider-reveal">
            For the love of <br />
            delicious food
          </h1>

          <p class="body-2 hero-text slider-reveal">
            Come with family & feel the joy of mouthwatering food
          </p>

          <a href="#service" class="btn btn-primary slider-reveal">
            <span class="text text-1">View Our Menu</span>

            <span class="text text-2" aria-hidden="true">
              View Our Menu
            </span>
          </a>
        </li>

        <li class="slider-item" data-hero-slider-item>
          <div class="slider-bg">
            <img
              src={HeroSliderTwo}
              width="1880"
              height="950"
              alt=""
              class="img-cover"
            />
          </div>

          <p class="label-2 section-subtitle slider-reveal">
            delightful experience
          </p>

          <h1 class="display-1 hero-title slider-reveal">
            Flavors Inspired by <br />
            the Seasons
          </h1>

          <p class="body-2 hero-text slider-reveal">
            Come with family & feel the joy of mouthwatering food
          </p>

          <a href="#service" class="btn btn-primary slider-reveal">
            <span class="text text-1">View Our Menu</span>

            <span class="text text-2" aria-hidden="true">
              View Our Menu
            </span>
          </a>
        </li>

        <li class="slider-item" data-hero-slider-item>
          <div class="slider-bg">
            <img
              src={HeroSliderThree}
              width="1880"
              height="950"
              alt=""
              class="img-cover"
            />
          </div>

          <p class="label-2 section-subtitle slider-reveal">
            amazing & delicious
          </p>

          <h1 class="display-1 hero-title slider-reveal">
            Where every flavor <br />
            tells a story
          </h1>

          <p class="body-2 hero-text slider-reveal">
            Come with family & feel the joy of mouthwatering food
          </p>

          <a href="#service" class="btn btn-primary slider-reveal">
            <span class="text text-1">View Our Menu</span>

            <span class="text text-2" aria-hidden="true">
              View Our Menu
            </span>
          </a>
        </li>
      </ul>

      <button
        class="slider-btn prev"
        aria-label="slide to previous"
        data-prev-btn
      >
        <BsArrowDownLeft />
      </button>

      <button class="slider-btn next" aria-label="slide to next" data-next-btn>
        <BsArrowUpRight />
      </button>

      {/* <!-- <a href="#" class="hero-btn has-after">
      <img
        src="./assets/images/hero-icon.png"
        width="48"
        height="48"
        alt="booking icon"
      />

      <span class="label-2 text-center span">Book A Table</span>
    </a> --> */}
    </section>
  );
}
