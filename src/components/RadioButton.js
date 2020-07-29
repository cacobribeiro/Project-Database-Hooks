import React, { useContext } from 'react';
import { PlanetContext } from './PlanetContext';

const RadioButton = () => {
  const { SortButton, setSort, sort, setSortColumn, sortColumn } = useContext(PlanetContext);

  const sortlines = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
    'created',
    'edited',
    'url',
  ];
  return (
    <div>
      <select onChange={(event) => setSortColumn(event.target.value)} data-testid="column-sort">
        {sortlines.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
      <label htmlFor="ASC">
        <input
          onChange={() => setSort('ASC')}
          type="radio"
          name="radio"
          data-testid="column-sort-input"
          value="ASC"
        />
        ASC
      </label>
      <label htmlFor="DESC">
        <input
          onChange={() => setSort('DESC')}
          type="radio"
          name="radio"
          data-testid="column-sort-input"
          value="DESC"
        />
        DESC
      </label>
      <button
        onClick={() => SortButton(sort, sortColumn)}
        data-testid="column-sort-button"
        type="button"
      >
        Sort
      </button>
    </div>
  );
};

export default RadioButton;
