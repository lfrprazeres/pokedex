import React from "react";
import Stats from "./Stats";

function ChosenInfo(props) {
  const { info, screenColor, pokemon } = props;
  switch (info) {
    case "About": {
      return <div> About </div>;
    }
    case "Stats": {
      return <Stats screenColor={screenColor} pokemon={pokemon} />;
    }
    case "Evolution": {
      return <div> Evolution </div>;
    }
    default:
      return null;
  }
}

export default ChosenInfo;
