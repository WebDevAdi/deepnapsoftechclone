import React from "react";
import { Footer, Navbar } from "./components";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="my-20">
      <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
