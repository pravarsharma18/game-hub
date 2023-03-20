import { Genre } from "./genre";
import create from "./http-services";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}
export interface FetchGamesResponse {
  count: number;
  results: Games[];
}
export default create("game");
