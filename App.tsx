import * as React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { LocaleConfig } from "react-native-calendars";
import { Icon } from "react-native-elements";

import TimeLine from "./src/screens/TimeLine";
import Recipes from "./src/screens/Recipes";
import Timer from "./src/screens/Timer";
import MyAgenda from "./src/screens/MyAgenda";
import ShoppingList from "./src/screens/ShoppingList";

LocaleConfig.locales["pt"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
};

LocaleConfig.defaultLocale = "pt";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
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

function CustomDrawerContent(props: any) {
  const width = useWindowDimensions().width * 0.67;

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles2.containerMain}
    >
      <View style={styles2.menuContainer}>
        <View
          style={[
            styles2.menuItemsCard,
            {
              backgroundColor: "#fff",
              width: width,
              height: 50,
              justifyContent: "space-between",
            },
          ]}
        >
          <Icon
            containerStyle={{ paddingLeft: 15 }}
            name="calendar"
            type="font-awesome"
            color="green"
            size={20}
          />
          <DrawerItem
            style={{
              position: "absolute",
              left: 0,
              width: width,
              height: 50,
              paddingLeft: 30,
            }}
            label="Agenda"
            labelStyle={{ color: "green" }}
            onPress={() => {
              props.navigation.navigate("Agenda", { body: "agenda" });
            }}
          />
        </View>

        <View
          style={[
            styles2.menuItemsCard,
            {
              backgroundColor: "#fff",
              width: width,
              height: 50,
              justifyContent: "space-between",
            },
          ]}
        >
          <Icon
            containerStyle={{ paddingLeft: 15 }}
            name="check"
            type="entypo"
            color="green"
            size={20}
          />
          <DrawerItem
            style={{
              position: "absolute",
              left: 0,
              width: width,
              height: 50,
              paddingLeft: 30,
            }}
            label="Cronograma"
            labelStyle={{ color: "green" }}
            onPress={() => {
              props.navigation.navigate("Cronograma", { body: "cronograma" });
            }}
          />
        </View>

        <View
          style={[
            styles2.menuItemsCard,
            {
              backgroundColor: "#fff",
              width: width,
              height: 50,
              justifyContent: "space-between",
            },
          ]}
        >
          <Icon
            containerStyle={{ paddingLeft: 15 }}
            name="book"
            type="font-awesome"
            color="green"
            size={21}
          />
          <DrawerItem
            style={{
              position: "absolute",
              left: 0,
              width: width,
              paddingLeft: 30,
              height: 50,
            }}
            label="Receitas"
            labelStyle={{ color: "green" }}
            onPress={() => {
              props.navigation.navigate("Receitas", { body: "receitas" });
            }}
          />
        </View>
        <View
          style={[
            styles2.menuItemsCard,
            {
              backgroundColor: "#fff",
              width: width,
              height: 50,
              justifyContent: "space-between",
            },
          ]}
        >
          <Icon
            containerStyle={{ paddingLeft: 10 }}
            name="cart"
            type="ionicon"
            color="green"
            size={24}
          />
          <DrawerItem
            style={{
              position: "absolute",
              left: 0,
              paddingLeft: 30,
              width: width,
              height: 50,
            }}
            label="Lista de compras"
            labelStyle={{ color: "green" }}
            onPress={() => {
              props.navigation.navigate("Lista de compras", {
                body: "lista de compras",
              });
            }}
          />
        </View>
        <View
          style={[
            styles2.menuItemsCard,
            {
              backgroundColor: "#fff",
              width: width,
              height: 50,
              justifyContent: "space-between",
            },
          ]}
        >
          <Icon
            containerStyle={{ paddingLeft: 10 }}
            name="timer"
            color="green"
            size={23}
          />
          <DrawerItem
            style={{
              position: "absolute",
              left: 0,
              paddingLeft: 30,
              width: width,
              height: 50,
            }}
            label="Timer"
            labelStyle={{ color: "green" }}
            onPress={() => {
              props.navigation.navigate("Timer", { body: "timer" });
            }}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  containerMain: {
    flex: 1,
    backgroundColor: "#FAFAF0",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  menuContainer: {
    height: "40%",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  menuItemsCard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
