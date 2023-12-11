import React, { useState } from "react";
import Logo from "../../img/Logo.png";
import Dashboard from "../../img/ic_dashboard.png";
import ManageClass from "../../img/manage_accounts.png";
import IconLogOut from "../../img/log-out.png";
import IcAdd from '../../img/gala_add.png'
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { ButtonFilter } from "./elements/ButtonFilter";
import { Button } from '../admin/elements/Button'
import { ButtonAdd } from "./elements/ButtonAdd";

const SideBar = () => {
  const [states, setStates] = useState({
    DashBoard: true,
    KelolaKelas: false,
    RiwayatPembayaran: false,
  });

  function handleclick(clickedState) {
    setStates((prevState) => {
      // Mengatur semua state menjadi false
      const newStates = {
        DashBoard: false,
        KelolaKelas: false,
        RiwayatPembayaran: false,
      };

      // Mengatur state yang diklik menjadi true
      newStates[clickedState] = true;

      return newStates;
    });
  }

  return (
    <div className="static flex flex-row gap-[150px]">
      <div className="absolute flex flex-col top-0 left-0 h-full w-1/5 bg-[#F3F3F3] text-black items-center pt-[30px] gap-[30px]">
        <div className="w-[10rem] h-[3rem]">
          <img src={Logo} alt="" />
        </div>
        <div className="flex flex-col gap-5 font-bold p-10">
          <div className="flex flex-row gap-2">
            <img src={Dashboard} alt="" />
            <button onClick={() => handleclick("DashBoard")}>Dashboard</button>
          </div>
          <div className="flex flex-row gap-2">
            <img src={ManageClass} alt="" />
            <button onClick={() => handleclick("KelolaKelas")}>
              Kelola Kelas
            </button>
          </div>
          <div className="flex flex-row gap-2">
            <img src={IconLogOut} alt="" />
            <button>Keluar</button>
          </div>
        </div>
      </div>
      <div className="w-[50%] ">
        {/* Dashboard */}
        {states.DashBoard && (
          <div className="flex flex-col ms-[440px] mt-[50px] bg-[#FFFFFF] w-[102vh] rounded-[10px] gap-10 ">
            <div className="flex flex-row items-center mt-[30px] w-full h-[100px] justify-between">
              <div>
                <span className="font-bold ms-5 text-2xl">
                  Status Pembayaran
                </span>
              </div>
              <div className="flex flex-row gap-2 me-[20px]">
                <ButtonFilter />
              </div>
            </div>
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn className="text-black">ID</TableColumn>
                <TableColumn className="text-black">Kategori</TableColumn>
                <TableColumn className="text-black">Kelas Premium</TableColumn>
                <TableColumn className="text-black">Status</TableColumn>
                <TableColumn className="text-black">
                  Metode Pembayaran
                </TableColumn>
                <TableColumn className="text-black">Tanggal Bayar</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>johndoe123</TableCell>
                  <TableCell>UI/UX Design</TableCell>
                  <TableCell>Belajar Web Designer dengan Figma</TableCell>
                  <TableCell>SUDAH BAYAR</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>21 Sep, 2023 at 2:00 AM</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>supermanxx</TableCell>
                  <TableCell>UI/UX Design</TableCell>
                  <TableCell>Belajar Web Designer dengan Figma</TableCell>
                  <TableCell className="text-red-400">BELUM BAYAR</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}
        {/* Kelola Kelas */}
        {states.KelolaKelas && (
          <div className="flex flex-col ms-[440px] mt-[50px] bg-[#FFFFFF] w-[102vh] rounded-[10px] gap-10 ">
            <div className="flex flex-row items-center mt-[30px] w-full h-[100px] justify-between">
              <div>
                <span className="font-bold ms-5 text-2xl">
                Kelola Kelas
                </span>
              </div>
              <div className="flex flex-row gap-2 me-[20px]">
                <ButtonAdd/>
                <ButtonFilter />
              </div>
            </div>
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn className="text-black">Kode Kelas</TableColumn>
                <TableColumn className="text-black">Kategori</TableColumn>
                <TableColumn className="text-black">Nama Kelas</TableColumn>
                <TableColumn className="text-black">Tipe Kelas</TableColumn>
                <TableColumn className="text-black">Level</TableColumn>
                <TableColumn className="text-black">Harga Kelas</TableColumn>
                <TableColumn className="text-black">Aksi</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>UIUX0123</TableCell>
                  <TableCell>UI/UX Design</TableCell>
                  <TableCell>Belajar Web Designer dengan Figma</TableCell>
                  <TableCell>GRATIS</TableCell>
                  <TableCell>Beginner</TableCell>
                  <TableCell>Rp 0</TableCell>
                  <TableCell><Button/></TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>DS0323</TableCell>
                  <TableCell>Data Science</TableCell>
                  <TableCell>Data Cleaning untuk Professional</TableCell>
                  <TableCell className="text-red-400">PREMIUM</TableCell>
                  <TableCell>Advanced</TableCell>
                  <TableCell>Rp 299,000</TableCell>
                  <TableCell><Button/></TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>supermanxx</TableCell>
                  <TableCell>UI/UX Design</TableCell>
                  <TableCell>Belajar Web Designer dengan Figma</TableCell>
                  <TableCell className="text-red-400">BELUM BAYAR</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell><Button/></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
