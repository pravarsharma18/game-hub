import create from "./http-services";

export interface Games{
    id: number,
    name: string
    background_image: string
}
export interface FetchGamesResponse{
    count: number,
    results: Games[]
}
export default create("game")