const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets';

function getPlanets() {
  return fetch(API_URL).then((data) => data.json());
}

export default getPlanets;
