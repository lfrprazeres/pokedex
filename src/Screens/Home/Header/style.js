import styled from "styled-components";

const Container = styled.div`
  margin: 17px 0 0 0;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 16px;
  letter-spacing: 1px;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  font-size: 8px;
  margin-top: 5px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export { Container, Title, Description };
