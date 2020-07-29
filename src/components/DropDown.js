import React, { useContext } from 'react';
import RadioButton from './RadioButton';
import { PlanetContext } from './PlanetContext';

const DropDown = () => {
  const {
    column,
    comparison,
    value,
    setColumn,
    setComparison,
    setValue,
    filtros,
    addValues,
  } = useContext(PlanetContext);

  const filtrosOptions = () => {
    console.log(filtros.filterByNumericValues);
    console.log(column, comparison, value);
    const values = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    if (filtros.length > 0) {
      const filtrados = filtros.map((e) => e.column);
      return values.filter((e) => !filtrados.includes(e));
    }
    return values;
  };

  const selectedColumn = () => {
    const values = filtrosOptions();
    return (
      <select
        onChange={(e) => setColumn(e.target.value)}
        data-testid="column-filter"
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

  const filtrosFeitos = () => {
    if (filtros.length > 0) {
      return filtros.map((e, index) => (
        <span key={index} data-testid="filter">
          <p>{e.column}</p>
          <button type="button" key={e.column}>
            X
          </button>
        </span>
      ));
    }
    return null;
  };

  return (
    <div>
      <form>
        {selectedColumn()}
        <select
          onChange={(e) => setComparison(e.target.value)}
          data-testid="comparison-filter"
          name="dropdown-quantity-filter"
        >
          <option value="">--</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <label htmlFor="input-value">
          <input
            type="number"
            data-testid="value-filter"
            placeholder="Digite um número"
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <button
          onClick={() => addValues(column, comparison, value)}
          type="button"
          data-testid="button-filter"
        >
          Submit
        </button>
        <RadioButton />
      </form>
      {filtrosFeitos()}
    </div>
  );
};

export default DropDown;
