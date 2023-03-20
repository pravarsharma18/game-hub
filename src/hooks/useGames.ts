import { Games } from "../services/game";
import { Genre } from "../services/genre";
import useData from "./useData";

const useGames = (selectedGenre: Genre | null) =>
  useData<Games>("games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
