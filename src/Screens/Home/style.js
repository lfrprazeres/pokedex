import styled from "styled-components";
import background from "../../assets/images/pokeballBackground.png";

const HomeComponent = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100% auto;
  height: 100vh;
  padding: 20px;
`;

const PokemonCards = styled.div`
  margin-top: 22px;
`;

export { HomeComponent, PokemonCards };
