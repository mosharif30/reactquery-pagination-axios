import { useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";
import getCharacters from "../services/getCharacters";
const Characters = () => {
  const handleClickNext = () => {
    setPage(page + 1);
  };
  const handleClickPrev = () => {
    setPage(page - 1);
  };
  const [page, setPage] = useState(1);

  const { data, status } = useQuery(["characters", page], getCharacters, {
    keepPreviousData: true,
  });

  if (status === "loading") {
    return <>loading...</>;
  }
  if (status === "error") {
    return <>error!</>;
  }

  return (
    <>
      <div>
        <h2 className="pageNumber">page is {page}</h2>
      </div>
      <div className="characters">
        {data.data.results.map((character) => (
          <Character key={character.id} character={character}></Character>
        ))}
        <div>
          <button disabled={page === 1} onClick={handleClickPrev}>
            prev
          </button>
          <button
            disabled={data.data.info.next === null}
            onClick={handleClickNext}
          >
            next
          </button>
        </div>
      </div>
    </>
  );
};

export default Characters;
