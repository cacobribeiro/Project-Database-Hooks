const sortData = (planets, sortColumn, sort) => {
  const filterColumn = sortColumn.toLowerCase();
  if (isNaN(planets[0][filterColumn])) {
    planets.sort((a, b) => (a[filterColumn] > b[filterColumn] ? 1 : -1));
  } else {
    planets.sort((a, b) => a[filterColumn] - b[filterColumn]);
  }
  if (sort === 'DESC') planets.reverse();
  return planets;
};

export default sortData;
