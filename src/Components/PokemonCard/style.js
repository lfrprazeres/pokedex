import styled from "styled-components";
import Image from "../Image";
import CardBackground from "../../assets/images/cardBackground.png";

const Container = styled.button`
  background-color: ${(props) => props.bg};
  background-image: url(${CardBackground});
  background-repeat: no-repeat;
  background-size: 100% auto;
  cursor: pointer;
  border-radius: 6px;
  height: 58px;
  margin-bottom: 15px;
  padding: 10px 9px;
  position: relative;
  text-align: initial;
  width: 100%;
  @media (min-width: 768px) {
    height: 65px;
    background-size: 60% auto;
    background-position-x: 100%;
  }
`;

const PokemonImage = styled(Image)`
  position: absolute;
  right: 8px;
  top: -10px;
  @media (min-width: 768px) {
    width: 70px;
  }
`;

export { Container, PokemonImage };
