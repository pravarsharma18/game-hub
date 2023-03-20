import { Genre } from "../services/genre";
import useData from "./useData";

const useGenres = () => useData<Genre>("genres");

export default useGenres;
