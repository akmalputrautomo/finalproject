import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import React from "react";
import { Router } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const NavbarBurger = () => {
  const menuItems = [
    { label: "Profile Saya", path: "/WebAkunProfil" },
    { label: "Ubah Password", path: "/WebUbahPassword" },
    { label: "Riwayat Pembayaran", path: "/WebRiwayatPembayaran" },
  ];

  return (
    <div>
      <Navbar disableAnimation isBordered>
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
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="warning">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
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
