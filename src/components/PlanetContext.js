import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

const PlanetContext = createContext();

const PlanetProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [column, setColumn] = useState();
  const [comparison, setComparison] = useState();
  const [value, setValue] = useState();
  const [sort, setSort] = useState();
  const [sortColumn, setSortColumn] = useState();
  const [addFilter, setAddFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const [filtros, setFiltros] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  const addValues = (column, comparison, value) => {
    setFiltros((old) => ({
      ...old,
      filterByNumericValues: [...old.filterByNumericValues, { column, comparison, value }],
    }));
  };

  const SortButton = (sort, column) => {
    setFiltros((old) => ({
      ...old,
      order: { column, sort },
    }));
  };

  const inputText = (event) => {
    setFiltros((old) => ({
      ...old,
      filterByName: { name: event },
    }));
  };

  const context = {
    inputText,
    SortButton,
    addValues,
    setFiltros,
    filtros,
    setAddFilter,
    addFilter,
    planets,
    setPlanets,
    headers,
    setHeaders,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    setSort,
    sort,
    setSortColumn,
    sortColumn,
  };
  return <PlanetContext.Provider value={context}>{children}</PlanetContext.Provider>;
};

PlanetProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { PlanetProvider, PlanetContext };
