import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import Home from "./src/screens/Home";
import MyAgenda from "./src/screens/MyAgenda";
import TimeLine from "./src/screens/TimeLine";
import Recipes from "./src/screens/Recipes";
import ShoppingList from "./src/screens/ShoppingList";
import Timer from "./src/screens/Timer";
import CreateRecipe from "./src/screens/CreateRecipe";
import RecipeDetails from "./src/screens/RecipeDetails";

import firebaseConfig from "./src/config/firebaseConfig";
import useFirebase from "./src/hooks/useFirebase";

import MenuDrawerContent from "./src/components/MenuDrawerContent";
import { AppContext } from "./src/contexts/AppContext";

import HeaderRight from "./src/components/HeaderRight";
import AppModal from "./src/components/AppModal";

const Drawer = createDrawerNavigator();

export default function App() {
  const [searchBarVisible, setSearchBarVisible] = React.useState(false);
  const appContext = {
    searchBarVisible,
    setSearchBarVisible,
  };
  const firebaseApp = useFirebase(firebaseConfig);

  if (!firebaseApp) return <Text>Loading...</Text>;

  return (
    <AppModal>
      <AppContext.Provider value={appContext}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <MenuDrawerContent {...props} />}
            initialRouteName="Home"
          >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Agenda" component={MyAgenda} />
            <Drawer.Screen name="Cronograma" component={TimeLine} />
            <Drawer.Screen
              name="Receitas"
              component={Recipes}
              options={{
                headerRight: () => <HeaderRight />,
              }}
            />

            <Drawer.Screen name="Lista de compras" component={ShoppingList} />
            <Drawer.Screen name="Timer" component={Timer} />
            <Drawer.Screen name="Criar Receita" component={CreateRecipe} />
            <Drawer.Screen name="Receita Detalhada" component={RecipeDetails} />
          </Drawer.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
    </AppModal>
  );
}
