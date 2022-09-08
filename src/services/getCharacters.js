import axios from "axios";
const getCharacters = () => {
  const promise = axios.get(`https://rickandmortyapi.com/api/character`);
  const dataPromise = promise.then(function (response) {
    return response;
  });
  return dataPromise;
};
export default getCharacters;
