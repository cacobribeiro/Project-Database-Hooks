import React, { useContext } from 'react';
import { PlanetContext } from './PlanetContext';
import Tabelas from './Tabelas';
import sortData from './Filtros';

function Table() {
  const { planets, filtros, headers, searchBar, sort, sortColumn } = useContext(PlanetContext);
  const allFilters = (planets) => {
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

  if (planets.lenght > 0) return <span>L O A D I N G . . . . . </span>;
  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers
              .filter((e) => e !== 'residents')
              .map((e, i) => (
                <th key={`${i + 1}`}>{e}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {sortData(allFilters(planets), sortColumn, sort).map((planet, i) => (
            <Tabelas key={i} planet={planet} i={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
