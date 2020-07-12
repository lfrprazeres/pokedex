import React, { useState, useEffect } from "react";
import Stats from "./Stats";
import About from "./About";
import getData from "./utils/getData";
import Evolution from "./Evolution";

function ChosenInfo(props) {
  const { info, screenColor, pokemon } = props;
  const [about, setAbout] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState(null);
  const [evolutions, setEvolutions] = useState(null);
  const [stats, setStats] = useState({
    normal: "",
    fire: "",
    water: "",
    electric: "",
    grass: "",
    ice: "",
    fighting: "",
    poison: "",
    ground: "",
    flying: "",
    psychic: "",
    bug: "",
    rock: "",
    ghost: "",
    dragon: "",
    dark: "",
    steel: "",
    fairy: "",
  });

  useEffect(() => {
    let statsData =
      Object.values(stats).filter((stat) => stat !== "").length > 0;
    if (!statsData) {
      getData.getStats(pokemon, stats, setStats);
    }
    if (info === "About") {
      if (!about)
        getData.getAbout(
          pokemon,
          about,
          setAbout,
          evolutionChain,
          setEvolutionChain
        );
    } else if (info === "Evolution") {
      if (!evolutions && evolutionChain) {
        getData.getEvolution(evolutionChain, setEvolutions);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info]);

  switch (info) {
    case "About": {
      return (
        <About
          screenColor={screenColor}
          pokemon={pokemon}
          about={about}
          stats={stats}
        />
      );
    }
    case "Stats": {
      return (
        <Stats screenColor={screenColor} pokemon={pokemon} stats={stats} />
      );
    }
    case "Evolution": {
      return <Evolution screenColor={screenColor} evolutions={evolutions} />;
    }
    default:
      return null;
  }
}

export default ChosenInfo;
