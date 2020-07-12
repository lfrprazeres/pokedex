import styled from "styled-components";

const Options = styled.div`
  padding-top: 18px;
`;

const Option = styled.button`
  background-color: ${(props) => (props.active ? "#ea5d60" : "#F2F2F2")};
  border-radius: 4px;
  box-shadow: ${(props) =>
    props.active && "0px 10px 20px rgba(234, 93, 96, 0.3);"};
  color: ${(props) => (props.active ? "white" : "#747476")};
  cursor: pointer;
  font-size: 7.5px;
  height: 29px;
  margin-bottom: 11px;
  width: 100%;
`;

export { Options, Option };
