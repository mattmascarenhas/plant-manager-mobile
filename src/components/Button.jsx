import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Button({ title, ...rest }) {
  return (
    <TouchableOpacity style={style.container} {...rest}>
      <Text style={style.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading,
  },
});

export default Button;
