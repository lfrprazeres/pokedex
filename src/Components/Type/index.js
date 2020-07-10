import React from "react";
import { connect } from "react-redux";
import { Container } from "./style";
import Image from "../Image";

function Type(props) {
  const { type, colorTypes, className } = props;
  return (
    <Container className={className} bg={colorTypes[type].icon}>
      <Image
        size={8}
        source={require(`../../assets/images/icons/pokemonTypes/${type}.svg`)}
      />
    </Container>
  );
}

const mapStateToProps = (state) => ({
  colorTypes: state.pokedex.types,
});

export default connect(mapStateToProps)(Type);
