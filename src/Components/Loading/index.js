import React from "react";
import { Container, LoadingGif } from "./style";

function Loading() {
  return (
    <Container>
      <LoadingGif
        source={require("../../assets/gifs/pokeball_loading.gif")}
        size={"100%"}
      />
    </Container>
  );
}

export default Loading;
