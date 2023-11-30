import React from "react";
import Navbar from "../assets/components/navbar";
import { KategoriBelajar } from "../assets/components/KategoriBelajar";
import Hero from "../assets/components/Hero";
import NavbarAfterLogin from "../assets/components/NavbarAfterLogin";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <KategoriBelajar />
      <NavbarAfterLogin />
    </div>
  );
};
