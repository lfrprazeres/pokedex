import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.bg};
  border-radius: 1px;
  display: flex;
  height: 12px;
  justify-content: flex-end;
  margin-right: 3px;
  padding: 0 1px 0 2px;
  position: relative;
`;

const TypeIcon = styled.img`
  left: 2px;
  width: 8px;
`;

const Text = styled.p`
  color: white;
  height: 100%;
  font-size: 6px;
  margin: 2px 2px 0 3px;
  text-align: center;
`;

export { Container, TypeIcon, Text };
