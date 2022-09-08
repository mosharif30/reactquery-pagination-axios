import axios from "axios";
const getCharacters = ({ queryKey }) => {
  const promise = axios.get(
    `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
  );
  const dataPromise = promise.then(function (response) {
    return response;
  });
  return dataPromise;
};
export default getCharacters;
