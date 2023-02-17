import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import wateringImg from "../assets/watering.png";
import Button from "../components/Button";
import colors from "../styles/colors";

export function Welcome() {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>
        Gerencie {"\n"} suas plantas de {"\n"} forma fácil
      </Text>
      <Image source={wateringImg} style={style.image} />
      <Text style={style.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <Button />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1, //ocupa a tela toda
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  image: {
    width: 292,
    height: 284,
  },
});

export default Welcome;
