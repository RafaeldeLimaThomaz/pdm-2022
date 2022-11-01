import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/screens/Home";
import MyAgenda from "./src/screens/MyAgenda";
import TimeLine from "./src/screens/TimeLine";
import Recipes from "./src/screens/Recipes";
import ShoppingList from "./src/screens/ShoppingList";
import Timer from "./src/screens/Timer";
import CreateRecipe from "./src/screens/CreateRecipe";
import RecipeDetails from "./src/screens/RecipeDetails";

import MenuDrawerContent from "./src/components/MenuDrawerContent";
import { AppContext } from "./src/contexts/AppContext";

import config from "./src/database/config";
import { createConnection } from "typeorm";
import HeaderRight from "./src/components/HeaderRight";

const Drawer = createDrawerNavigator();

export default function App() {
  // add a useCallback hook
  const connect = React.useCallback(async () => {
    try {
      const connection = await createConnection(config); // create a connection with our config

      // await connection.getRepository("Recipe").save({
      //   title: "Marta Rocha",
      // });

      // await connection.getRepository("Recipe").save({
      //   title: "Limão Siciliano",
      // });

      // await connection.getRepository("Recipe").save({
      //   title: "Chocolatudo",
      // });

      // await connection.getRepository("Ingredient").save({
      //   title: "leite condensado",
      // });
      // await connection.query("DELETE FROM ingredient");

      // await connection.getRepository("Ingredient").save({
      //   title: "creme de leite",
      // });

      // await connection.getRepository("Ingredient").save({
      //   title: "chocolate preto ao leite",
      // });

      // await connection.getRepository("Ingredient").save({
      //   title: "chocolate preto meio amargo",
      // });

      // await connection.getRepository("Ingredient").save({
      //   title: "chocolate branco",
      // });

      //await connection.query("DELETE FROM ingredient WHERE id = 3");

      //const cakes = await connection.getRepository("Recipe").find();
      const ingredients = await connection.getRepository("Ingredient").find();
      console.log(ingredients);
    } catch (error) {
      console.log(error); // check (or deal) with connection errors
    }
  }, []);

  // Important: connect inside a dependency-free useEffect hook to avoid multiple calls.
  React.useEffect(() => {
    connect(); // this must be done once in the App's entry point (I suggest here in App.js)
  }, []);

  const [searchBarVisible, setSearchBarVisible] = React.useState(false);

  const appContext = {
    searchBarVisible,
    setSearchBarVisible,
  };

  return (
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
  );
}
