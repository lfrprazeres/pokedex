import styled from "styled-components";
import background from "../../assets/images/pokeballBackground.png";
import InfiniteLoadingList from "react-simple-infinite-loading";
import { Search } from "../../Components";

const HomeComponent = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100% auto;
  height: 100vh;
  overflow-y: hidden;
  padding: 20px;
`;

const HomeSearch = styled(Search)`
  margin-bottom: 23px;
`;

const PokemonCards = styled(InfiniteLoadingList)`
  margin-top: 22px;
`;

export { HomeComponent, HomeSearch, PokemonCards };
