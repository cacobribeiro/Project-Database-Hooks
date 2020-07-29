import { useContext } from 'react';
import { PlanetContext } from './PlanetContext';

const allFilters = () => {
  const { planets, filtros } = useContext(PlanetContext);
  const results = planets.filter((planet) => planet.name.includes(searchBar));
  if (filtros.length === 0) return results;
  return filtros.filterByNumericValues.reduce((acc, filtro) => {
    const { column, comparison, value } = filtro;
    return acc.filter((planet) => {
      switch (comparison) {
        case 'maior que':
          return Number(planet[column]) > Number(value);
        case 'menor que':
          return Number(planet[column]) < Number(value);
        case 'igual a':
          return Number(planet[column]) === Number(value);
        default:
          return false;
      }
    });
  }, results);
};

const sortData = (planets, orderColumn, order) => {
  const filterColumn = orderColumn.toLowerCase();
  if (isNaN(planets[0][filterColumn])) {
    planets.sort((a, b) => (a[filterColumn] > b[filterColumn] ? 1 : -1));
  } else {
    planets.sort((a, b) => a[filterColumn] - b[filterColumn]);
  }
  if (order === 'DESC') planets.reverse();
  return planets;
};

export default sortData;
