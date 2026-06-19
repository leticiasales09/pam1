import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Cep() {
  const [cep, setCep] = useState("");

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <TextInput
        placeholder="Digite o CEP"
        placeholderTextColor="#888"
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#1E90FF",
          padding: 10,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Buscar CEP
        </Text>
      </TouchableOpacity>
    </View>
  );
}