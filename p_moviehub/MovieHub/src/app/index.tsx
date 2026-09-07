import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useMovies } from "../contexts/MovieContext";

export default function Movies() {
  const router = useRouter();
  const { movies } = useMovies();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Filmes</Text>

      {movies.length === 0 ? (
        <Text style={styles.emptyText}>
          Nenhum filme cadastrado.
        </Text>
      ) : (
        movies.map((movie) => (
          <Pressable
            key={movie.id}
            style={styles.movieItem}
            onPress={() =>
              router.push({
                pathname: "/movie-details",
                params: { id: movie.id },
              })
            }
          >
            <Text style={styles.movieName}>
              {movie.nome}
            </Text>

            <Text style={styles.movieRating}>
              Nota: {movie.nota}
            </Text>
          </Pressable>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 20,
  },

  emptyText: {
    fontSize: 16,
    color: "#333333",
  },

  movieItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },

  movieName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },

  movieRating: {
    fontSize: 14,
    color: "#555555",
    marginTop: 5,
  },
});