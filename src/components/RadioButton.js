import React, { useContext } from 'react';
import { PlanetContext } from './PlanetContext';
import sortlines from '../services/sortLines';

const RadioButton = () => {
  const { SortButton, setSort, sort, setSortColumn, sortColumn } = useContext(PlanetContext);

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
          data-testid="column-sort-input-asc"
          value="ASC"
        />
        ASC
      </label>
      <label htmlFor="DESC">
        <input
          onChange={() => setSort('DESC')}
          type="radio"
          name="radio"
          data-testid="column-sort-input-desc"
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
