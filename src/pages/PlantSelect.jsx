import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Header } from "../components/Header";
import colors from "../styles/colors";

export function PlantSelect() {
  return (
    <SafeAreaView style={style.container}>
      <Header />
      <View style={style.content}>
        <Text style={style.container}>Selecionar Planta</Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PlantSelect;
