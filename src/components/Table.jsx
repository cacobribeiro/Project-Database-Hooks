import React, { useContext } from 'react';
import { PlanetContext } from './PlanetContext';
import Tabelas from './Tabelas';

function Table() {
  const { planets, headers } = useContext(PlanetContext);
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
          {planets.map((planet, i) => (
            <Tabelas planet={planet} i={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
