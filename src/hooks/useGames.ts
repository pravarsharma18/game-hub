import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";
import { FetchGamesResponse, Games } from "../services/game";

const useGames = ()=>{
    const [games, setGames] = useState<Games[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        apiClient
        .get<FetchGamesResponse>("games", {signal:controller.signal})
        .then((res) => {
            setGames(res.data.results)
            setIsLoading(false)
        })
        .catch((err) => {
            if (err instanceof CanceledError) return 
            setIsLoading(false)
            setError(err.message);
        });
        return ()=>controller.abort()
    }, []);
    return {games, error, isLoading}
}

export default useGames