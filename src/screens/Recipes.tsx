import React, { ReactNode } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { Card, Icon } from "react-native-elements";
import StarCounter from "../components/StarCounter";

import cards, { CardDataProps } from "../data/cards";

const Recipes = ({}: { navigation: any }) => {
  const width = useWindowDimensions().width * 0.6;
  const cardWidth = useWindowDimensions().width * 0.9;

  const renderItem = (item: CardDataProps) => {
    return (
      <View style={styles.container}>
        <Card
          containerStyle={{
            width: cardWidth,
            backgroundColor: "#EF3762",
            borderRadius: 10,
          }}
        >
          <Card.Title style={{ color: "white" }}>{item.title}</Card.Title>
          <Card.Divider color="white" width={1} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <View
                style={{
                  backgroundColor: "#DDFAF3",
                  marginBottom: width / 15,
                  width: width * 0.6,
                  height: width * 0.6,
                  borderRadius: 5,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={item.image}
                  style={{ resizeMode: "contain", width: width * 0.6 }}
                ></Image>
              </View>
            </View>

            <Text style={styles.cardText}>{item.text}</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <StarCounter />
          </View>

          <Card.Divider color="white" width={1} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                width: width * 0.6,
                height: width / 6,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "black", fontWeight: "bold" }}>ABRIR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableIcon}>
              <Icon
                name="edit"
                size={20}
                type="feather"
                color="green"
                tvParallaxProperties={undefined}
              ></Icon>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableIcon}>
              <Icon
                name="trash"
                size={20}
                type="feather"
                color="#EF3762"
                tvParallaxProperties={undefined}
              ></Icon>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    );
  };

  return (
    <FlatList
      data={cards}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddfafC",
  },
  touchableIcon: {
    backgroundColor: "white",
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  cardText: {
    color: "white",
    flex: 1,
    flexWrap: "wrap",
    textAlign: "justify",
    marginLeft: 15,
  },
});

export default Recipes;
