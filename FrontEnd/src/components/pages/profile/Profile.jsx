import React from "react";
import NavBar from "../../reusable-ui/navBar/NavBar";
import MainProfile from "./main/MainProfile";
import Footer from "../../reusable-ui/Footer.jsx";

export default function Profile() {
  return (
    <div>
      <NavBar />
      <MainProfile />
      <Footer />
    </div>
  );
}
