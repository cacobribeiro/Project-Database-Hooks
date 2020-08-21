import React, { useContext, useEffect } from 'react';
import getPlanets from '../services/ServiceApi';
import { PlanetContext } from './PlanetContext';
import DropDown from './DropDown';

function Header() {
  const { setPlanets, setHeaders, filtros, inputText, setFiltros } = useContext(PlanetContext);

  useEffect(() => {
    getPlanets().then((data) => {
      setPlanets(data.results);
      setHeaders(Object.keys(data.results[0]));
      setFiltros((e) => ({ ...e, loading: false }));
    });
  }, []);

  return (
    <div>
      <div className="container m-auto">
        <div style={{ width: '250px' }} class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              Search
            </span>
          </div>
          <input
            data-testid="name-filter"
            value={filtros.filterByName.name}
            type="text"
            class="form-control"
            placeholder="Termo de pesquisa"
            onChange={(e) => inputText(e.target.value)}
          />
        </div>
      </div>
      <DropDown />
    </div>
  );
}

export default Header;
