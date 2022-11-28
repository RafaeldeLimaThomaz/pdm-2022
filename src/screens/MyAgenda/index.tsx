import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import {
  Agenda,
  AgendaSchedule,
  DateData,
  LocaleConfig,
} from "react-native-calendars";
import { Avatar, Card } from "react-native-paper";
import { Icon } from "react-native-elements";
import { ModalContext } from "../../components/AppModal";
import { TouchableOpacity } from "react-native-gesture-handler";
import { languageConfig } from "../../languageConfig";
import AddIngredientModal from "../CreateRecipe/AddIngredientModal";
import AddOrderModal from "./AddOrderModal";

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
  const appModal = useContext(ModalContext);

  const handleAddIngredientToRecipe = (ingredient: any) => {};

  const loadItems = (day: DateData) => {
    setTimeout(() => {
      for (let i = 0; i < 8; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = 1;
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Pedido " + 0 + (j + 1),
              height: 4,
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
        <Card
          style={{
            backgroundColor: "#fff5f9",
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#fa538d",
          }}
        >
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
                  margin: 10,
                }}
              >
                <Text
                  style={{
                    color: "#ab083c",
                    paddingTop: 10,
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
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
                onPress={() =>
                  appModal.show(
                    <AddOrderModal onAdd={handleAddIngredientToRecipe} />
                  )
                }
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
          agendaDayTextColor: "#EF3762",
          agendaDayNumColor: "#055A43",
          agendaTodayColor: "#EF3762",
          agendaKnobColor: "#10bcd0",
        }}
      />
    </View>
  );
};

export default MyAgenda;
