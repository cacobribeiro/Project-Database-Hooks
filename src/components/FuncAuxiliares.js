import React from 'react';

const filtrosOptions = (filtros) => {
  const values = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  if (filtros.filterByNumericValues.length > 0) {
    const filtrados = filtros.filterByNumericValues.map((e) => e.column);
    return values.filter((e) => !filtrados.includes(e));
  }
  return values;
};

const selectedColumn = (filtros, setColumn) => {
  const values = filtrosOptions(filtros);
  return (
    <select
      onChange={(e) => setColumn(e.target.value)}
      data-testid="column-filter"
      style={{ width: '150px' }}
      className="form-control form-control-sm"
      name="dropdown-filter-category"
    >
      <option value="">--</option>
      {values.map((e) => (
        <option key={e} value={e}>
          {e}
        </option>
      ))}
    </select>
  );
};

export default selectedColumn;
