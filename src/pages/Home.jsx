import React from "react";
import { KategoriBelajar } from "../assets/components/KategoriBelajar";
import Hero from "../assets/components/Hero";
import { KursusPopuler } from "../assets/components/KursusPopuler";
import Navbarr from "../assets/components/navbar";
import { NavbarResponsive } from "../assets/components/elements/NavbarResponsive";
import { Footer } from "../assets/components/Footer";

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className="hidden desktop:block">
        <Navbarr />
      </div>
      <div className="block desktop:hidden">
        <NavbarResponsive />
      </div>
      <Hero />
      <KategoriBelajar />
      <KursusPopuler />
      <Footer />
    </div>
  );
};
