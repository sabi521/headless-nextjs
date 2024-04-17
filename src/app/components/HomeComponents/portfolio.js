"use client";
import React, { useState } from "react";
import "lightbox2/dist/css/lightbox.min.css";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

/* const Portfolio = ({ images }) => {
  return (
    <div className="portfolio_section container max-w-[1240px] mx-auto py-8 px-6">
      <h2 className="text-black font-bold text-3xl uppercase w-full pb-6 ">
        Portfolio
      </h2>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <a
              href={image.path}
              data-lightbox="gallery"
              data-title={`Image ${index + 1}`}
              key={index}
            >
              <img
                src={image.path}
                alt={`Image ${index + 1}`}
                className="rounded-lg shadow"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}; */
function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function App() {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <section className="portfolio_slider p-4 bg-[#e7f6ff]">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <Image
            src="https://starwebfront.com/wp-content/uploads/2024/01/betus.png"
            alt="project image"
            width={1519}
            height={400}
          />
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image
            src="https://starwebfront.com/wp-content/uploads/2024/01/slotsparadise.png"
            alt="project image"
            width={1519}
            height={400}
          />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image
            src="https://starwebfront.com/wp-content/uploads/2024/01/revmasters.png"
            alt="project image"
            width={1519}
            height={400}
          />
        </div>
        <div className="keen-slider__slide number-slide4">
          <Image
            src="https://starwebfront.com/wp-content/uploads/2024/01/pointspreads.png"
            alt="project image"
            width={1519}
            height={400}
          />
        </div>
        <div className="keen-slider__slide number-slide5">
          <Image
            src="https://starwebfront.com/wp-content/uploads/2024/01/indiport.png"
            alt="project image"
            width={1519}
            height={400}
          />
        </div>
        <div className="keen-slider__slide number-slide6">
          <Image
            src="https://starwebfront.com/wp-content/uploads/2024/01/hatch2web.png"
            alt="project image"
            width={1519}
            height={400}
          />
        </div>
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        <div className="keen-slider__slide number-slide1">
          <Image
            src="https://starwebfront.com/wp-content/uploads/2024/01/betus.png"
            alt="project image"
            width={400}
            height={100}
          />
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image
            src="https://starwebfront.com/wp-content/uploads/2024/01/slotsparadise.png"
            alt="project image"
            width={400}
            height={100}
          />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image
            src="https://starwebfront.com/wp-content/uploads/2024/01/revmasters.png"
            alt="project image"
            width={400}
            height={100}
          />
        </div>
        <div className="keen-slider__slide number-slide4">
          <Image
            src="https://starwebfront.com/wp-content/uploads/2024/01/pointspreads.png"
            alt="project image"
            width={400}
            height={100}
          />
        </div>
        <div className="keen-slider__slide number-slide5">
          <Image
            src="https://starwebfront.com/wp-content/uploads/2024/01/indiport.png"
            alt="project image"
            width={400}
            height={100}
          />
        </div>
        <div className="keen-slider__slide number-slide6">
          <Image
            src="https://starwebfront.com/wp-content/uploads/2024/01/hatch2web.png"
            alt="project image"
            width={400}
            height={100}
          />
        </div>
      </div>
    </section>
  );
}
