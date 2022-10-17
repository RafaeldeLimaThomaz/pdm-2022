import React, { useContext, useEffect, useState } from "react";
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
import SearchBar from "react-native-dynamic-search-bar";
import cards, { CardDataProps } from "../data/cards";
import AppContext from "../contexts/AppContext";
import AddRecipeContext from "../contexts/AddRecipeContext";

const Recipes = ({ navigation }: { navigation: any }) => {
  const width = useWindowDimensions().width * 0.6;
  const cardWidth = useWindowDimensions().width * 0.9;

  const [filteredCards, setFilteredCards] = useState(cards);

  const searchBarVisible = useContext(AppContext);
  const addRecipe = useContext(AddRecipeContext);

  useEffect(() => {
    navigation.navigate("Criar Receita", { body: "Criar Receita" });
  }, [addRecipe]);

  const filterCards = (text: string) => {
    const filteredResult = cards.filter((card: CardDataProps) =>
      card.title.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredCards(filteredResult);
  };

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
                alert("Abrir!");
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
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {searchBarVisible && (
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
      <FlatList
        data={filteredCards}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id}
      />
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
