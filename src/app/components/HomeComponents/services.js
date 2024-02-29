import React from "react";

export default function Services() {
  return (
    <section className="service container max-w-[1240px] mx-auto py-8 px-6 h-auto">
      <div>
        <h2 className="text-black font-bold text-3xl uppercase relative h-auto w-full pb-1 text-center ">
          Services
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <div className=" bg-gray-100 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">
            <div className="desc ">
              <h3 className="font-bold text-xl leading-8">
                Web Design Services
              </h3>
              <p className="font-normal text-md my-3">
                Crafting visually stunning, user-friendly websites for your
                brand. Our designs seamlessly fuse creativity and functionality
                for a captivating online presence that converts.
              </p>
            </div>
          </div>
          <div className=" bg-gray-100 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">
            <div className="desc ">
              <h3 className="font-bold text-xl leading-8"> Web Development</h3>
              <p className="font-normal text-md my-3">
                Our web development services ensure seamless user experiences,
                optimal performance, and future-proof solutions for your
                business.
              </p>
            </div>
          </div>
          <div className=" bg-gray-100 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">
            <div className="desc ">
              <h3 className="font-bold text-xl leading-8">Digital Marketing</h3>
              <p className="font-normal text-md my-3">
                With our digital marketing strategies, including social media
                management and content marketing, we boost your brand’s
                visibility and engagement.
              </p>
            </div>
          </div>
          <div className=" bg-gray-100 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">
            <div className="desc ">
              <h3 className="font-bold text-xl leading-8"> SEO </h3>
              <p className="font-normal text-md my-3">
                Elevate search rankings and organic traffic with our SEO
                expertise. We cover keyword research, on-page optimization, and
                strategic link building.
              </p>
            </div>
          </div>
          <div className=" bg-gray-100 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">
            <div className="desc ">
              <h3 className="font-bold text-xl leading-8">E-Commerce</h3>
              <p className="font-normal text-md my-3">
                Revamp your online store with our e-commerce expertise. We craft
                secure, user-friendly platforms that maximize sales and customer
                satisfaction.
              </p>
            </div>
          </div>
          <div className=" bg-gray-100 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">
            <div className="desc ">
              <h3 className="font-bold text-xl leading-8">
                Social Media Marketing
              </h3>
              <p className="font-normal text-md my-3">
                Boost your brand on social platforms with our expertise. We
                create engaging campaigns and compelling posts for a standout
                digital presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
