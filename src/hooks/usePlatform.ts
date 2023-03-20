import useData from "./useData";
import { Platform } from "../services/game";

const usePlatform = () => useData<Platform>("platforms/lists/parents");

export default usePlatform;
