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

const B = (props) => (
  <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
);

const CARDS = [
  {
    id: "1",
    title: "MARTA ROCHA",
    image: "../../assets/martaRocha.png",
    text: "",
  },
  {
    id: "2",
    title: "DOIS AMORES",
    image: "../../assets/doisAmores.png",
    text: "",
  },
  {
    id: "3",
    title: "RED VELVET",
    image: "../../assets/redVelvet.png",
    text: "",
  },
  {
    id: "4",
    title: "RAFAELLO",
    image: "../../assets/martaRocha.png",
    text: "",
  },
  {
    id: "5",
    title: "LIMÃO SICILIANO C/ FRUTAS VERMELHAS",
    image: "../../assets/martaRocha.png",
    text: "",
  },
];

const Recipes = ({}: { navigation: any }) => {
  const width = useWindowDimensions().width * 0.6;
  const cardWidth = useWindowDimensions().width * 0.9;

  const [images, setimages] = React.useState([
    require("../../assets/martaRocha.png"),
    require("../../assets/doisAmores.png"),
    require("../../assets/redVelvet.png"),
  ]);

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
                source={item}
                style={{ resizeMode: "contain", width: width * 0.6 }}
              ></Image>
            </View>
          </View>

          <Text style={styles.cardText}>
            Combinação deliciosa de creme de <B>ovos</B>, crocante de{" "}
            <B>nozes</B>, suspiro com <B>ameixa</B> e/ou <B>damasco </B>
            caramelizados.
          </Text>
        </View>
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
      data={CARDS}
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
});
export default Recipes;
