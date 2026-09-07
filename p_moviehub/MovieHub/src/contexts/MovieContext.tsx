import React, { createContext, useContext, useState } from "react";
import { Movie } from "../types/movie";

interface MovieContextData {
  movies: Movie[];
  addMovie: (movie: Movie) => void;
}

const MovieContext = createContext<MovieContextData>(
  {} as MovieContextData
);

export function MovieProvider({ children }: { children: React.ReactNode }) {
  const [movies, setMovies] = useState<Movie[]>([]);

  function addMovie(movie: Movie) {
    setMovies((currentMovies) => [...currentMovies, movie]);
  }

  return (
    <MovieContext.Provider value={{ movies, addMovie }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies() {
  return useContext(MovieContext);
}