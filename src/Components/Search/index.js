import React, { useState } from "react";
import { Container, Input } from "./style";
import SearchIcon from "../../assets/images/icons/Search.svg";
import Image from "../Image";

function Search(props) {
  return (
    <Container>
      <Image source={SearchIcon} size={12} />
      <Input
        type="text"
        value=""
        placeholder="What Pokémon are you looking for?"
      />
    </Container>
  );
}

export default Search;
