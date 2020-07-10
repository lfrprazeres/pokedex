import styled from "styled-components";
import Image from "../Image";

const Container = styled.div`
  align-items: center;
  background-color: #181b1d;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const LoadingGif = styled(Image)`
  max-width: 500px;
`;

export { Container, LoadingGif };
