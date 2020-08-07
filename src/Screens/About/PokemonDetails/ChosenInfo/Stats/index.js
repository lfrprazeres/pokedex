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
  MinMax,
  EffectivenessImage,
} from "./style";

function Stats(props) {
  const { screenColor, pokemon, stats } = props;

  function showDamage(type) {
    if (type === "half") {
      return (
        <EffectivenessImage
          src={require("../../../../../assets/images/icons/half.svg")}
          alt="effectiveness"
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
          <MinMax>Min </MinMax>
          <MinMax style={{ marginLeft: 8 }}>Max </MinMax>
        </div>
      </TotalStatContainer>
      <RangeText>
        The ranges shown on the right are for a level 100 Pokémon. Maximum
        values are based on a beneficial nature, 252 EVs, 31 IVs; minimum values
        are based on a hindering nature, 0 EVs, 0 IVs.
      </RangeText>
      <Topic color={screenColor}>Type Defenses</Topic>
      <EffectivenessText>
        The effectiveness of each type on
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
