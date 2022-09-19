import * as React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { LocaleConfig } from "react-native-calendars";

import { languageConfig } from "./src/languageConfig";

import MyAgenda from "./src/screens/MyAgenda";
import TimeLine from "./src/screens/TimeLine";
import Recipes from "./src/screens/Recipes";
import ShoppingList from "./src/screens/ShoppingList";
import Timer from "./src/screens/Timer";
import MenuDrawerContent from "./src/components/MenuDrawerContent";

LocaleConfig.locales["pt"] = {
  monthNames: languageConfig.months,
  monthNamesShort: languageConfig.monthsShort,
  dayNames: languageConfig.days,
  dayNamesShort: languageConfig.daysShort,
};

LocaleConfig.defaultLocale = "pt";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <MenuDrawerContent {...props} />}
        initialRouteName="Home"
      >
        <Drawer.Screen name="Agenda" component={MyAgenda} />
        <Drawer.Screen name="Cronograma" component={TimeLine} />
        <Drawer.Screen name="Receitas" component={Recipes} />
        <Drawer.Screen name="Lista de compras" component={ShoppingList} />
        <Drawer.Screen name="Timer" component={Timer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
});
