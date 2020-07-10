export default function getStatsTotal(stats) {
  let total = 0;
  stats.forEach((stat) => (total += stat.base_stat));
  return total;
}
