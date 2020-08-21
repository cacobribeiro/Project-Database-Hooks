import React, { useContext } from 'react';
import { PlanetContext } from './PlanetContext';
import sortData from './Filtros';
import Tabelas from './Tabelas';

function Table() {
  const { planets, headers, filtros } = useContext(PlanetContext);
  const allFilters = (dataPlanets) => {
    const results = dataPlanets.filter((planet) => planet.name.includes(filtros.filterByName.name));
    if (filtros.filterByNumericValues.length === 0) return results;
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

  if (filtros.loading) return <span>L O A D I N G . . . . . </span>;
  let results = allFilters(planets);
  results = sortData(results, filtros.order.sort, filtros.order.column);

  return (
    <div>
      <table className="table table-dark">
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
          {results.map((planet, i) => (
            <Tabelas key={planet.name} planet={planet} i={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
