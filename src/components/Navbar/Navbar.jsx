import React from "react";
import "./Navbar.css";
import NavItems from "./NavItems";
import { NavLink } from "react-router-dom";

function Navbar() {
  const handleBookDemo = (e) =>{
    e.target.nextElementSibling.classList.toggle('smooth-demo-drop')
  }
  return (
    <nav className="bg-black text-white sticky top-0 z-30">
      <div className="flex items-center justify-between max-w-[1500px] px-10 mx-auto max-h-[80px]">
        <div className="flex items-center">
          <div className="text-xl mx-3 lg:hidden">
            {/* hamburger icon */}
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="w-[90px]">
            {/* logo */}
            <NavLink to={'/'}>
            <img
              src="https://deepnapsoftech.com/assets/Deepnap-Kk6_Vq1R.svg"
              className="grayscale invert"
              alt=""
            />
            </NavLink>
          </div>
        </div>

        <div className="flex items-center">
          <div className="hidden xl:flex">
            <NavItems />
          </div>
          <div className="relative ">
            <button className="mx-3 flex items-center text-black bg-white rounded p-2 px-4 text-sm" onClick={handleBookDemo}>
              Book Demo
            </button>
            <div className="bookDemoDropdown absolute top-10 left-3 w-full bg-white text-black rounded p-2">
              <div>
                <NavLink to={'/login'}>
                <div className="flex justify-between text-sm py-1 hover:bg-slate-100">
                  <div>Login</div>
                  <div>⌘L</div>
                </div>
                </NavLink>
                <NavLink to={'/carrier'}>
                <div className="flex justify-between text-sm py-1 hover:bg-slate-100">
                  <div>Carrier</div>
                  <div>⌘C</div>
                </div>
                </NavLink>
                <NavLink to={'/book-demo'}>
                <div className="flex justify-between text-sm py-1 hover:bg-slate-100">
                  <div>Book Demo</div>
                  <div>⌘B</div>
                </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t hidden lg:flex xl:hidden items-center justify-center p-2">
        <NavItems />
      </div>
    </nav>
  );
}

export default Navbar;
