import React from "react";
import getStatsMinMax from "./utils/getStatsMinMax";
import formatStatName from "./utils/formatStatName";
import getStatsTotal from "./utils/getStatsTotal";
import {
  Topic,
  StatContainer,
  StatName,
  StatValue,
  StatBarContainer,
  StatBar,
  StatMin,
  StatMax,
  TotalStatContainer,
  TotalText,
  StatTotal,
  RangeText,
  EffectivenessText,
  EffectivenessContainer,
  EffectivenessContent,
  EffectivenessType,
  EffectivenessDamage,
} from "./style";

function Stats(props) {
  const { screenColor, pokemon, stats } = props;

  function showDamage(type) {
    if (type === "half") {
      return (
        <img
          src={require("../../../../../assets/images/icons/half.svg")}
          alt="half"
          style={{ width: 8 }}
        />
      );
    } else if (type === "2") {
      return type;
    }
  }
  return (
    <>
      <Topic color={screenColor}>Base stats</Topic>
      {pokemon.stats.map((stat, key) => {
        return (
          <StatContainer key={key}>
            <StatName>{formatStatName(stat.stat.name)}</StatName>
            <StatValue>{stat.base_stat}</StatValue>
            <StatBarContainer>
              <StatBar color={screenColor} width={stat.base_stat} />
            </StatBarContainer>
            <StatMin>{getStatsMinMax.getMin(stat)}</StatMin>
            <StatMax>{getStatsMinMax.getMax(stat)}</StatMax>
          </StatContainer>
        );
      })}
      <TotalStatContainer>
        <div>
          <TotalText>Total</TotalText>
          <StatTotal>{getStatsTotal(pokemon.stats)}</StatTotal>
        </div>
        <div>
          <span style={{ fontSize: 6.2 }}>Min </span>
          <span style={{ fontSize: 6.2, marginLeft: 8 }}>Max </span>
        </div>
      </TotalStatContainer>
      <RangeText>
        The ranges shown on the right are for a level 100 Pokémon. Maximum
        values are based on a beneficial nature, 252 EVs, 31 IVs; minimum values
        are based on a hindering nature, 0 EVs, 0 IVs.
      </RangeText>
      <Topic color={screenColor}>Type Defenses</Topic>
      <EffectivenessText>
        The effectiveness of each type on{" "}
        <span style={{ textTransform: "capitalize" }}>{pokemon.name}</span>
      </EffectivenessText>
      <EffectivenessContainer>
        {Object.keys(stats).map((type, key) => {
          return (
            <EffectivenessContent key={key}>
              <EffectivenessType type={type} />
              <EffectivenessDamage>
                {showDamage(stats[type])}
              </EffectivenessDamage>
            </EffectivenessContent>
          );
        })}
      </EffectivenessContainer>
    </>
  );
}

export default Stats;
