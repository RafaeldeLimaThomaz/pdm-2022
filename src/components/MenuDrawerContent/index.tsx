import { View, useWindowDimensions } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import { DrawerItem } from "@react-navigation/drawer";
import styles from "./styles";

export default function index(props: any) {
  const width = useWindowDimensions().width * 0.67;

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.containerMain}
    >
      <View style={styles.menuContainer}>
        <View
          style={[
            styles.menuItemsCard,
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
            tvParallaxProperties={undefined}
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
            styles.menuItemsCard,
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
            tvParallaxProperties={undefined}
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
            styles.menuItemsCard,
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
            tvParallaxProperties={undefined}
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
            styles.menuItemsCard,
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
            tvParallaxProperties={undefined}
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
            styles.menuItemsCard,
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
            tvParallaxProperties={undefined}
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
