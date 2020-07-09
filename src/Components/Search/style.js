import styled from "styled-components";

const Container = styled.div`
  background-color: #f2f2f2;
  border-radius: 7px;
  display: flex;
  margin-top: 12px;
  padding: 9px 0 9px 12px;
  width: 100%;
`;

const Input = styled.input`
  font-size: 7.3px;
  margin-left: 4px;
  width: 85%;
  &::-placeholder {
    color: "red";
  }
`;

export { Container, Input };
