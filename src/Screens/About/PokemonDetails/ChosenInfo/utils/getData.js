import axios from "axios";
export default {
  getStats: (pokemon, stats, setStats) => {
    axios
      .get(`http://pokeapi.co/api/v2/type/${pokemon.types[0].type.name}/`)
      .then((effect) => {
        let damages = effect.data.damage_relations;
        let typesDamage = {};
        damages.half_damage_from.map(
          (half) => (typesDamage[half.name] = "half")
        );
        damages.double_damage_from.map(
          (double) => (typesDamage[double.name] = "2")
        );
        setStats({ ...stats, ...typesDamage });
      });
  },
  getAbout: async (pokemon, about, setAbout) => {
    let newAbout = about;
    await axios.get(`https://pokeapi.co/api/v2/gender/1`).then((genders) => {
      let gender = genders.data.pokemon_species_details.find(
        (specie) => specie.pokemon_species.name === pokemon.name
      );
      newAbout = {
        ...newAbout,
        genderType: gender?.rate,
      };
    });
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}/`)
      .then((specie) => {
        let entry = specie.data.flavor_text_entries.find(
          (entry) =>
            entry.language.name === "en" && entry.version.name === "omega-ruby"
        );
        let genera = specie.data.genera.find(
          (gen) => gen.language.name === "en"
        );
        newAbout = {
          ...newAbout,
          description: entry?.flavor_text,
          species: genera?.genus,
          capture_rate: specie.data.capture_rate,
          base_happiness: specie.data.base_happiness,
          growth_rate: specie.data.growth_rate,
          egg_groups: specie.data.egg_groups,
        };
      });
    setAbout(newAbout);
  },
};
