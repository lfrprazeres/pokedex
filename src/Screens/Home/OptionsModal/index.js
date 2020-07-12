import React from "react";
import { Modal } from "../../../Components";
import { ModalContainer } from "./style";
import Sort from "./Sort";
import Generations from "./Generations";

export default function OptionsModal(props) {
  const { modalOption, setModalOption } = props;
  function showContent() {
    switch (modalOption) {
      case "sort": {
        return <Sort setModalOption={setModalOption} />;
      }
      case "generation": {
        return <Generations setModalOption={setModalOption} />;
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
