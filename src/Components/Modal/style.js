import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  /* display: ${(props) => (props.visible ? "block" : "none")}; */
  height: 100vh;
  position: fixed;
  transition: .4s ease;
  top: 0;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  width: 100vw;
  z-index: 3;
`;

export { Container };
