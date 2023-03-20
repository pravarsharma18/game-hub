import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Games, FetchGamesResponse } from "../services/game";

const GameGrid = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("games")
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        setError(err.message);
      });
  });
  return (
    <>
      {error && <Text color="tomato">{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
