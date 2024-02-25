import React from "react";
import "./Navbar.css";
import NavItems from "./NavItems";

function Navbar() {
  return (
    <nav className="bg-black text-white ">
      <div className="flex items-center justify-between max-w-[1580px] mx-auto max-h-[80px] px-4">
        <div className="flex items-center">
          <div className="text-xl mx-3 lg:hidden">
            {/* hamburger icon */}
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="w-[90px]">
            {/* logo */}
            <img
              src="https://deepnapsoftech.com/assets/Deepnap-53l5w3wq.svg"
              className="grayscale invert"
              alt=""
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="hidden xl:flex">
          <NavItems/>
          </div>
          <div className="mx-4 flex items-center font-bold border border-white rounded p-2 text-sm bg-gradient-to-r from-[#495bc0] to-[#060922]">
            <div>
            BOOK DEMO
            </div>
            <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  class="ml-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                </svg>
          </div>
        </div>
      </div>
      <div className="border-t hidden lg:flex xl:hidden items-center justify-center p-2">
        <NavItems/>
      </div>
    </nav>
  );
}

export default Navbar;
