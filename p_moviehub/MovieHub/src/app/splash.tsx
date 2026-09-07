import { StyleSheet, Text, View } from "react-native";

export default function Splash() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MovieHub</Text>

      <Text style={styles.text}>
        Gerenciador de Filmes
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
  },

  text: {
    fontSize: 16,
    color: "#333333",
    marginTop: 10,
  },
});