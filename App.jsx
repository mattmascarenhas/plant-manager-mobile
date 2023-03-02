import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";
import AppLoading from "expo-app-loading";
import AppRoutes from "./src/routes";

export function App() {
  //carregamento da font
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }
  return <AppRoutes />;
}

export default App;
