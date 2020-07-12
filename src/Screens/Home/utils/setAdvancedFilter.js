import axios from "axios";

export default function setAdvancedFilter(list, setList, filters) {
  const { heights, weights, types, weaknesses, range } = filters;
  let newList;
  if (range[1] - range[0] + 1 !== list.length) {
    newList = list.slice(range[0] - 1, range[1]);
  } else {
    newList = list;
  }
  newList = getAcceptedHeights(heights, newList);
  newList = getAcceptedWeights(weights, newList);
  newList = getAcceptedTypes(types, newList);
  if (weaknesses.length > 0) {
    let pokemonWithWeaknessess = Promise.all(
      getAcceptedWeakness(weaknesses, newList)
    ).then((test) => test.flat());
    pokemonWithWeaknessess.then((weak) => setList(weak));
  } else {
    setList(newList);
  }
}

function getAcceptedHeights(heights, list) {
  let min;
  let max;
  if (heights.length > 0) {
    let hasShort = heights.find((height) => height === "short");
    let hasMedium = heights.find((height) => height === "medium");
    let hasTall = heights.find((height) => height === "tall");
    if (hasShort) {
      min = 0;
      max = 10;
    }
    if (hasMedium) {
      if (!hasShort) min = 10;
      max = 20;
    }
    if (hasTall) {
      if (!hasShort && !hasMedium) min = 20;
      max = "infinite";
    }
    let listWithHeight = list.filter((pokemon) => {
      return (
        pokemon.pokemon.height >= min &&
        (max === "infinite"
          ? pokemon.pokemon.height
          : pokemon.pokemon.height < max)
      );
    });
    return listWithHeight;
  }
  return list;
}

function getAcceptedWeights(weights, list) {
  let min;
  let max;
  if (weights.length > 0) {
    let hasShort = weights.find((weight) => weight === "light");
    let hasMedium = weights.find((height) => height === "normal");
    let hasTall = weights.find((height) => height === "heavy");
    if (hasShort) {
      min = 0;
      max = 50;
    }
    if (hasMedium) {
      if (!hasShort) min = 50;
      max = 100;
    }
    if (hasTall) {
      if (!hasShort && !hasMedium) min = 100;
      max = "infinite";
    }
    let listWithHeight = list.filter((pokemon) => {
      return (
        pokemon.pokemon.height >= min &&
        (max === "infinite"
          ? pokemon.pokemon.height
          : pokemon.pokemon.height < max)
      );
    });
    return listWithHeight;
  }
  return list;
}

function getAcceptedTypes(types, list) {
  if (types.length > 0) {
    let listFiltered = list.filter((data) => {
      let result = data.pokemon.types
        .map((type) => {
          let found = types.find((filterType) => filterType === type.type.name);
          if (found) {
            return data;
          }
        })
        .filter((a) => a !== undefined);
      if (result.length > 0) return true;
      return false;
    });
    return listFiltered;
  }
  return list;
}

function getAcceptedWeakness(weaknesses, list) {
  if (weaknesses.length > 0) {
    let listFiltered = list.map((data) =>
      axios
        .get(
          `http://pokeapi.co/api/v2/type/${data.pokemon.types[0].type.name}/`
        )
        .then((specie) => {
          let result = specie.data?.damage_relations?.double_damage_from
            .map((double) => {
              let found = weaknesses.find(
                (filterWeakness) => filterWeakness === double.name
              );
              if (found) return data;
            })
            .filter((a) => a !== undefined);
          return result;
        })
    );
    return listFiltered;
  }
  return list;
}
