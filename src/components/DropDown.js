import React, { useContext } from 'react';
import RadioButton from './RadioButton';
import { PlanetContext } from './PlanetContext';
import selectedColumn from './FuncAuxiliares';
import filtrosFeitos from './FiltrosFeitos';

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
    deletFilter,
  } = useContext(PlanetContext);

  return (
    <div>
      <form>
        {selectedColumn(filtros, setColumn)}
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
      {filtrosFeitos(filtros, deletFilter)}
    </div>
  );
};

export default DropDown;
