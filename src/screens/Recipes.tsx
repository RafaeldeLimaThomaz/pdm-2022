import React from "react";
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
import Stars from "react-native-stars";

const B = (props) => (
  <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
);

const CARDS = [
  {
    id: "1",
    title: "MARTA ROCHA",
    image: require("../../assets/martaRocha.png"),
    text: (
      <Text>
        Combinação deliciosa de creme de <B>ovos</B>, crocante de <B>nozes</B>,
        suspiro com <B>ameixa</B> e/ou <B>damasco </B>
        caramelizados
      </Text>
    ),
  },
  {
    id: "2",
    title: "DOIS AMORES",
    image: require("../../assets/doisAmores.png"),
    text: (
      <Text>
        Massa de pão-de-ló de <B>chocolate</B>, com recheio de brigadeiro
        <B> branco</B> e brigadeiro <B>preto</B>, com opcional de{" "}
        <B>morangos</B>
      </Text>
    ),
  },
  {
    id: "3",
    title: "RED VELVET",
    image: require("../../assets/redVelvet.png"),
    text: "",
  },
  {
    id: "4",
    title: "RAFAELLO",
    image: require("../../assets/doisAmores.png"),
    text: "",
  },

  {
    id: "5",
    title: "LIMÃO SICILIANO C/ FRUTAS VERMELHAS",
    image: require("../../assets/redVelvet.png"),
    text: "",
  },
];

const Recipes = ({}: { navigation: any }) => {
  const width = useWindowDimensions().width * 0.6;
  const cardWidth = useWindowDimensions().width * 0.9;

  const [cards, setCards] = React.useState(CARDS);

  const renderItem = ({ item }) => (
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
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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
          <Stars
            default={3}
            count={5}
            half={true}
            fullStar={
              <Icon
                name={"star"}
                color={"white"}
                size={20}
                type="entypo"
                style={styles.myStarStyle}
                tvParallaxProperties={undefined}
              />
            }
            emptyStar={
              <Icon
                name={"star-outline"}
                type="material-community"
                color={"white"}
                size={20}
                style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                tvParallaxProperties={undefined}
              />
            }
            halfStar={
              <Icon
                name={"star-half"}
                type="material-community"
                color={"white"}
                size={20}
                style={styles.myStarStyle}
                tvParallaxProperties={undefined}
              />
            }
          />
        </View>

        <Card.Divider color="white" width={1} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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

  return (
    <FlatList
      data={cards}
      renderItem={renderItem}
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
  myStarStyle: {
    color: "yellow",
    backgroundColor: "transparent",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: "white",
  },
});
export default Recipes;
