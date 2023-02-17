import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../styles/colors";

export function Button() {
  return (
    <TouchableOpacity style={style.button} activeOpacity={0.7}>
      <Text style={style.textButton}>{">"}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    width: 56,
    height: 56,
  },
  textButton: {
    fontSize: 32,
    color: "white",
  },
});

export default Button;
