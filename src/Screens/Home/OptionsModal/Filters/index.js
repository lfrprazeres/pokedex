import React, { useState, useEffect } from "react";
import { Title, Description } from "../style";
import { Topic, Types, Type, Buttons, Reset, Apply } from "./style";
import { connect } from "react-redux";
import { Image } from "../../../../Components";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import {
  changeAdvancedFilters,
  resetAdvancedFilters,
} from "../../../../actions/pokedex";

function Filters(props) {
  const {
    pokemonList,
    types,
    advancedFilter,
    resetFilters,
    changeFilters,
    setModalOption,
    modalOption,
  } = props;
  const [typesSorted, setTypesSorted] = useState(null);
  const [selected, setSelected] = useState(advancedFilter);
  const heights = [
    { name: "short", color: "#FFC5E6" },
    { name: "medium", color: "#AEBFD7" },
    { name: "tall", color: "#AAACB8" },
  ];
  const weights = [
    {
      name: "light",
      color: "#99CD7C",
    },
    {
      name: "normal",
      color: "#57B2DC",
    },
    {
      name: "heavy",
      color: "#5A92A5",
    },
  ];

  const PokemonSlider = withStyles({
    root: {
      color: "#ea5d60",
    },
    thumb: {
      height: 10,
      width: 10,
      backgroundColor: "#fff",
      boxShadow: "0px 10px 20px rgba(234, 93, 96, 0.3);",
      border: "2px solid currentColor",
      marginTop: -4,
      marginLeft: -4,
    },
    valueLabel: {
      left: "calc(-50% - 10px)",
      top: 10,
      "& > span": {
        backgroundColor: "transparent",
      },
      "& > span > span": {
        color: "#747476",
        fontSize: 6,
      },
    },

    track: {
      height: 2,
      borderRadius: 4,
    },
    rail: {
      backgroundColor: "#F2F2F2",
      height: 2,
      borderRadius: 4,
    },
  })(Slider);

  useEffect(() => {
    setTypesSorted(Object.keys(types).sort());
  }, [setTypesSorted, types]);

  function handleChangeRange(event, newValue) {
    setSelected({ ...selected, range: newValue });
  }
  return (
    <>
      {modalOption !== false && (
        <>
          <Title>Filters</Title>
          <Description style={{ marginBottom: 16 }}>
            Use advanced search to explore Pokémon by type, weakness, height and
            more!
          </Description>
          <Topic>Types</Topic>
          <Types>
            {typesSorted?.map((type, key) => {
              const isActive =
                selected?.types.find(
                  (selectedType) => selectedType === type
                ) !== undefined;
              return (
                <Type
                  key={key}
                  bg={types[type].icon}
                  active={isActive}
                  onClick={() => {
                    if (isActive) {
                      return setSelected({
                        ...selected,
                        types: selected.types.filter(
                          (select) => select !== type
                        ),
                      });
                    }
                    setSelected({
                      ...selected,
                      types: [...selected.types, type],
                    });
                  }}
                >
                  <Image
                    size={10}
                    source={`${require(`../../../../assets/images/icons/pokemonTypes/${type}${
                      isActive ? "" : "Unselected"
                    }.svg`)}`}
                  />
                </Type>
              );
            })}
          </Types>
          <Topic>Weaknesses</Topic>
          <Types>
            {typesSorted?.map((weakness, key) => {
              const isActive =
                selected?.weaknesses.find(
                  (selectedType) => selectedType === weakness
                ) !== undefined;
              return (
                <Type
                  key={key}
                  bg={types[weakness].icon}
                  active={isActive}
                  onClick={() => {
                    if (isActive) {
                      return setSelected({
                        ...selected,
                        weaknesses: selected.weaknesses.filter(
                          (select) => select !== weakness
                        ),
                      });
                    }
                    setSelected({
                      ...selected,
                      weaknesses: [...selected.weaknesses, weakness],
                    });
                  }}
                >
                  <Image
                    size={10}
                    source={`${require(`../../../../assets/images/icons/pokemonTypes/${weakness}${
                      isActive ? "" : "Unselected"
                    }.svg`)}`}
                  />
                </Type>
              );
            })}
          </Types>
          <Topic>Heights</Topic>
          <Types>
            {heights?.map((height, key) => {
              const isActive =
                selected?.heights.find(
                  (selectedType) => selectedType === height.name
                ) !== undefined;
              return (
                <Type
                  key={key}
                  bg={height.color}
                  active={isActive}
                  onClick={() => {
                    if (isActive) {
                      return setSelected({
                        ...selected,
                        heights: selected.heights.filter(
                          (select) => select !== height.name
                        ),
                      });
                    }
                    setSelected({
                      ...selected,
                      heights: [...selected.heights, height.name],
                    });
                  }}
                >
                  <Image
                    size={10}
                    source={`${require(`../../../../assets/images/icons/advanced-filter/${
                      height.name
                    }${isActive ? "" : "Unselected"}.svg`)}`}
                  />
                </Type>
              );
            })}
          </Types>
          <Topic>Weights</Topic>
          <Types>
            {weights?.map((weight, key) => {
              const isActive =
                selected?.weights.find(
                  (selectedType) => selectedType === weight.name
                ) !== undefined;
              return (
                <Type
                  key={key}
                  bg={weight.color}
                  active={isActive}
                  onClick={() => {
                    if (isActive) {
                      return setSelected({
                        ...selected,
                        weights: selected.weights.filter(
                          (select) => select !== weight.name
                        ),
                      });
                    }
                    setSelected({
                      ...selected,
                      weights: [...selected.weights, weight.name],
                    });
                  }}
                >
                  <Image
                    size={10}
                    source={`${require(`../../../../assets/images/icons/advanced-filter/${
                      weight.name
                    }${isActive ? "" : "Unselected"}.svg`)}`}
                  />
                </Type>
              );
            })}
          </Types>
          <Topic>Number Range</Topic>
          <PokemonSlider
            value={selected.range}
            onChange={handleChangeRange}
            max={pokemonList.length}
            getariallabel=""
            valueLabelDisplay="on"
          />
          <Buttons>
            <Reset
              onClick={() => {
                setModalOption(false);
                resetFilters(pokemonList.length);
              }}
            >
              Reset
            </Reset>
            <Apply
              onClick={() => {
                setModalOption(false);
                changeFilters(selected);
              }}
            >
              Apply
            </Apply>
          </Buttons>
        </>
      )}
    </>
  );
}

const mapStateTeProps = (state) => ({
  types: state.pokedex.types,
  advancedFilter: state.pokedex.advancedFilter,
});

const mapDispatchToProps = (dispatch) => ({
  resetFilters: (range) => dispatch(resetAdvancedFilters(range)),
  changeFilters: (selected) => dispatch(changeAdvancedFilters(selected)),
});

export default connect(mapStateTeProps, mapDispatchToProps)(Filters);
