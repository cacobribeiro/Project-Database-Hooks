import React, { useContext } from 'react';
import { PlanetContext } from './PlanetContext';
import Tabelas from './Tabelas';

function ChamaFiltros() {
  const { planets, filtros, headers, searchBar, sort, sortColumn } = useContext(PlanetContext);
  if (planets.length === 0) return <p>Ainda Não!</p>;
  console.log(planets, filtros, headers, searchBar, sort, sortColumn);
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

  const allFilters = (data) => {
    console.log(data);
    const results = data.filter((planet) => planet.name.includes(searchBar));
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

  return (
    <tbody>
      {planets.map((planet, i) => (
        <Tabelas key={i} planet={planet} i={i} />
      ))}
    </tbody>
  );
}

export default ChamaFiltros;
