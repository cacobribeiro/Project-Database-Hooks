import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

const PlanetContext = createContext();

const PlanetProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [headers, setHeaders] = useState([]);

  const context = {
    planets,
    setPlanets,
    headers,
    setHeaders,
  };
  return <PlanetContext.Provider value={context}>{children}</PlanetContext.Provider>;
};

PlanetProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { PlanetProvider, PlanetContext };
