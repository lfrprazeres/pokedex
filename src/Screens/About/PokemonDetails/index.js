import React, { useState } from "react";
import { Container, SideMenu, MenuChoice, Content, BackIcon } from "./style";
import ChosenInfo from "./ChosenInfo";
import { useHistory } from "react-router-dom";

function PokemonDetails(props) {
  const { pokemon, screenColor } = props;
  const [highlight, setHighlight] = useState("About");
  const infos = ["About", "Stats", "Evolution"];
  const history = useHistory();
  return (
    <Container>
      <BackIcon
        onClick={() => history.push("/pokedex")}
        size={"10px"}
        source={require("../../../assets/images/icons/back.svg")}
      />
      <SideMenu>
        {infos.map((info, key) => (
          <MenuChoice
            key={key}
            highlight={info === highlight}
            onClick={() => setHighlight(info)}
          >
            {info}
          </MenuChoice>
        ))}
      </SideMenu>
      <Content>
        <ChosenInfo
          pokemon={pokemon}
          info={highlight}
          screenColor={screenColor}
        />
      </Content>
    </Container>
  );
}

export default PokemonDetails;
