import React, { useContext, useEffect } from 'react';
import getPlanets from '../services/ServiceApi';
import { PlanetContext } from './PlanetContext';
import DropDown from './DropDown';

function Header() {
  const { setPlanets, setHeaders } = useContext(PlanetContext);

  useEffect(() => {
    getPlanets().then((data) => {
      setPlanets(data.results);
      setHeaders(Object.keys(data.results[0]));
    });
  }, []);

  return (
    <div>
      <p>Aqui fica os Filtros</p>
      <DropDown />
    </div>
  );
}

export default Header;
