import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.bg};
  border-radius: 1px;
  display: flex;
  height: 12px;
  justify-content: flex-end;
  margin-right: 5px;
  padding: 0 1px 0 2px;
  position: relative;
  @media (min-width: 768px) {
    height: auto;
    padding: 2px 3px;
  }
`;

const TypeIcon = styled.img`
  left: 2px;
  width: 7px;
  @media (min-width: 768px) {
    width: 12px;
  }
`;

const Text = styled.p`
  color: white;
  height: 100%;
  font-size: 6px;
  margin: 2px 2px 0 3px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 10px;
  }
`;

export { Container, TypeIcon, Text };
