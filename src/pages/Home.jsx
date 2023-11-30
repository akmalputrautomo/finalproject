import React from "react";
import Navbar from "../assets/components/navbar";
import { KategoriBelajar } from "../assets/components/KategoriBelajar";
import Hero from "../assets/components/Hero";
import NavbarAfterLogin from "../assets/components/NavbarAfterLogin";
import NavbarNotifikasi from "../assets/components/NavbarNotifikasi";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <KategoriBelajar />
      <NavbarAfterLogin />
      <NavbarNotifikasi />
    </div>
  );
};
