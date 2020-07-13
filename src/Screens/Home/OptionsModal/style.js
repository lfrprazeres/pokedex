import styled from "styled-components";

const ModalContainer = styled.div`
  background-color: white;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  bottom: ${(props) => (props.modalOption !== false ? "0" : "-56vh")};
  min-height: 56vh;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 14px 19px 14px 20px;
  position: fixed;
  transition: 0.5s ease-in-out;
  width: 100vw;
`;

const Title = styled.h1`
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  font-size: 8px;
  margin-top: 2px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export { ModalContainer, Title, Description };
