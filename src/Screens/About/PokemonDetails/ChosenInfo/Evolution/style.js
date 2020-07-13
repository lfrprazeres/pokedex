import styled from "styled-components";
import { Image } from "../../../../../Components";

const EvolutionsContainer = styled.div`
  padding-top: 3px;
  @media (min-width: 768px) {
    margin: 0 auto;
    width: 70%;
  }
`;

const Content = styled.div`
  display: flex;
  margin-bottom: 14px;
  justify-content: space-between;
`;

const From = styled.div``;

const PokemonImageContainer = styled.div`
  align-items: center;
  background-image: url(${require("../../../../../assets/images/evolutionPokeball.png")});
  background-size: cover;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 50px;
  @media (min-width: 768px) {
    height: 100px;
    width: 100px;
    & > div {
      width: 85px;
    }
  }
`;

const Id = styled.p`
  font-size: 6px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const PokemonName = styled.p`
  font-size: 9px;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const LevelContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const LevelImage = styled(Image)`
  margin-top: -17px;
  @media (min-width: 768px) {
    width: 50px;
  }
`;

const Level = styled.p`
  align-self: center;
  font-size: 7px;
  font-weight: bold;
  letter-spacing: -0.3px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const To = styled.div`
  margin-left: 1px;
`;

export {
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
};
