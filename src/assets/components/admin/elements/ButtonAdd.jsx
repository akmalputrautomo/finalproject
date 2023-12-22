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

export const ButtonAdd = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
    <div>
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

        <ModalContent className="mb-20">
          {(onClose) => (
            <div>
              <ModalHeader className="flex flex-col items-center font-bold text-2xl text-[#116E63] gap-1">
                Tambah Kelas
              </ModalHeader>
              <ModalBody>
                <Input type="text" label="Nama Kelas" />
                <Input type="text" label="Kategori" />
                <Input type="text" label="Kode Kelas" />
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
                    selectedKeys={selectedKeysTipeClass}
                    onSelectionChange={setSelectedLvlClass}
                  >
                    <DropdownItem key="beginner">Beginner</DropdownItem>
                    <DropdownItem key="intermediate">Intermediate</DropdownItem>
                    <DropdownItem key="advanced">Advanced</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Input type="text" label="Harga" />
                <Input type="text" label="Materi" />
              </ModalBody>
              <ModalFooter className="flex flex-row justify-between">
                <Button color="danger" onPress={onClose}>
                  Upload Video
                </Button>
                <Button color="primary" onPress={onClose}>
                  Add
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
