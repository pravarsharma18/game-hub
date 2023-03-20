import create from "./http-services";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}
export interface FetchGenreResponse {
  results: Genre[];
}

export default create("genres");
