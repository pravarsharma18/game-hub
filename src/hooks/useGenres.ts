import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";
import { FetchGenreResponse, Genre } from "../services/genre";

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    let controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGenreResponse>("genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { genres, error, isLoading, setGenres };
};

export default useGenres;
