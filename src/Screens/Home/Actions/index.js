import React from "react";
import Filter from "../../../assets/images/icons/Filter.svg";
import Sort from "../../../assets/images/icons/Sort.svg";
import Generation from "../../../assets/images/icons/Generation.svg";
import { Container, Option, Icon } from "./style";

export default function Actions(props) {
  const { setModalOption } = props;
  const iconSize = "13px";
  return (
    <Container>
      <Option onClick={() => setModalOption("generation")}>
        <Icon source={Generation} alt="generation" size={iconSize} />
      </Option>
      <Option onClick={() => setModalOption("sort")}>
        <Icon source={Sort} alt="sort" size={iconSize} />
      </Option>
      <Option onClick={() => setModalOption("filter")}>
        <Icon source={Filter} alt="filter" size={iconSize} />
      </Option>
    </Container>
  );
}
