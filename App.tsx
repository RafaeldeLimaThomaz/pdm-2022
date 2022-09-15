import * as React from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Agenda } from "react-native-calendars";
import { Avatar } from "react-native-paper";
import { LocaleConfig } from "react-native-calendars";
import { Text, Card, Button, Icon } from "react-native-elements";
import CountDown from "react-native-countdown-component";

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

function RecipesScreen({ navigation }: { navigation: any }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Card.Title>DESTINO PORTUGAL</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require("./assets/1.png")}
          />
          <Text style={{ marginBottom: 10 }}>
            Um dos destinos mais procurados onde boa parte da arquitetura do
            país data dos séculos XVI a XIX.
          </Text>
          <Button
            icon={
              <Icon
                name="airplane-outline"
                type="ionicon"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            title="RESERVE AGORA"
            onPress={() => {
              alert("Reservado!");
            }}
          />
        </Card>
        <Card>
          <Card.Title>DESTINO ESPANHA</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require("./assets/1.png")}
          />
          <Text style={{ marginBottom: 10 }}>
            A Espanha é um país em movimento, com mais de vinte séculos de
            história.
          </Text>
          <Button
            icon={
              <Icon
                name="airplane-outline"
                type="ionicon"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            title="RESERVE AGORA"
            onPress={() => {
              alert("Reservado!");
            }}
          />
        </Card>
        <Card>
          <Card.Title>DESTINO ESPANHA</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require("./assets/1.png")}
          />
          <Text style={{ marginBottom: 10 }}>
            A Espanha é um país em movimento, com mais de vinte séculos de
            história.
          </Text>
          <Button
            icon={
              <Icon
                name="airplane-outline"
                type="ionicon"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            title="RESERVE AGORA"
            onPress={() => {
              alert("Reservado!");
            }}
          />
        </Card>
        <Card>
          <Card.Title>DESTINO ESPANHA</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require("./assets/1.png")}
          />
          <Text style={{ marginBottom: 10 }}>
            A Espanha é um país em movimento, com mais de vinte séculos de
            história.
          </Text>
          <Button
            icon={
              <Icon
                name="airplane-outline"
                type="ionicon"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            title="RESERVE AGORA"
            onPress={() => {
              alert("Reservado!");
            }}
          />
        </Card>
        <Card>
          <Card.Title>DESTINO ESPANHA</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require("./assets/1.png")}
          />
          <Text style={{ marginBottom: 10 }}>
            A Espanha é um país em movimento, com mais de vinte séculos de
            história.
          </Text>
          <Button
            icon={
              <Icon
                name="airplane-outline"
                type="ionicon"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            title="RESERVE AGORA"
            onPress={() => {
              alert("Reservado!");
            }}
          />
        </Card>
      </View>
    </ScrollView>
  );
}

function ShoppingListScreen({ navigation }: { navigation: any }) {
  return <View style={styles.container}></View>;
}

function TimeLineScreen({ navigation }: { navigation: any }) {
  return <View></View>;
}

function TimerScreen({ navigation }: { navigation: any }) {
  const [isPlaying, setIsPlaying] = React.useState(true);
  return (
    <View style={styles.container}>
      <CountDown
        until={50}
        timeToShow={["D", "H", "M", "S"]}
        timeLabels={{ d: "D", h: "H", m: "M", s: "S" }}
        onFinish={() => alert("Terminado!")}
        onPress={() => alert("Contagem Regressiva!")}
        size={30}
      />
    </View>
  );
}

function ScheduleScreen({ navigation }: { navigation: any }) {
  const timeToString = (time: number) => {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  };

  const [items, setItems] = React.useState({});

  const loadItems = (day: DateData) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = 1;
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Xuqui do Belo",
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }

      const newItems: AgendaSchedule = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <View style={{ marginRight: 10, marginTop: 17 }}>
        {/* <Card style={{ backgroundColor: "#faffef" }}>
          <Card.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "grey" }}>{item.name}</Text>
                <Text style={{ color: "grey", paddingTop: 5 }}>
                  {" "}
                  - Espanhóis
                </Text>
                <Text style={{ color: "grey", paddingTop: 5 }}>
                  {" "}
                  - Ingleses
                </Text>
                <Text style={{ color: "grey", paddingTop: 5 }}>
                  {" "}
                  - Italianos
                </Text>
              </View>
              <Avatar.Text label="XD" style={{ backgroundColor: "#EF3762" }} />
            </View>
            <View style={{ flexDirection: "row", paddingTop: 30 }}>
              <Icon
                containerStyle={{ paddingLeft: 20 }}
                name="edit"
                //type="zocial"
                color="blue"
                size={22}
                onPress={() => console.log("hello")}
              />
              <Icon
                containerStyle={{ paddingLeft: 40 }}
                name="delete"
                color="#EF3762"
                size={22}
                onPress={() => console.log("hello")}
              />
            </View>
          </Card.Content>
        </Card> */}
      </View>
    );
  };

  let today = new Date().toISOString().split("T")[0];

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={today}
        renderItem={renderItem}
        showClosingKnob={true}
        theme={{
          //textDayFontWeight: "bold",

          agendaDayTextColor: "#EF3762",
          agendaDayNumColor: "#055A43",
          agendaTodayColor: "#055A43",
          agendaKnobColor: "blue",
        }}
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName="Home"
      >
        <Drawer.Screen name="Agenda" component={ScheduleScreen} />
        <Drawer.Screen name="Cronograma" component={TimeLineScreen} />
        <Drawer.Screen name="Receitas" component={RecipesScreen} />
        <Drawer.Screen name="Lista de compras" component={ShoppingListScreen} />
        <Drawer.Screen name="Timer" component={TimerScreen} />
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
