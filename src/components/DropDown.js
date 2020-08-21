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
      <form className=" container mb-5">
        <div className=" container d-flex">
          {selectedColumn(filtros, setColumn)}
          <select
            onChange={(e) => setComparison(e.target.value)}
            data-testid="comparison-filter"
            className="form-control form-control-sm"
            style={{ width: '150px' }}
            name="dropdown-quantity-filter"
          >
            <option value="">--</option>
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <div style={{ width: '250px' }} class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                Search
              </span>
            </div>
            <input
              type="number"
              class="form-control"
              placeholder="Digite um número"
              aria-describedby="basic-addon1"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={() => addValues(column, comparison, value)}
              type="button"
              data-testid="button-filter"
              className="btn-primary btn-sm"
            >
              Submit
            </button>
          </div>
        </div>
        <RadioButton />
      </form>
      {filtrosFeitos(filtros, deletFilter)}
    </div>
  );
};

export default DropDown;
