import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import IcAdd from "../../../img/gala_add.png";
import { useState } from "react";

export const ButtonAdd = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // const [title, setTitle] = useState("");
  // const [category, setCategory] = useState("");
  // const [kodeKelas, setKodeKelas] = useState("");
  // const [price, setPrice] = useState(0);
  // const [author, setAuthor] = useState("");
  // const [level, setLevel] = useState("beginner");
  // const [category_id, setCategoryId] = useState(1);
  // const [requirements, setrequirements] = useState([]);
  // const [InputRequirment, setInputRequirment] = useState("");
  // const [chapters, setChapters] = useState([]);

  // const [inputChapterName, setInputChapterName] = useState("");
  // const [inputModuleTitle, setInputModuleTitle] = useState("");
  // const [inputModuleDuration, setInputModuleDuration] = useState("");
  // const [inputModuleUrl, setInputModuleUrl] = useState("");
  // const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);

  const [selectedKeysTipeClass, setSelectedKeysTipeClass] = React.useState(
    new Set(["Tipe Class"])
  );
  const [selectedLvlClass, setSelectedLvlClass] = React.useState(
    new Set(["Level Class"])
  );

  const selectedValueTipeClass = React.useMemo(
    () => Array.from(selectedKeysTipeClass).join(", ").replaceAll("_", " "),
    [selectedKeysTipeClass]
  );
  const selectedValueLvlClass = React.useMemo(
    () => Array.from(selectedLvlClass).join(", ").replaceAll("_", " "),
    [selectedLvlClass]
  );
  return (
    <>
      <Button onPress={onOpen} className="bg-[#116E63] text-white">
        <img src={IcAdd} alt="" />
        Tambah
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col items-center font-bold text-2xl text-[#116E63] gap-1">
                Tambah Kelas
              </ModalHeader>
              <ModalBody>
                <Input type="text" label="Nama Kelas" id="title" />
                <Input type="text" label="Kategori" id="category" />
                <Input type="text" label="Kode Kelas" id="kodeKelas" />
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="capitalize">
                      {selectedValueTipeClass}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeysTipeClass}
                    onSelectionChange={setSelectedKeysTipeClass}
                  >
                    <DropdownItem key="free">Free</DropdownItem>
                    <DropdownItem key="premium">Premium</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="capitalize">
                      {selectedValueLvlClass}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedLvlClass}
                    onSelectionChange={setSelectedLvlClass}
                  >
                    <DropdownItem key="beginner">Beginner</DropdownItem>
                    <DropdownItem key="intermediate">Intermediate</DropdownItem>
                    <DropdownItem key="advanced">Advanced</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Input type="text" label="Harga" id="price" />
                <Input type="text" label="Materi" id="materi" />
              </ModalBody>
              <ModalFooter className="flex flex-row justify-between">
                <Button color="danger" onPress={onClose}>
                  Upload Video
                </Button>
                <Button color="primary" onPress={onClose}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
