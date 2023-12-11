import { Link, Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import React from "react";

import { Link as RouterLink } from "react-router-dom";

const NavbarBurger = () => {
  const menuItems = [
    { label: "Profile Saya", path: "/WebAkunProfil" },
    { label: "Ubah Password", path: "/WebUbahPassword" },
    { label: "Riwayat Pembayaran", path: "/WebRiwayatPembayaran" },
  ];

  const navbarStyle = {
    backgroundColor: "#116E63", // Sesuaikan dengan warna latar belakang dan tingkat transparansi yang diinginkan
  };

  return (
    <div>
      <Navbar disableAnimation isBordered style={navbarStyle}>
        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          {/* <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand> */}
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {/* <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand> */}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              {index !== menuItems.length - 1 ? (
                <RouterLink to={item.path} className="w-full">
                  {item.label}
                </RouterLink>
              ) : (
                <a className="w-full" href={item.path} color="danger" size="lg">
                  {item.label}
                </a>
              )}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};
export default NavbarBurger;
