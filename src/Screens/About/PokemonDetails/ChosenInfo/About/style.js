import styled from "styled-components";
import { Type } from "../../../../../Components";

const Description = styled.p`
  color: #747476;
  font-size: 8px;
  margin-top: 6px;
  margin-bottom: 15px;
`;

const Topic = styled.p`
  color: ${(props) => props.color};
  font-size: 8px;
  font-weight: bold;
  letter-spacing: 0.3px;
  margin-bottom: 11px;
  margin-top: 2px;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutContent = styled.div`
  display: flex;
  min-height: 17px;
`;

const Name = styled.div`
  color: #17171b;
  font-size: 6px;
  font-weight: bold;
  letter-spacing: 0.1px;
  width: 47px;
`;
const Value = styled.span`
  color: #747476;
  display: flex;
  font-size: 8px;
  flex-direction: column;
`;

const SecondaryValue = styled.span`
  font-size: 6px;
  margin-left: 1px;
`;

const FirstAbility = styled.span`
  font-size: 8px;
  margin-top: -7px;
  text-transform: capitalize;
`;

const SecondaryAbility = styled.span`
  font-size: 6.2px;
  margin-top: 3px;
  text-transform: capitalize;
`;

const Weaknesses = styled(Value)`
  flex-direction: row;
`;

const Weakness = styled(Type)`
  margin: -3px 4.5px 0 0px;
`;

const Gender = styled(Value)`
  flex-direction: row;
  margin: -1px 0 0 -1px;
`;

const Male = styled.span`
  color: #748fc9;
`;

const Female = styled.span`
  color: #ed6ec7;
`;

export {
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
};
