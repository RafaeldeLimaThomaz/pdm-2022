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

import MenuDrawerContent from "./src/components/MenuDrawerContent";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";
import AppContext from "./src/contexts/AppContext";

const Drawer = createDrawerNavigator();
export default function App() {
  const [searchBarVisible, setSearchBarVisible] = React.useState(false);
  const searchBar = { searchBarVisible };

  return (
    <AppContext.Provider value={searchBar.searchBarVisible}>
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
        </Drawer.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
