import React from "react";
import Navbar from "../assets/components/navbar";
import { KategoriBelajar } from "../assets/components/KategoriBelajar";
import Hero from "../assets/components/Hero";
import NavbarAfterLogin from "../assets/components/NavbarAfterLogin";
import NavbarNotifikasi from "../assets/components/NavbarNotifikasi";
import { DetailKelas } from "../assets/components/DetailKelas";
import { DetailKelasPembayaran } from "../assets/components/DetailKelasPembayaran";
import { KursusPopuler } from "../assets/components/KursusPopuler";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <KategoriBelajar />
      <KursusPopuler/>
    </div>
  );
};
