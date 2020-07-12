import React from "react";
import { Title, Description } from "../style";
import { Options, Option } from "./style";
import { connect } from "react-redux";
import { sortList } from "../../../../actions/pokedex";

function Sort(props) {
  const { setModalOption, sort, sortList, pokemons } = props;
  const options = [
    {
      sort: "smallest",
      option: "Smallest number first",
    },
    {
      sort: "highest",
      option: "Highest number first",
    },
    {
      sort: "a-z",
      option: "A-Z",
    },
    {
      sort: "z-a",
      option: "Z-A",
    },
  ];
  return (
    <>
      <Title>Sort</Title>
      <Description>
        Sort Pokémons alphabetically or by National Pokédex number!
      </Description>
      <Options>
        {options.map((option, key) => (
          <Option
            key={key}
            active={option.sort === sort}
            onClick={() => {
              sortList(option.sort, pokemons);
              setModalOption(false);
            }}
          >
            {option.option}
          </Option>
        ))}
      </Options>
    </>
  );
}

const mapStateToProps = (state) => ({
  sort: state.pokedex.sort,
  pokemons: state.pokedex.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  sortList: (option, pokemons) => dispatch(sortList(option, pokemons)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
