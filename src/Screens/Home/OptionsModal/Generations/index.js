import React from "react";
import { Title, Description } from "../style";
import { Content, Generation, GenerationText, Reset } from "./style";
import { Image } from "../../../../Components";
import { connect } from "react-redux";
import { changeGeneration } from "../../../../actions/pokedex";

function Generations(props) {
  const { changeGeneration, generationActive, setModalOption } = props;
  const generations = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
  return (
    <>
      <Title>Generations</Title>
      <Description>
        Use search for generations to explore your pokemon
      </Description>
      <Content>
        {generations.map((generation, key) => (
          <Generation
            key={key}
            active={generation === generationActive}
            onClick={() => {
              if (generationActive !== generation) changeGeneration(generation);
              setModalOption(false);
            }}
          >
            <Image
              style={{ marginTop: -10 }}
              source={require(`../../../../assets/images/icons/generations/${generation}.svg`)}
              size={63}
            />
            <GenerationText active={generation === generationActive}>
              Generation {generation}
            </GenerationText>
          </Generation>
        ))}
        <Reset
          onClick={() => {
            if (generationActive !== "") changeGeneration("");
            setModalOption(false);
          }}
        >
          Reset
        </Reset>
      </Content>
    </>
  );
}

const mapStateToProps = (state) => ({
  generationActive: state.pokedex.generation,
});

const mapDispatchToProps = (dispatch) => ({
  changeGeneration: (generation) => dispatch(changeGeneration(generation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Generations);
