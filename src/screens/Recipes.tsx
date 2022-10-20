import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Card, Icon } from "react-native-elements";
import StarCounter from "../components/StarCounter";
import SearchBar from "react-native-dynamic-search-bar";
import cards, { CardDataProps } from "../data/cards";
import { AppContext, AppContextProps } from "../contexts/AppContext";
import { NavigationContext } from "@react-navigation/native";

interface ItemProps {
  item: CardDataProps;
}

const Item = function ({ item }: ItemProps) {
  const navigation = useContext(NavigationContext);

  const width = useWindowDimensions().width * 0.6;
  const cardWidth = useWindowDimensions().width * 0.9;

  return (
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
        <Image
          source={item.image}
          style={{
            resizeMode: "contain",
            width: width * 0.6,
            backgroundColor: item.backColor,
            marginBottom: width / 15,
            height: width * 0.6,
            borderRadius: 10,
            justifyContent: "center",
          }}
        ></Image>

        <Text style={styles.cardText}>{item.text}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <StarCounter />
      </View>

      <Card.Divider color="white" width={1} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
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
          onPress={() => {
            navigation?.navigate("Receita Detalhada", {
              body: "Receita Detalhada",
            });
          }}
        >
          <Text style={{ color: "black", fontWeight: "bold" }}>ABRIR</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon
            name="edit"
            size={20}
            type="feather"
            color="green"
            raised
            onPress={() => {
              alert("Edit");
            }}
            tvParallaxProperties={undefined}
          ></Icon>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon
            name="trash"
            size={20}
            raised
            onPress={() => {
              alert("Excluir");
            }}
            type="feather"
            color="#EF3762"
            tvParallaxProperties={undefined}
          ></Icon>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const Recipes = () => {
  const [filteredCards, setFilteredCards] = useState(cards);

  const appContext = useContext<AppContextProps>(AppContext);

  const filterCards = (text: string) => {
    const filteredResult = cards.filter((card: CardDataProps) =>
      card.title.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredCards(filteredResult);
  };

  return (
    <View style={styles.container}>
      {appContext.searchBarVisible && (
        <SearchBar
          style={{
            marginTop: 15,
            marginBottom: 10,
            backgroundColor: "#EF3762",
          }}
          textInputStyle={styles.textInput}
          placeholderTextColor="#FAD3D9"
          onChangeText={filterCards}
          onClearPress={() => setFilteredCards(cards)}
          searchIconComponent={
            <Icon
              name="search"
              size={20}
              type="feather"
              color="white"
              tvParallaxProperties={undefined}
            ></Icon>
          }
          clearIconComponent={
            <Icon
              name="x"
              size={20}
              type="feather"
              color="white"
              tvParallaxProperties={undefined}
            ></Icon>
          }
          placeholder="Pesquisar receita"
        />
      )}

      <View
        style={{
          flex: 1,
          height: useWindowDimensions().height,
          width: useWindowDimensions().width,
        }}
      >
        <FlashList
          data={filteredCards}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
          estimatedItemSize={100}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddfafC",
  },

  cardText: {
    color: "white",
    flex: 1,
    flexWrap: "wrap",
    textAlign: "justify",
    marginLeft: 15,
  },
  textInput: {
    color: "white",
  },
});

export default Recipes;
