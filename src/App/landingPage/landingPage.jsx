import React from "react";
// import { Link } from "react-router-dom";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import ImageSlider from "../imageSlider/imageSlider";
import "./landingPage.css";
import DxpMenus from "../dxpMenus/DxpMenus";

export default function LandingPage() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="main-page">
        <Sidebar />
        <DxpMenus />
        <ImageSlider />
      </div>
      {/* <Link to="/landingPage">Login</Link> */}
      {/* <Link to="/">Register</Link> */}
      <div>
        <Footer />
      </div>
    </>
  );
}
