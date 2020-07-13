import styled from "styled-components";
import Image from "../Image";

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
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const SearchIconComponent = styled(Image)`
  @media (min-width: 768px) {
    width: 20px;
  }
`;

export { Container, Input, SearchIconComponent };
