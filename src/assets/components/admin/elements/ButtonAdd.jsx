import React, { useEffect, useState } from "react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import getCourse from "../../../../redux/action/admin/Addcourse";
import { toast } from "react-toastify";
import DataDAtaM from "../../../../redux/action/admin/Getmentor";
import GetIdCategories from "../../../../redux/action/admin/Getcategories";
import IcAdd from "../../../img/gala_add.png";

export const ButtonAdd = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedKeysTipeClass, setSelectedKeysTipeClass] = useState(new Set(["Categori id"]));
  const [selectedLevel, setSelectedLevel] = useState(new Set(["level"]));
  const [selectedType, setSelectedType] = useState(new Set(["type"]));
  const [selectedLvlClasss, setSelectedLvlClasss] = useState(new Set(["mentor id"]));
  const selectedValueLvlClass = Array.from(selectedLevel).join(", ").replaceAll("_", " "); // Perbaikan pada baris ini
  const [category_id, setcategory_id] = useState("");
  const [name, setname] = useState("");
  const [desc, setdesc] = useState("");
  const [price, setprice] = useState("");
  const [intended_for, setintended_for] = useState("");
  const [mentor_id, setmentor_id] = useState("");
  const dispatch = useDispatch();

  const addcourse = async () => {
    const success = await dispatch(
      getCourse({
        category_id: category_id,
        name: name,
        desc: desc,
        price: price,
        level: selectedValueLvlClass, // Perbaikan pada baris ini
        type: Array.from(selectedType).join(", ").replaceAll("_", " "),
        intended_for: intended_for,
        mentor_id: mentor_id,
      })
    );
    if (success) {
      toast.success("Berhasil menambahkan kelas");
    } else {
      toast.warning("Gagal menambahkan kelas");
    }
  };

  useEffect(() => {
    dispatch(DataDAtaM());
  }, []);
  const dataM = useSelector((state) => state.DataMentor.MentorGet.mentors);

  useEffect(() => {
    dispatch(GetIdCategories());
  }, []);
  const dataC = useSelector((state) => state.Categories.Categories.categories);

  return (
    <div>
      <Button onPress={onOpen} className="bg-[#116E63] text-white">
        <img src={IcAdd} alt="" />
        Tambah Course
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent className="mb-20">
          {(onClose) => (
            <div>
              <ModalHeader className="flex flex-col items-center font-bold text-2xl text-[#116E63] gap-1">Tambah Kelas</ModalHeader>
              <ModalBody>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="capitalize">
                      {selectedKeysTipeClass}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Single selection example" variant="flat" disallowEmptySelection selectionMode="single" selectedKeys={selectedKeysTipeClass} onSelectionChange={setSelectedKeysTipeClass}>
                    {dataC &&
                      dataC.map((courses) => (
                        <DropdownItem onClick={() => setcategory_id(courses.id)} id="category_id" key={courses.id}>
                          {courses.name}
                        </DropdownItem>
                      ))}
                  </DropdownMenu>
                </Dropdown>
                <Input type="text" label="Nama Kelas" onChange={(e) => setname(e.target.value)} id="name" />
                <Input type="text" label="deskripsi" onChange={(e) => setdesc(e.target.value)} id="desc" />
                <Input type="number" label="price" onChange={(e) => setprice(parseFloat(e.target.value))} id="price" />
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="capitalize">
                      {selectedLevel}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Single selection example" variant="flat" disallowEmptySelection selectionMode="single" selectedKeys={selectedLevel} onSelectionChange={setSelectedLevel}>
                    <DropdownItem key="Beginner">Beginner</DropdownItem>
                    <DropdownItem key="Intermediate">Intermediate</DropdownItem>
                    <DropdownItem key="Advanced">Advanced</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="capitalize">
                      {selectedType}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Single selection example" variant="flat" disallowEmptySelection selectionMode="single" selectedKeys={selectedType} onSelectionChange={setSelectedType}>
                    <DropdownItem key="isFree">isFree</DropdownItem>
                    <DropdownItem key="isPremium">isPremium</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Input type="text" onChange={(e) => setintended_for(e.target.value)} label="intended_for" id="intended_for" />
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="capitalize">
                      {selectedLvlClasss}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Single selection example" variant="flat" disallowEmptySelection selectionMode="single" selectedKeys={selectedLvlClasss} onSelectionChange={setSelectedLvlClasss}>
                    {dataM &&
                      dataM.map((courses) => (
                        <DropdownItem onClick={() => setmentor_id(courses.id)} id="mentor_id" key={courses.id}>
                          {courses.name}
                        </DropdownItem>
                      ))}
                  </DropdownMenu>
                </Dropdown>
              </ModalBody>
              <ModalFooter className="flex flex-row justify-between">
                <Button
                  color="danger"
                  onPress={onClose}
                  onClick={() => {
                    addcourse();
                  }}
                >
                  Simpan
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
