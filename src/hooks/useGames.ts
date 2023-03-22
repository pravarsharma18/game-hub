import { GameQuery } from "../App";
import { Games } from "../services/game";
import useData from "./useData";

const useGames = (gameQuery: GameQuery) =>
  useData<Games>(
    "games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.ordering,
      },
    },
    [gameQuery]
  );

export default useGames;
