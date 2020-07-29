const API_URL = 'https://swapi.dev/api/planets/';

function getPlanets() {
  return fetch(API_URL).then((data) => data.json());
}

export default getPlanets;
