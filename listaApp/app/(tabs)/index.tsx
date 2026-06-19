import { Image, View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        gap: 20,
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={require("../../assets/eteclogo.jpg")}
        style={{
          width: 140,
          height: 140,
          resizeMode: "contain",
          marginBottom: 20,
        }}
      />

      <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>
        Bem-vindo ao App
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/cadastro")}
        style={{
          backgroundColor: "#1E90FF",
          padding: 12,
          width: "80%",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Cadastro
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/cep")}
        style={{
          backgroundColor: "#32CD32",
          padding: 12,
          width: "80%",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Consulta CEP
        </Text>
      </TouchableOpacity>
    </View>
  );
}