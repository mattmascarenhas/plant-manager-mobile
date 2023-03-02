import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Confirmation from "../pages/Confimation";
import PlantSelect from "../pages/PlantSelect";
import UserIndetification from "../pages/UserIndentification";
import Welcome from "../pages/Welcome";

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bem-vindo" headerMode="none">
        <Stack.Screen
          name="Bem-vindo"
          component={Welcome}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Identificação"
          component={UserIndetification}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Confirmação"
          component={Confirmation}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Seleção da Planta"
          component={PlantSelect}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;
