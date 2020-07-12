import React from "react";
import { Modal } from "../../../Components";
import { ModalContainer } from "./style";
import Sort from "./Sort";
import Generations from "./Generations";
import Filters from "./Filters";

export default function OptionsModal(props) {
  const { modalOption, setModalOption, pokemonList } = props;
  function showContent() {
    switch (modalOption) {
      case "sort": {
        return <Sort setModalOption={setModalOption} />;
      }
      case "generation": {
        return <Generations setModalOption={setModalOption} />;
      }
      case "filter": {
        return (
          <Filters
            modalOption={modalOption}
            setModalOption={setModalOption}
            pokemonList={pokemonList}
          />
        );
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
