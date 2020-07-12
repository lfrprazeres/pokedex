import React from "react";
import { Modal } from "../../../Components";
import { ModalContainer } from "./style";
import Sort from "./Sort";

export default function OptionsModal(props) {
  const { modalOption, setModalOption } = props;
  function showContent() {
    switch (modalOption) {
      case "sort": {
        return <Sort setModalOption={setModalOption} />;
      }
      default:
        return null;
    }
  }
  return (
    <Modal visible={modalOption}>
      <ModalContainer modalOption={modalOption}>{showContent()}</ModalContainer>
    </Modal>
  );
}
