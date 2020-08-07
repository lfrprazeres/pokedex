import styled from "styled-components";
import { Image } from "../../../Components";

const Container = styled.div`
  margin-top: 23px;
`;

const BackIcon = styled(Image)`
  cursor: pointer;
  position: absolute;
  left: 20px;
  top: 20px;
  @media (min-width: 768px) {
    width: 20px;
  }
  > img {
    cursor: pointer;
  }
`;

const SideMenu = styled.nav`
  display: flex;
  height: 30px;
`;

const MenuChoice = styled.button`
  background-image: ${(props) =>
    props.highlight &&
    `url(${require("../../../assets/images/navbarHighlight.png")})`};
  background-position-x: 50%;
  background-position-y: 2px;
  background-repeat: no-repeat;
  background-size: 51px;
  color: white;
  font-size: 8px;
  flex: 1;
  opacity: ${(props) => (props.highlight ? "1" : "0.5")};
  transition: 0.2s ease opacity;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const Content = styled.div`
  background-color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 100%;
  margin-top: -2.8px;
  padding: 14px 20px;
  width: 100vw;
`;

export { Container, BackIcon, SideMenu, MenuChoice, Content };
