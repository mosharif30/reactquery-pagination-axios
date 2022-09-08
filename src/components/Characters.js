import { useQuery } from "react-query";
import getCharacters from "../services/getCharacters";
import Character from "./Character";

const Characters = () => {
  const { data, status } = useQuery("characters", getCharacters);

  if (status === "loading") {
    return <>loading...</>;
  }
  if (status === "error") {
    return <>error!</>;
  }

  return (
    <>
      <div className="characters">
        {data.data.results.map((character) => (
          <Character key={character.id} character={character}></Character>
        ))}
      </div>
    </>
  );
};

export default Characters;
