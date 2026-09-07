import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useMovies } from "../contexts/MovieContext";

export default function AddMovie() {
  const router = useRouter();
  const { addMovie } = useMovies();

  const [nome, setNome] = useState("");
  const [nota, setNota] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataLancamento, setDataLancamento] = useState("");

  function formatarData(texto: string) {
    // Remove tudo que não for número
    const numeros = texto.replace(/\D/g, "");

    // Limita a data para 8 números: DDMMYYYY
    const limitado = numeros.slice(0, 8);

    let data = limitado;

    if (limitado.length > 4) {
      data =
        limitado.slice(0, 2) +
        "/" +
        limitado.slice(2, 4) +
        "/" +
        limitado.slice(4);
    } else if (limitado.length > 2) {
      data =
        limitado.slice(0, 2) +
        "/" +
        limitado.slice(2);
    }

    setDataLancamento(data);
  }

  function handleAddMovie() {
    const novoFilme = {
      id: Date.now().toString(),
      nome: nome,
      nota: Number(nota),
      descricao: descricao,
      dataLancamento: dataLancamento,
    };

    addMovie(novoFilme);

    // Limpa o formulário
    setNome("");
    setNota("");
    setDescricao("");
    setDataLancamento("");

    // Volta para a tela de filmes
    router.push("/");
  }

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Text style={styles.title}>Adicionar Filme</Text>

          <Text style={styles.label}>Nome do filme</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite o nome do filme"
            placeholderTextColor="#777777"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Nota</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite a nota"
            placeholderTextColor="#777777"
            keyboardType="numeric"
            value={nota}
            onChangeText={setNota}
          />

          <Text style={styles.label}>Descrição</Text>

          <TextInput
            style={styles.descriptionInput}
            placeholder="Digite uma breve descrição"
            placeholderTextColor="#777777"
            multiline
            value={descricao}
            onChangeText={setDescricao}
          />

          <Text style={styles.label}>Data de lançamento</Text>

          <TextInput
            style={styles.input}
            placeholder="DD/MM/AAAA"
            placeholderTextColor="#777777"
            keyboardType="numeric"
            value={dataLancamento}
            onChangeText={formatarData}
            maxLength={10}
          />

          <View style={styles.button}>
            <Button
              title="Adicionar Filme"
              onPress={handleAddMovie}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scrollContainer: {
    flexGrow: 1,
  },

  container: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 25,
  },

  label: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 5,
    marginTop: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#999999",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: "#000000",
  },

  descriptionInput: {
    borderWidth: 1,
    borderColor: "#999999",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: "#000000",
    height: 100,
    textAlignVertical: "top",
    marginBottom: 20,
  },

  button: {
    marginTop: 10,
    marginBottom: 20,
  },
});