import styled from "styled-components";
import Image from "../Image";

const PokemonOrder = styled.p`
  color: rgba(23, 23, 27, 0.6);
  font-size: 7px;
  font-weight: bold;
`;

const PokemonName = styled.p`
  color: white;
  font-size: ${(props) => props.size || "14px"};
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

export { PokemonOrder, PokemonName, PokemonTypes, PokemonImage };
