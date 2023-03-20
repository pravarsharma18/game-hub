import { Games } from "../services/game";
import useData from "./useData";

const useGames = () => useData<Games>("games");

export default useGames;
