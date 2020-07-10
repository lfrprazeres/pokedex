import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.bg};
  height: 100vh;
  overflow: hidden;
`;

const BackgroundName = styled.p`
  color: transparent;
  font-size: 3.5rem;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: 10px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 0.5)),
    to(rgba(0, 0, 0, 0))
  );
  width: 100vw;
  &::before {
    content: "";
    margin-left: -100%;
  }
  &::after {
    content: "";
    margin-right: -100%;
`;

export { Container, BackgroundName };
