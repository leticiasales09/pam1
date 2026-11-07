import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { API_URL } from "../services/api";
import { Movie } from "../types/movie";

interface MovieContextData {
  movies: Movie[];
  addMovie: (movie: Movie) => Promise<void>;
}

const MovieContext = createContext<MovieContextData>(
  {} as MovieContextData
);

export function MovieProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [movies, setMovies] = useState<Movie[]>([]);

  async function carregarFilmes() {
    try {
      const resposta = await fetch(API_URL);

      if (!resposta.ok) {
        throw new Error("Erro ao buscar filmes");
      }

      const dados = await resposta.json();

      const filmesFormatados = dados.map((filme: any) => ({
        id: String(filme.id),
        nome: filme.nome,
        nota: Number(filme.nota),
        descricao: filme.descricao,
        dataLancamento: filme.dataLancamento,
      }));

      setMovies(filmesFormatados);

    } catch (erro) {
      console.log("Erro ao carregar filmes:", erro);
    }
  }

  async function addMovie(movie: Movie) {
    try {
      const resposta = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: movie.nome,
          nota: movie.nota,
          descricao: movie.descricao,
          dataLancamento: movie.dataLancamento,
        }),
      });

      if (!resposta.ok) {
        throw new Error("Erro ao cadastrar filme");
      }

      const resultado = await resposta.json();

      if (!resultado.sucesso) {
        throw new Error("Não foi possível cadastrar o filme");
      }

      await carregarFilmes();

    } catch (erro) {
      console.log("Erro ao adicionar filme:", erro);
      throw erro;
    }
  }

  useEffect(() => {
    carregarFilmes();
  }, []);

  return (
    <MovieContext.Provider value={{ movies, addMovie }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies() {
  return useContext(MovieContext);
}