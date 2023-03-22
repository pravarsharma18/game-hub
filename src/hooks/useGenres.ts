import { Genre } from "../services/genre";
import useData from "./useData";
import genres from "../data/genres";

const useGenres = () => ({ data: genres, isLoading: false, error: null });
// const useGenres = () => useData<Genre>("genres");

export default useGenres;
