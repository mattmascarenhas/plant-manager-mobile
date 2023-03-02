import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function UserIndetification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState("");
  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate("Confirmação");
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }
  function handleInputFocus() {
    setIsFocused(true);
  }
  function handleInputChange(value) {
    setIsFilled(!!value);
    setName(value);
  }

  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView
        style={style.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={style.content}>
            <View style={style.form}>
              <View style={style.header}>
                <Text style={style.emoji}>😊</Text>
                <Text style={style.title}>Como podemos {"\n"}chamar você?</Text>

                <TextInput
                  style={[
                    style.input,
                    (isFocused || isFilled) && { borderColor: colors.green },
                  ]}
                  placeholder="Digite o nome"
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                  onChange={handleInputChange}
                />
              </View>
              <View style={style.footer}>
                <Button onPress={handleNavigation} title="Confirmar" />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 54,
    alignItems: "center",
    width: "100%",
  },
  header: {
    alignItems: "center",
    width: "100%",
  },
  emoji: {
    fontSize: 44,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.body_dark,
    width: "100%",
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20,
  },
  footer: {
    marginTop: 40,
    width: "100%",
    paddingHorizontal: 20,
  },
});

export default UserIndetification;
