import styled from "styled-components";
import { Image } from "../../Components";

const Container = styled.div`
  background-color: ${(props) => props.bg};
  background-image: url(${require("../../assets/images/aboutBackground.png")});
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 93px;
  background-size: 32px;
  overflow: hidden;
  position: relative;
  width: 100vw;
`;

const BackgroundName = styled.p`
  color: transparent;
  font-size: 3.5rem;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: 10px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 0.5)),
    to(rgba(0, 0, 0, 0))
  );
  width: 100%;
  &::before {
    content: "";
    margin-left: -100%;
  }
  &::after {
    content: "";
    margin-right: -100%;
  }
  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const Header = styled.div`
  display: flex;
  margin-top: 52px;
  padding: 0 24px;
`;

const PokemonImage = styled(Image)`
  background-image: url(${require("../../assets/images/pokemonBackground.png")});
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: 768px) {
    width: 100px;
  }
`;

const PokemonInfoContainer = styled.div`
  padding: 6px 0 0 16px;
  @media (min-width: 768px) {
    & > p {
      font-size: 20px;
    }
    & > div & > div {
      padding: 5px 10px;
      & > img {
        width: 16px;
      }
      & > p {
        font-size: 16px;
      }
    }
  }
`;

export {
  Container,
  BackgroundName,
  Header,
  PokemonImage,
  PokemonInfoContainer,
};
