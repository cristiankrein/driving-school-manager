import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login({ navigation }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View
        style={{
          backgroundColor: "white",
          margin: 50,
          paddingTop: 50,
        }}
      >
        <Text style={{ fontSize: 15, textAlign: "center" }}>
          ACESSE SUA CONTA
        </Text>
        <TextInput
          placeholder="E-mail"
          style={{
            backgroundColor: "transparent",
            fontSize: 12,
            marginTop: 10,
            padding: 7,
            margin: 10,
          }}
          keyboardType="default"
        ></TextInput>
        <TextInput
          placeholder="Senha"
          keyboardType="numeric"
          secureTextEntry={true}
          style={{
            backgroundColor: "white",
            fontSize: 12,
            marginTop: 10,
            padding: 7,
            margin: 10,
          }}
        ></TextInput>
        <TouchableOpacity style={{ margin: 10, backgroundColor: "#000" }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              color: "#fff",
              margin: 10,
            }}
          >
            Entrar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{ margin: 10, backgroundColor: "#000" }}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              color: "#fff",
              margin: 10,
            }}
          >
            Home
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
