import styled from "styled-components";
import { Image } from "../../../../Components";

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 40px;
  padding-top: 16px;
  width: 105%;
  @media (min-width: 768px) {
    justify-content: space-between;
    margin: 0 auto;
    width: 90%;
  }
`;

const Generation = styled.button`
  align-items: center;
  background-color: ${(props) => (props.active ? "#ea5d60" : "#F2f2f2")};
  border-radius: 7px;
  box-shadow: ${(props) =>
    props.active && "0px 10px 20px rgba(234, 93, 96, 0.3)"};
  display: flex;
  flex-direction: column;
  height: 66px;
  justify-content: center;
  margin: 0 7px 10px 0;
  position: relative;
  width: 80px;
  &:before {
    background-image: url(${require("../../../../assets/images/icons/generations/Pokeball.svg")});
    background-position-x: 100%;
    background-position-y: 100%;
    background-repeat: no-repeat;
    background-size: 50%;
    content: "";
    height: 100%;
    position: absolute;
    width: 100%;
  }
  &:after {
    background-image: url(${require("../../../../assets/images/icons/generations/Pattern.svg")});
    background-position-x: 7px;
    background-repeat: no-repeat;
    background-size: 50%;
    content: "";
    height: 40px;
    left: 0;
    position: absolute;
    top: 7px;
    width: 100%;
  }
  @media (min-width: 768px) {
    height: 136px;
    margin: 0 0 20px 0;
    width: 150px;
  }
`;

const GenerationText = styled.span`
  bottom: 10px;
  color: ${(props) => (props.active ? "white" : "#747476")};
  font-size: 7.5px;
  position: absolute;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const Reset = styled.button`
  background-color: #f2f2f2;
  border-radius: 6px;
  bottom: 10px;
  color: #747476;
  font-size: 7.9px;
  left: 50%;
  margin-right: 0 auto;
  padding: 10.5px 30px;
  position: absolute;
  transform: translate(-50%, -50%);
  @media (min-width: 768px) {
    font-size: 18px;
    padding: 20px 60px;
  }
`;

const GenerationImage = styled(Image)`
  margin-top: -10px;
  @media (min-width: 768px) {
    width: 140px;
  }
`;

export { Content, Generation, GenerationText, Reset, GenerationImage };
