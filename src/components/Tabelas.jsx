import PropTypes from 'prop-types';
import React from 'react';

function Tabela(props) {
  const { planet } = props;
  return (
    <tr key={planet.name}>
      <td data-testid="planet-name">{planet.name}</td>
      <td>{planet.rotation_period}</td>
      <td>{planet.orbital_period}</td>
      <td>{planet.diameter}</td>
      <td>{planet.climate}</td>
      <td>{planet.gravity}</td>
      <td>{planet.terrain}</td>
      <td>{planet.surface_water}</td>
      <td>{planet.population}</td>
      <td>{planet.films}</td>
      <td>{planet.created}</td>
      <td>{planet.edited}</td>
      <td>{planet.url}</td>
    </tr>
  );
}

Tabela.propTypes = {
  planet: PropTypes.shape({
    climate: PropTypes.string,
    created: PropTypes.string,
    diameter: PropTypes.string,
    edited: PropTypes.string,
    films: PropTypes.array,
    gravity: PropTypes.string,
    name: PropTypes.string,
    orbital_period: PropTypes.string,
    population: PropTypes.string,
    rotation_period: PropTypes.string,
    surface_water: PropTypes.string,
    terrain: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Tabela;
