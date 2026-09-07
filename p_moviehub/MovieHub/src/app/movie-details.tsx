import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useMovies } from "../contexts/MovieContext";

export default function MovieDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { movies } = useMovies();

  const movie = movies.find((item) => item.id === id);

  if (!movie) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Filme não encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.nome}</Text>

      <Text style={styles.label}>Nota</Text>
      <Text style={styles.text}>{movie.nota}</Text>

      <Text style={styles.label}>Descrição</Text>
      <Text style={styles.text}>{movie.descricao}</Text>

      <Text style={styles.label}>Data de lançamento</Text>
      <Text style={styles.text}>{movie.dataLancamento}</Text>
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
    fontSize: 26,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 25,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 15,
    marginBottom: 5,
  },

  text: {
    fontSize: 16,
    color: "#333333",
  },
});