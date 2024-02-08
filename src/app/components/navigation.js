"use client";
import Link from "next/link";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Image from "next/image";

import React, { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center py-5 fixed w-full z-50 bg-black">
      <div className="relative">
        <button
          onClick={handleClick}
          className="flex flex-col justify-center items-center py-4 ml-4"
        >
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                        h-0.5 w-6 rounded-sm ${
                          isOpen
                            ? "rotate-45 translate-y-1"
                            : "-translate-y-0.5"
                        }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                        h-0.5 w-6 rounded-sm my-0.5 ${
                          isOpen ? "opacity-0" : "opacity-100"
                        }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                        h-0.5 w-6 rounded-sm ${
                          isOpen
                            ? "-rotate-45 -translate-y-1"
                            : "translate-y-0.5"
                        }`}
          ></span>
        </button>

        {isOpen && (
          <nav className="flex flex-col absolute gap-8 bg-black py-4 w-40 text-center mt-5 text-white z-50">
            <Link href="/" className=" text-white">
              Home
            </Link>
            <Link href="/blogs" className=" text-white">
              Blogs
            </Link>
            <Link href="/about" className=" text-white">
              About Us
            </Link>
            <Link href="/contact" className=" text-white">
              Contact
            </Link>
          </nav>
        )}
      </div>

      <div className="logo text-center mx-auto">
        <Image
          src="https://starwebfront.com/wp-content/uploads/2024/01/logo.jpg"
          width={140}
          height={50}
          alt="Picture of the author"
        />
      </div>

      <div className="reach_us rounded-md  text-black bg-indigo-800 mr-4">
        <Button variant="contained" endIcon={<SendIcon />}>
          Contact Us
        </Button>
      </div>
    </div>
  );
};

/** https://jacobhocker.medium.com/creating-an-animated-hamburger-menu-in-nextjs-tailwind-css-9e332d428811
 * used for hamburger, some errors but fixed
 */

export default Navigation;
