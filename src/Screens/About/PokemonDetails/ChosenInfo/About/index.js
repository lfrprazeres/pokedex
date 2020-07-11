import React, { useState, useEffect } from "react";
import {
  Description,
  Topic,
  AboutContainer,
  AboutContent,
  Name,
  Value,
  SecondaryValue,
  FirstAbility,
  SecondaryAbility,
  Weaknesses,
  Weakness,
  Gender,
  Male,
  Female,
} from "./style";

function About(props) {
  const { pokemon, screenColor, about, stats } = props;
  const [weaknesses, setWeaknesses] = useState([]);

  useEffect(() => {
    if (stats) {
      setWeaknesses(
        Object.keys(stats).filter((stat, index) => stats[stat] === "2")
      );
    }
  }, [stats]);
  function getHeight(height) {
    let meters = height / 10;
    return (
      <Value>
        <div>
          {meters}m{"  "}
          <SecondaryValue>
            ({(meters / 0.3048).toFixed(2).replace(".", "'")}")
          </SecondaryValue>
        </div>
      </Value>
    );
  }
  function getWeight(weight) {
    let kg = weight / 10;
    return (
      <Value>
        <div>
          {kg}kg{"  "}{" "}
          <SecondaryValue>({(kg * 2.2046).toFixed(1)}lbs)</SecondaryValue>
        </div>
      </Value>
    );
  }

  function getAbilities() {
    let { abilities } = pokemon;
    return abilities.map((ability, key) => {
      if (ability.slot === 1) {
        return (
          <FirstAbility key={key}>
            {"1: " + ability.ability.name}
            {ability.is_hidden && <span>(hidden ability)</span>}
          </FirstAbility>
        );
      } else {
        return (
          <SecondaryAbility key={key}>
            {ability.ability.name}
            {"  "}
            {ability.is_hidden && (
              <span style={{ textTransform: "initial" }}>(hidden ability)</span>
            )}
          </SecondaryAbility>
        );
      }
    });
  }

  function getEffort() {
    let pokemonStats = pokemon.stats;
    let effort = pokemonStats.find((stat) => stat.effort > 0);
    return (
      <Value style={{ textTransform: "capitalize" }}>
        {effort.effort + " " + effort.stat.name.replace(/-/g, " ")}
      </Value>
    );
  }

  function getGender() {
    if (about) {
      switch (about.genderType) {
        default: {
          return (
            <Gender>
              <Male>♀ 87.5% </Male>, <Female> ♂ 12.5%</Female>
            </Gender>
          );
        }
      }
    }
    return;
  }

  function getEggGroups() {
    if (about) {
      let groups = about.egg_groups.map((group) => group.name);
      groups.sort();
      return (
        <Value style={{ textTransform: "capitalize" }}>
          {groups.join().replace(/,/g, ", ")}{" "}
        </Value>
      );
    }
  }

  function getPokemonId() {
    let idLength = JSON.stringify(pokemon.id).length;
    switch (idLength) {
      case 1:
        return `00${pokemon.id}`;
      case 2:
        return `0${pokemon.id}`;
      default:
        return `${pokemon.id}`;
    }
  }
  return (
    <>
      <Description>{about?.description}</Description>
      <Topic color={screenColor}>Pokédéx Data</Topic>
      <AboutContainer>
        <AboutContent>
          <Name>Species</Name> <Value>{about?.species}</Value>
        </AboutContent>
        <AboutContent>
          <Name>Height</Name> {getHeight(pokemon?.height)}
        </AboutContent>
        <AboutContent>
          <Name>Weight</Name> {getWeight(pokemon?.weight)}
        </AboutContent>
        <AboutContent style={{ marginTop: 6 }}>
          <Name>Abilities</Name> <Value>{getAbilities()}</Value>
        </AboutContent>
        <AboutContent style={{ marginTop: 6 }}>
          <Name>Weaknesses</Name>
          <Weaknesses>
            {weaknesses.map((weakness, key) => (
              <Weakness key={key} type={weakness} />
            ))}
          </Weaknesses>
        </AboutContent>
        <Topic color={screenColor}> Training</Topic>
        <AboutContent>
          <Name>EV Yield</Name>
          {getEffort()}
        </AboutContent>
        <AboutContent>
          <Name>Catch Rate</Name>
          <Value>{about?.capture_rate} </Value>
        </AboutContent>
        <AboutContent>
          <Name>Base Friendship</Name>
          <Value style={{ display: "inline-block" }}>
            {about?.base_happiness}{" "}
            <span style={{ fontSize: 6.3 }}>(normal)</span>{" "}
          </Value>
        </AboutContent>
        <AboutContent>
          <Name>Base Exp</Name>
          <Value>{pokemon.base_experience}</Value>
        </AboutContent>
        <AboutContent>
          <Name>Growth Rate</Name>
          <Value style={{ textTransform: "capitalize" }}>
            {about?.growth_rate.name}
          </Value>
        </AboutContent>
        <Topic color={screenColor}>Breeding</Topic>
        <AboutContent>
          <Name>Gender</Name>
          {getGender()}
        </AboutContent>
        <AboutContent>
          <Name>Egg Groups</Name>
          {getEggGroups()}
        </AboutContent>
        <Topic> Location </Topic>
        <AboutContent>
          <Name>{getPokemonId()}</Name>
          <Value>(Red/Blue/Yellow)</Value>
        </AboutContent>
      </AboutContainer>
    </>
  );
}

export default About;
