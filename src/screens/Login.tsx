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
      <View style={{ backgroundColor: "white" }}>
        <TextInput
          placeholder="E-mail"
          style={{
            backgroundColor: "transparent",
            fontSize: 20,
            marginTop: 10,
            padding: 7,
            margimBottom: 15,
          }}
          keyboardType="default"
        ></TextInput>
        <TextInput
          placeholder="Senha"
          keyboardType="numeric"
          secureTextEntry={true}
          style={{
            backgroundColor: "white",
            fontSize: 20,
            marginTop: 10,
            padding: 7,
            margimBottom: 15,
          }}
        ></TextInput>
        <TouchableOpacity>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
