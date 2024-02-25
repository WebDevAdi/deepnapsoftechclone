import React from "react";
import "./Navbar.css";
import NavItems from "./NavItems";

function Navbar() {
  return (
    <nav className="bg-black text-white ">
      <div className="flex items-center justify-between max-w-[1500px] px-10 mx-auto max-h-[80px]">
        <div className="flex items-center">
          <div className="text-xl mx-3 lg:hidden">
            {/* hamburger icon */}
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="w-[90px]">
            {/* logo */}
            <img
              src="https://deepnapsoftech.com/assets/Deepnap-Kk6_Vq1R.svg"
              className="grayscale invert"
              alt=""
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="hidden xl:flex">
          <NavItems/>
          </div>
          <button className="mx-3 flex items-center text-black bg-white rounded p-2 px-4 text-sm">
            Book Demo
          </button>
        </div>
      </div>
      <div className="border-t hidden lg:flex xl:hidden items-center justify-center p-2">
        <NavItems/>
      </div>
    </nav>
  );
}

export default Navbar;
