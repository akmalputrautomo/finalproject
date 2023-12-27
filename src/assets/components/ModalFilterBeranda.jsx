import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { FilterKelasBeranda } from "../components/FilterKelasBeranda";

const ModalFilterBeranda = ({ isOpen, onOpenChange, scrollBehavior, setFilteredCourses }) => {
  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior={scrollBehavior} className="block desktop:hidden">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Filter</ModalHeader>
              <ModalBody>
                <FilterKelasBeranda setFilteredCourses={setFilteredCourses} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
export default ModalFilterBeranda;
