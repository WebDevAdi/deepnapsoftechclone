import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({handleCloseSidebar}) {
  const handleAccordianClick = (e) => {
    e.target.parentElement.lastElementChild.classList.toggle(
      "accordian-dropdown-smooth"
    );
    e.target.classList.toggle("accordian-dropdown-button-smooth");
    console.log(e.target);
  };
  return (
    <div className="absolute w-[50vw] bg-[#233a58] h-[100vh] z-20">
      <div>
        <div className="flex justify-between items-center px-5 bg-black">
          <div>
            {/* logo */}
            <img
              src="https://deepnapsoftech.com/assets/Deepnap-Kk6_Vq1R.svg"
              className="h-16 grayscale invert"
              alt=""
            />
          </div>
          <div onClick={handleCloseSidebar} className="cursor-pointer">
            {/* close sidebar */}
            <i className="fa-solid fa-x"></i>
          </div>
        </div>

        <div className="flex flex-col">
          <button
            className="accordian-dropdown-button flex justify-between items-center bg-[#1b293d] font-bold text-lg p-3"
            onClick={handleAccordianClick}
          >
            Development
          </button>
          <div className="accordian-dropdown">
            <div className="p-3 font-bold text-lg bg-gray-500 hover:bg-gray-600 hover:text-cyan-400">
              Website Designs
            </div>
            <div className="p-3 font-bold text-lg bg-gray-500 hover:bg-gray-600 hover:text-cyan-400">
              Website Development
            </div>
            <div className="p-3 font-bold text-lg bg-gray-500 hover:bg-gray-600 hover:text-cyan-400">
              Software Development
            </div>
            <div className="p-3 font-bold text-lg bg-gray-500 hover:bg-gray-600 hover:text-cyan-400">
              App Development
            </div>
            <div className="p-3 font-bold text-lg bg-gray-500 hover:bg-gray-600 hover:text-cyan-400">
              CRM Development
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <button
            className="accordian-dropdown-button flex justify-between items-center bg-[#1b293d] font-bold text-lg p-3"
            onClick={handleAccordianClick}
          >
            Digital Marketing
          </button>
          <div className="accordian-dropdown">
            <div className="p-3 font-bold text-lg bg-gray-500 hover:bg-gray-600 hover:text-cyan-400">
              Meta Ads
            </div>
            <div className="p-3 font-bold text-lg bg-gray-500 hover:bg-gray-600 hover:text-cyan-400">
              Google Ads
            </div>
            <div className="p-3 font-bold text-lg bg-gray-500 hover:bg-gray-600 hover:text-cyan-400">
              Email Marketing
            </div>
            <div className="p-3 font-bold text-lg bg-gray-500 hover:bg-gray-600 hover:text-cyan-400">
              Content Marketing
            </div>
            <div className="p-3 font-bold text-lg bg-gray-500 hover:bg-gray-600 hover:text-cyan-400">
              Seo & Smo
            </div>
            <div className="p-3 font-bold text-lg bg-gray-500 hover:bg-gray-600 hover:text-cyan-400">
              PPC
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <button
            className="accordian-dropdown-button flex justify-between items-center bg-[#1b293d] font-bold text-lg p-3"
            onClick={handleAccordianClick}
          >
            Become a brand
          </button>
          <div className="accordian-dropdown">
            <div className="p-3 font-bold text-lg bg-gray-500 hover:bg-gray-600 hover:text-cyan-400">
              Brand Building
            </div>
            <div className="p-3 font-bold text-lg bg-gray-500 hover:bg-gray-600 hover:text-cyan-400">
              Public Relations
            </div>
            <div className="p-3 font-bold text-lg bg-gray-500 hover:bg-gray-600 hover:text-cyan-400">
              ORM
            </div>
            <div className="p-3 font-bold text-lg bg-gray-500 hover:bg-gray-600 hover:text-cyan-400">
              Digital Marketing
            </div>
            <div className="p-3 font-bold text-lg bg-gray-500 hover:bg-gray-600 hover:text-cyan-400">
              Influence Marketing
            </div>
            <div className="p-3 font-bold text-lg bg-gray-500 hover:bg-gray-600 hover:text-cyan-400">
              Social Media Presence
            </div>
          </div>
        </div>

        <div>
          <NavLink to={'/portfolio'}>
            <div className="p-3 bg-[#1b293d] hover:text-cyan-500 font-bold text-lg">
              Showcase
            </div>
          </NavLink>{" "}

          <NavLink to={'/about'}>
          <div className="p-3 bg-[#1b293d] hover:text-cyan-500 font-bold text-lg">
            About
          </div>
          </NavLink>

          <NavLink to={'/contact'}>
          <div className="p-3 bg-[#1b293d] hover:text-cyan-500 font-bold text-lg">
            Contact us
          </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
