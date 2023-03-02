import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";
import AppLoading from "expo-app-loading";
import { Welcome } from "./src/pages/Welcome";
import { UserIndetification } from "./src/pages/UserIndentification";
import Confirmation from "./src/pages/Confimation";

export function App() {
  //carregamento da font
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }
  return (
    <>
      <Confirmation />
    </>
  );
}

export default App;
