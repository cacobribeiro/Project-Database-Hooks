import React from 'react';

const filtrosFeitos = (filtros, deletFilter) => {
  if (filtros.filterByNumericValues.length > 0) {
    return filtros.filterByNumericValues.map((e, index) => (
      <span key={e.column} data-testid="filter">
        <p>{e.column}</p>
        <button onClick={() => deletFilter(index)} type="button" key={e.column}>
          X
        </button>
      </span>
    ));
  }
  return null;
};

export default filtrosFeitos;
