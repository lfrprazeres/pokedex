import React from "react";
import { Topic } from "../About/style";
import {
  EvolutionsContainer,
  Content,
  From,
  PokemonImageContainer,
  Id,
  PokemonName,
  LevelContainer,
  LevelImage,
  Level,
  To,
} from "./style";
import { Image } from "../../../../../Components";

function Evolution(props) {
  const { evolutions, screenColor } = props;
  function formatId(id) {
    let idLength = id.trim().length;
    switch (idLength) {
      case 1:
        return `#00${id}`;
      case 2:
        return `#0${id}`;
      default:
        return `#${id}`;
    }
  }
  return (
    <>
      <Topic color={screenColor}>Evolution Chart</Topic>
      <EvolutionsContainer>
        {evolutions?.map((evolution, key) => {
          return (
            <Content key={key}>
              <From>
                <PokemonImageContainer>
                  <Image
                    source={`https://pokeres.bastionbot.org/images/pokemon/${evolution.fromId}.png`}
                    size={"34px"}
                  />
                </PokemonImageContainer>
                <Id>{formatId(evolution.fromId)}</Id>
                <PokemonName>{evolution.from}</PokemonName>
              </From>
              <LevelContainer>
                <LevelImage
                  source={require("../../../../../assets/images/levelUp.png")}
                  size={"15px"}
                />
                <Level>(Level {evolution.level})</Level>
              </LevelContainer>
              <To>
                <PokemonImageContainer>
                  <Image
                    source={`https://pokeres.bastionbot.org/images/pokemon/${evolution.toId}.png`}
                    size={"30px"}
                  />
                </PokemonImageContainer>
                <Id>{formatId(evolution.toId)}</Id>
                <PokemonName>{evolution.to}</PokemonName>
              </To>
            </Content>
          );
        })}
      </EvolutionsContainer>
    </>
  );
}
export default Evolution;
