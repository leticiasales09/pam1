import React, {useState}from "react";
import {View, Text, TextInput,TouchableOpacity,Switch,} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Picker} from "@react-native-picker/picker";

export default function Cadastro(){
  const [nome, setNome]=useState("");
  const [idade, setIdade]=useState("");
  const [email,setEmail]=useState("");
  const [senha,setSenha]=useState("");
  const [confirmarSenha, setConfirmarSenha] =useState("");
  const [cargo, setCargo]= useState("manager");
  const [logado,setLogado ] =useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
    
      <View
        style={{
          flex: 1,
          justifyContent:"center",
          alignItems:"center",
          padding:20,
        }}
      >
        <View
          style={{
            borderWidth:1,
            padding:15,
            maxWidth:270,
            width:"100%",
            backgroundColor:"#fff",
          }}
        >
          <TextInput
            placeholder="Nome"
            placeholderTextColor="#888"
            value={nome}
            onChangeText={setNome}
            style={{borderWidth:1, marginBottom:10, padding:8}}
          />
          <TextInput
            placeholder="Idade"
            placeholderTextColor="#888"
            value={idade}
            onChangeText={setIdade}
            keyboardType="numeric"
            style={{borderWidth:1, marginBottom:10, padding:8}}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            style={{borderWidth:1, marginBottom:10, padding: 8}}
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#888"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            maxLength={8}
            style={{borderWidth:1, marginBottom:10, padding: 8}}
          />
          <TextInput
            placeholder="Confirmar senha"
            placeholderTextColor="#888"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry
            maxLength={8}
            style={{borderWidth: 1, marginBottom: 10, padding: 8}}
          />
          <Picker
            selectedValue={cargo}
            onValueChange={(itemValue)=>setCargo(itemValue)}
          >
            <Picker.Item label="Administrador" value="admin"/>
            <Picker.Item label="Gestor" value="manager"/>
            <Picker.Item label="Usuário" value="user"/>
          </Picker>

          <Text style={{marginTop: 10, color: "#000"}}>Logado</Text>
          <Switch
            value={logado}
            onValueChange={setLogado}
            trackColor={{ false:"#e77878",true:"#94df83" }}
            thumbColor={logado ?"#47eb22":"#ed1111"}
          />

          <TouchableOpacity
            style={{
              backgroundColor:"#1E90FF",
              padding:10,
              marginTop:10,
            }}
          >
            <Text style={{color:"white",textAlign:"center"}}>
              Salvar
            </Text>
          </TouchableOpacity>
          <Text style={{color:"#000"}}>Nome: {nome}</Text>
          <Text style={{color:"#000"}}>Idade: {idade}</Text>
          <Text style={{color:"#000"}}>Email: {email}</Text>
          <Text style={{color:"#000"}}>Cargo: {cargo}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}