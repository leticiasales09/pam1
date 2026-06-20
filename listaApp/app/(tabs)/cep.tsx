import React, {useState} from "react";
import{View,Text,TextInput,TouchableOpacity} from "react-native";

export default function Cep(){
  const [cep, setCep] = useState("");
  return (
    <View
      style={{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        padding:20,
        backgroundColor:"#fff",
      }}
    >
      <View style={{width:"100%"}}>
        <TextInput
          placeholder="Digite o CEP"
          placeholderTextColor="#888"
          value={cep}
          onChangeText={setCep}
          keyboardType="numeric"
          style={{
            borderWidth: 1,
            padding:10,
            marginBottom:10,
            width: "100%",}}
        />
        <TouchableOpacity
          style={{
            backgroundColor:"#1E90FF",
            padding:10,
            width:"100%",
          }}
        >
          <Text style={{color:"white",textAlign:"center"}}>
            Buscar o CEP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}