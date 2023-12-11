import React from "react";
import Navbar from "../assets/components/navbar";
import { KategoriBelajar } from "../assets/components/KategoriBelajar";
import Hero from "../assets/components/Hero";
import { KursusPopuler } from "../assets/components/KursusPopuler";

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <KategoriBelajar />
      <KursusPopuler />
    </div>
  );
};
