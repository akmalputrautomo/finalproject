import React, { useEffect, useState } from "react";
import Logo from "../../img/Logo.png";
import Dashboard from "../../img/ic_dashboard.png";
import ManageClass from "../../img/manage_accounts.png";
import IconLogOut from "../../img/log-out.png";
import IcAdd from "../../img/gala_add.png";
import { Table, TableBody, TableCell, TableColumn, TableColumn as TableColumnNext, TableHeader, TableRow } from "@nextui-org/react";

import { ButtonFilter } from "./elements/ButtonFilter";
import { ButtonAdd } from "./elements/ButtonAdd";
import { ButtonKategori } from "./elements/ButtonKategori";
import { ButtonMentor } from "./elements/ButtonMentor";
import { ButtonLesson } from "./elements/ButtonLesson";
import { ButtonChapter } from "./elements/ButtonChapter";
import { useDataKelolaKelas } from "../../../services/admin/KelolaKelas";
import { useDispatch, useSelector } from "react-redux";
import getDeletecourse from "../../../redux/action/admin/Deletecourse";
import { useDataUpdateCourse } from "../../../services/admin/UbahCourse";
import { useParams } from "react-router-dom";

const SideBar = () => {
  const { data } = useDataKelolaKelas({
    // CategoryId : ,
    // level:,
    // type:,
  });

  const Kelola = data ? data.data.course : [];
  const [editedIndex, setEditedIndex] = useState(-1);
  const { mutate: UpdateCourses } = useDataUpdateCourse();
  const [name, setname] = useState("");
  const [desc, setdesc] = useState("");
  const [price, setprice] = useState("");
  const [level, setlevel] = useState("");
  const [type, settype] = useState("");
  const [intended_for, setintended_for] = useState("");
  const [id, setid] = useState("");
  // const [edit, setedit] = useState(false);
  const dispatch = useDispatch();

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

  const dataUsers = useSelector((state) => state.FilterAdm);
  console.log(dataUsers, "Data Users")


  const CourseUbah = (courseId) => {
    UpdateCourses({
      id: courseId,
      name: name,
      desc: desc,
      price: price,
      level: level,
      type: type,
      intended_for: intended_for,
    });
  };

  useEffect(() => {
    dispatch(getDeletecourse());
  }, []);

  const deletea = (courseId) => {
    dispatch(getDeletecourse(courseId));
  };

  return (
    <div className="static flex flex-row gap-[150px] bg-[#F8F8F8] w-full h-[30.5rem] ">
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
            <img width={27} height={12} src={ManageClass} alt="" />
            <button onClick={() => handleclick("KelolaKelas")}>Kelola Kelas</button>
          </div>
          <div className="flex flex-row gap-2">
            <img src={IconLogOut} alt="" />
            <button>Keluar</button>
          </div>
        </div>
      </div>
      <div className="">
        {/* Dashboard */}
        {/* {states.DashBoard && (
          <div className="flex flex-col justify-center  ms-[398px]   bg-[#FFFFFF] w-[80%] rounded-[10px] gap-10 ">
            <div className="flex flex-row items-center w-full h-[60px] justify-between">
              <div>
                <span className="font-bold ms-5 text-2xl">Status Pembayaran</span>
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
                <TableColumn className="text-black">Metode Pembayaran</TableColumn>
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
        )} */}
        {/* Kelola Kelas */}
        {states.KelolaKelas && (
          <div className="flex flex-col ms-[392px]   bg-[#FFFFFF] w-[80%] rounded-[10px] gap-10 ">
            <div className="flex flex-row items-center  w-full h-[100px] justify-between">
              <div>
                <span className="font-bold ms-5 text-2xl">Kelola Kelas</span>
              </div>
              <div className="flex flex-row gap-2 me-[20px]">
                <div className="flex justify-start flex-col gap-1">
                  <ButtonChapter />
                  <ButtonLesson />
                  <ButtonMentor />
                </div>
                <div className="flex justify-start flex-col gap-1">
                  <ButtonKategori />
                  <ButtonAdd />
                  <ButtonFilter />
                </div>
              </div>
            </div>
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn className="text-black">Kategori</TableColumn>
                <TableColumn className="text-black">Nama Kelas</TableColumn>
                <TableColumn className="text-black">intended_for</TableColumn>
                <TableColumn className="text-black">Tipe Kelas</TableColumn>
                <TableColumn className="text-black">Level</TableColumn>
                <TableColumn className="text-black">Harga Kelas</TableColumn>
                <TableColumn className="text-black">Aksi</TableColumn>
              </TableHeader>
              <TableBody>
                {Kelola.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {editedIndex === index ? (
                        <input
                          type="text"
                          value={name} // Gantilah dengan nilai yang sesuai
                          onChange={(e) => setname(e.target.value)}
                          id="name"
                        />
                      ) : (
                        item.category.name
                      )}
                    </TableCell>
                    <TableCell>
                      {editedIndex === index ? (
                        <input
                          type="text"
                          value={desc} // Gantilah dengan nilai yang sesuai
                          onChange={(e) => setdesc(e.target.value)}
                          id="desc"
                        />
                      ) : (
                        item.course.name
                      )}
                    </TableCell>
                    <TableCell>
                      {editedIndex === index ? (
                        <input
                          type="text"
                          value={intended_for} // Gantilah dengan nilai yang sesuai
                          onChange={(e) => setintended_for(e.target.value)}
                          id="intended_for"
                        />
                      ) : (
                        item.course.intended_for
                      )}
                    </TableCell>
                    <TableCell>
                      {editedIndex === index ? (
                        <input
                          type="text"
                          value={type} // Gantilah dengan nilai yang sesuai
                          onChange={(e) => settype(e.target.value)}
                          id="type"
                        />
                      ) : (
                        item.course.type
                      )}
                    </TableCell>
                    <TableCell>
                      {editedIndex === index ? (
                        <input
                          type="text"
                          value={level} // Gantilah dengan nilai yang sesuai
                          onChange={(e) => setlevel(e.target.value)}
                          id="level"
                        />
                      ) : (
                        item.course.level
                      )}
                    </TableCell>
                    <TableCell className="text-red-500">
                      {editedIndex === index ? (
                        <input
                          type="text"
                          value={price} // Gantilah dengan nilai yang sesuai
                          onChange={(e) => setprice(parseFloat(e.target.value))}
                          id="price"
                        />
                      ) : (
                        item.course.price
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-row gap-1 text-white">
                        {editedIndex === index ? (
                          <button
                            onClick={() => {
                              CourseUbah(item.course.id);
                              // Panggil fungsi Ubah() di sini jika diperlukan
                              // setedit(false); // Ganti kembali ke tampilan non-edit setelah simpan
                              setEditedIndex(-1);
                            }}
                            className="bg-[#116E63] rounded-[10px] p-1 w-[60px]"
                          >
                            Simpan
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              // setedit(true); // Aktifkan mode edit saat tombol "Ubah" ditekan
                              setEditedIndex(index);
                              setname(item.category.name);
                              setdesc(item.course.name);
                              setintended_for(item.course.intended_for);
                              settype(item.course.type);
                              setlevel(item.course.level);
                              setprice(item.course.price);
                            }}
                            className="bg-[#116E63] rounded-[10px] p-1 w-[60px]"
                          >
                            Ubah
                          </button>
                        )}
                        <button
                          onClick={() => {
                            deletea(item.course.id);
                          }}
                          className="bg-[#DB1B1B] rounded-[10px] p-1 w-[60px]"
                        >
                          Hapus
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
