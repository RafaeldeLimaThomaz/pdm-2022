import React from "react";
import { View, Text } from "react-native";
import {
  Agenda,
  AgendaSchedule,
  DateData,
  LocaleConfig,
} from "react-native-calendars";
import { Avatar, Card } from "react-native-paper";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { languageConfig } from "../languageConfig";

LocaleConfig.locales["pt"] = {
  monthNames: languageConfig.months,
  monthNamesShort: languageConfig.monthsShort,
  dayNames: languageConfig.days,
  dayNamesShort: languageConfig.daysShort,
};

LocaleConfig.defaultLocale = "pt";

const MyAgenda = ({}: { navigation: any }) => {
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
              name: "Pedido 01",
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

  const renderItem = (item: { name: string }) => {
    return (
      <View style={{ marginRight: 10, marginTop: 17 }}>
        <Card style={{ backgroundColor: "#faffef" }}>
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
                <Text style={{ color: "#222222", paddingTop: 10 }}>
                  {item.name}
                </Text>
                <Text style={{ color: "#222222", paddingTop: 5 }}>
                  {"     "}- Espanhóis
                </Text>
                <Text style={{ color: "#222222", paddingTop: 5 }}>
                  - Ingleses
                </Text>
                <Text style={{ color: "#222222", paddingTop: 5 }}>
                  - Italianos
                </Text>
              </View>
              <Avatar.Text label="XD" style={{ backgroundColor: "#EF3762" }} />
            </View>
            <View style={{ flexDirection: "row", paddingTop: 30 }}>
              <TouchableOpacity
                style={{
                  marginLeft: 10,
                  borderRadius: 5,
                }}
                onPress={() => {
                  alert("Editar");
                }}
              >
                <Icon
                  name="edit"
                  size={20}
                  type="feather"
                  color="green"
                  tvParallaxProperties={undefined}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginLeft: 30,
                  borderRadius: 5,
                }}
                onPress={() => {
                  alert("Excruir");
                }}
              >
                <Icon
                  name="trash"
                  size={20}
                  type="feather"
                  color="red"
                  tvParallaxProperties={undefined}
                />
              </TouchableOpacity>
            </View>
          </Card.Content>
        </Card>
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
};

export default MyAgenda;
