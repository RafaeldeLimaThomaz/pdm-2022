import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";

import Home from "./src/screens/Home";
import MyAgenda from "./src/screens/MyAgenda";
import TimeLine from "./src/screens/TimeLine";
import Recipes from "./src/screens/Recipes";
import ShoppingList from "./src/screens/ShoppingList";
import Timer from "./src/screens/Timer";
import CreateRecipe from "./src/screens/CreateRecipe";
import RecipeDetails from "./src/screens/RecipeDetails";

import MenuDrawerContent from "./src/components/MenuDrawerContent";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";
import AppContext from "./src/contexts/AppContext";
import AddRecipeContext from "./src/contexts/AddRecipeContext";

import config from "./src/database/config";
import { createConnection } from "typeorm";

const Drawer = createDrawerNavigator();

export default function App() {
  // add a useCallback hook
  const connect = React.useCallback(async () => {
    try {
      const connection = await createConnection(config); // create a connection with our config

      await connection.getRepository("Recipe").save({
        title: "Marta Rocha",
      });

      await connection.getRepository("Recipe").save({
        title: "Limão Siciliano",
      });

      await connection.getRepository("Recipe").save({
        title: "Chocolatudo",
      });

      const cakes = await connection.getRepository("Recipe").find();
      console.log(cakes);
    } catch (err) {
      console.log(err); // check (or deal) with connection errors
    }
  }, []);

  // Important: connect inside a dependency-free useEffect hook to avoid multiple calls.
  React.useEffect(() => {
    connect(); // this must be done once in the App's entry point (I suggest here in App.js)
  }, []);

  const [searchBarVisible, setSearchBarVisible] = React.useState(false);
  const [addRecipe, setAddRecipe] = React.useState(false);
  return (
    <AddRecipeContext.Provider value={addRecipe}>
      <AppContext.Provider value={searchBarVisible}>
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
                headerRight: () => (
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      style={{
                        marginRight: 40,
                      }}
                      onPress={() => {
                        setSearchBarVisible(!searchBarVisible);
                      }}
                    >
                      <Icon
                        name="search"
                        size={23}
                        type="material"
                        color={"black"}
                        tvParallaxProperties={undefined}
                      ></Icon>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        marginRight: 25,
                      }}
                      onPress={() => {
                        setAddRecipe(!addRecipe);
                        console.log(addRecipe);
                      }}
                    >
                      <Icon
                        name="plus"
                        size={23}
                        type="entypo"
                        color={"black"}
                        tvParallaxProperties={undefined}
                      ></Icon>
                    </TouchableOpacity>
                  </View>
                ),
              }}
            />

            <Drawer.Screen name="Lista de compras" component={ShoppingList} />
            <Drawer.Screen name="Timer" component={Timer} />
            <Drawer.Screen name="Criar Receita" component={CreateRecipe} />
            <Drawer.Screen name="Receita Detalhada" component={RecipeDetails} />
          </Drawer.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
    </AddRecipeContext.Provider>
  );
}
