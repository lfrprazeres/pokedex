import styled from "styled-components";
import { Image } from "../../../Components";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Option = styled.button`
  cursor: pointer;
  margin-left: 9px;
`;

const Icon = styled(Image)`
  @media (min-width: 768px) {
    width: 26px;
  }
`;

export { Container, Option, Icon };
