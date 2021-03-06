import styled from "styled-components";
import { Image } from "../../../../Components";

const Topic = styled.h1`
  font-size: 8.9px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const Types = styled.button`
  display: flex;
  flex-wrap: wrap;
  padding-top: 5px;
`;

const Type = styled.div`
  align-items: center;
  background-color: ${(props) => (props.active ? props.bg : "white")};
  box-shadow: ${(props) => props.active && `0px 2px 6px ${props.bg}`};
  border-radius: 50%;
  display: flex;
  height: 25px;
  justify-content: center;
  margin: 0 5px 5px 0;
  width: 25px;
  @media (min-width: 414px) {
    height: 30px;
    width: 30px;
  }
  @media (min-width: 768px) {
    height: 50px;
    width: 50px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

const Reset = styled.button`
  background-color: #f2f2f2;
  border-radius: 6px;
  color: #747476;
  font-size: 7.9px;
  margin-right: 6px;
  padding: 10.5px 30px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const Apply = styled.button`
  background-color: #ea5d60;
  box-shadow: 0px 10px 20px rgba(234, 93, 96, 0.3);
  border-radius: 6px;
  color: white;
  font-size: 7.9px;
  padding: 10.5px 30px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const FilterImage = styled(Image)`
  @media (min-width: 414px) {
    width: 16px;
  }
  @media (min-width: 768px) {
    width: 30px;
  }
`;

export { Topic, Types, Type, Buttons, Reset, Apply, FilterImage };
