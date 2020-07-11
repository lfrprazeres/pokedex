import styled from "styled-components";
import { Type } from "../../../../../Components";

const Topic = styled.p`
  color: ${(props) => props.color};
  font-size: 9px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StatContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 7.5px;
  &:nth-child(7) {
    margin-bottom: 0;
  }
`;

const StatName = styled.span`
  font-size: 6.2px;
  flex: 1;
  text-transform: capitalize;
  margin-right: 5px;
`;

const StatValue = styled.span`
  color: #747476;
  font-size: 8px;
  width: 10px;
`;

const StatBarContainer = styled.div`
  flex: 3;
  padding-left: 9px;
`;

const StatBar = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 20px;
  height: 2.5px;
  width: ${(props) =>
    props.width > 100
      ? "calc(100% - 10px)"
      : `calc(${props.width + "% - 10px"})`};
`;

const StatMin = styled.span`
  color: #747476;
  font-size: 8px;
`;

const StatMax = styled.span`
  color: #747476;
  font-size: 8px;
  margin-left: 6px;
`;

const TotalStatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -1px;
`;

const TotalText = styled.span`
  font-size: 6.2px;
  margin-right: 17px;
`;

const StatTotal = styled.span`
  color: #747476;
  font-size: 8px;
  font-weight: bold;
`;

const RangeText = styled.p`
  color: #747476;
  font-size: 6px;
  font-weight: 500;
  letter-spacing: 0.1px;
  margin: 9px 0 10px 0;
`;

const EffectivenessText = styled.p`
  color: #747476;
  font-size: 8px;
  margin-bottom: 10px;
`;

const EffectivenessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 102%;
`;

const EffectivenessContent = styled.div`
  margin: 0 5px 10px 0;
`;

const EffectivenessType = styled(Type)``;

const EffectivenessDamage = styled.div`
  font-size: 8px;
  text-align: center;
  padding-top: 5px;
`;

export {
  Topic,
  StatContainer,
  StatName,
  StatValue,
  StatMin,
  StatMax,
  StatBarContainer,
  StatBar,
  TotalStatContainer,
  TotalText,
  StatTotal,
  RangeText,
  EffectivenessText,
  EffectivenessContainer,
  EffectivenessContent,
  EffectivenessType,
  EffectivenessDamage,
};
