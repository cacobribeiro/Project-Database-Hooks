import React, { useContext } from 'react';
import { PlanetContext } from './PlanetContext';
import sortlines from '../services/sortLines';

const RadioButton = () => {
  const { SortButton, setSort, sort, setSortColumn, sortColumn } = useContext(PlanetContext);

  return (
    <div className="container d-flex">
      <select
        onChange={(event) => setSortColumn(event.target.value)}
        className="form-control form-control-sm"
        style={{ width: '150px' }}
        data-testid="column-sort"
      >
        {sortlines.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
      <div className="form-check form-check-inline">
        <label className="form-check-label" htmlFor="ASC">
          <input
            className="form-check-input"
            onChange={() => setSort('ASC')}
            type="radio"
            name="radio"
            data-testid="column-sort-input-asc"
            value="ASC"
          />
          ASC
        </label>
        <label className="form-check-label" htmlFor="DESC">
          <input
            onChange={() => setSort('DESC')}
            type="radio"
            className="form-check-input"
            name="radio"
            data-testid="column-sort-input-desc"
            value="DESC"
          />
          DESC
        </label>
      </div>
      <button
        onClick={() => SortButton(sort, sortColumn)}
        data-testid="column-sort-button"
        type="button"
        class="btn btn-primary btn-sm"
      >
        Sort
      </button>
    </div>
  );
};

export default RadioButton;
