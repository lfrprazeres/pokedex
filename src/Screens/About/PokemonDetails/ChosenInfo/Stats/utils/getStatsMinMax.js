export default {
  getMin: (stat) => {
    if (stat.stat.name === "hp") {
      return stat.base_stat * 2 + 110;
    } else {
      return stat.base_stat * 2 + 5;
    }
  },
  getMax: (stat) => {
    if (stat.stat.name === "hp") {
      return stat.base_stat * 2 + 204;
    } else {
      return parseInt((stat.base_stat * 2 + 99) * 1.1);
    }
  },
};
