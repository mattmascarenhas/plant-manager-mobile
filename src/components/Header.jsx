import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import colors from "../styles/colors";
import userImg from "../assets/user.png";

export function Header() {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.content}>
        <Text style={style.content}>Olá,</Text>
        <Text style={style.content}>Matheus</Text>
      </View>
      <Image source={userImg} />
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: 100,
  },
  content: {
    width: "100%",
  },
});
