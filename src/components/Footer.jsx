import React from "react";
import { SectionWrapper } from "../hoc";
import { logo, githubs, linkedin, leetcode } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-black text-orange-500 px-8 py-6 -mb-16">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        {/* Left Section: Name and Logo */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Vartika Logo"
            className="w-14 h-14"
          />
          <h2 className="text-2xl font-bold">Vartika Singh</h2>
        </div>

        {/* Right Section: Social Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/singhvartika22/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="group"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-10 h-10 transform group-hover:scale-110 transition duration-300"
            />
          </a>
          <a
            href="https://github.com/VartikaS14"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="group"
          >
            <img
              src={githubs}
              alt="GitHub"
              className="w-10 h-10 transform group-hover:scale-110 transition duration-300"
            />
          </a>
          <a
            href="https://leetcode.com/u/VartikaS14/"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
            className="group"
          >
            <img
              src={leetcode}
              alt="LeetCode"
              className="w-10 h-10 transform group-hover:scale-110 transition duration-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, "");
