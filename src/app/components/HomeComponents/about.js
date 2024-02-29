import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="about container max-w-[1240px] mx-auto py-8 px-4 h-auto">
      <div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-16 items-center">
          <div className="w-full">
            <Image
              src="https://starwebfront.com/wp-content/uploads/2024/01/about-us-scaled.webp"
              width={542}
              height={442}
              alt="About us image"
              sizes="(min-width: 1320px) 572px, (min-width: 780px) 44.23vw, calc(100vw - 32px)"
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
          <div className="">
            <div className="desc">
              <p className="font-normal text-md my-3">Discover Our Story</p>
              <h3 className="text-black font-bold text-3xl uppercase ">
                About Us
              </h3>
              <p className="my-3">
                At StarWebFront, we are more than digital enthusiasts; we are
                architects of online success. With a passion for innovative web
                design, development, and marketing, we bring your brand to life
                in the digital sphere.
              </p>
              <p className="my-3">
                Our dedicated team blends creativity and strategic thinking,
                offering comprehensive solutions from SEO optimization to
                e-commerce development. Committed to your growth, we leverage
                the latest technologies to ensure your business thrives in an
                ever-evolving digital landscape. Partner with us and let’s craft
                a compelling online narrative that resonates, engages, and
                converts.
              </p>
              <div className="mt-4">
                <a
                  href="#"
                  className="w-52 text-center block px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-black bg-indigo-100  hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:px-10 font-bold"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
