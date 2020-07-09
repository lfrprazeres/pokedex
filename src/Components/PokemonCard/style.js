import styled from "styled-components";
import Image from "../Image";
import CardBackground from "../../assets/images/cardBackground.png";

const Container = styled.div`
  background-color: ${(props) => props.bg};
  background-image: url(${CardBackground});
  background-repeat: no-repeat;
  background-size: 100% auto;
  border-radius: 6px;
  height: 58px;
  margin-bottom: 15px;
  padding: 10px 9px;
  position: relative;
  width: 100%;
`;

const PokemonOrder = styled.p`
  color: rgba(23, 23, 27, 0.6);
  font-size: 7px;
  font-weight: bold;
`;

const PokemonName = styled.p`
  color: white;
  font-size: 14px;
  font-weight: bold;
  margin-left: 1px;
  margin-top: -1px;
  text-transform: capitalize;
`;

const PokemonTypes = styled.div`
  display: flex;
  margin: 2px 0 0 1px;
`;

const PokemonImage = styled(Image)`
  position: absolute;
  right: 8px;
  top: -10px;
`;

export { Container, PokemonOrder, PokemonName, PokemonTypes, PokemonImage };
