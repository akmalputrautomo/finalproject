import React from "react";
import { KategoriBelajar } from "../assets/components/KategoriBelajar";
import Hero from "../assets/components/Hero";
import { KursusPopuler } from "../assets/components/KursusPopuler";
import Navbarr from "../assets/components/navbar";
import { Footer } from "../assets/components/Footer";

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <Navbarr />
      <Hero />
      <KategoriBelajar />
      <KursusPopuler />
      <Footer />
    </div>
  );
};
