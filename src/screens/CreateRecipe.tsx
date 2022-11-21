import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
  TouchableOpacity,
} from "react-native";
import StarCounter from "../components/StarCounter";
import { Card, Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import useList from "../hooks/useList";
import useReference from "../hooks/useReference";
import listToArray from "../services/listToArray";
import SearchableDropdown from "react-native-searchable-dropdown";

const Recipes = ({ navigation }: { navigation: any }) => {
  const cardWidth = useWindowDimensions().width * 0.9;
  const width = useWindowDimensions().width * 0.6;

  const [recipeName, setRecipeName] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [recipeDirections, setRecipeDirections] = useState("");

  const recipes = useList("recipes");
  const ingredients = useList("ingredients");

  const handleRecipeCreate = () => {
    recipes.create({
      name: recipeName,
      description: recipeDescription,
      directions: recipeDirections,
    });
  };

  const handleIngredientCreate = () => {
    ingredients.create({
      name: "leite condensado",
    });
    ingredients.create({
      name: "creme de leite",
    });
    ingredients.create({
      name: "açúcar",
    });
    ingredients.create({
      name: "sal",
    });
    ingredients.create({
      name: "morango",
    });
    ingredients.create({
      name: "frutas vermelhas",
    });
    ingredients.create({
      name: "farinha de trigo",
    });
  };

  const discardRecipe = () => {
    setRecipeName("");
    setRecipeDescription("");
    setRecipeDirections("");

    navigation.navigate("Receitas", { body: "agenda" });
  };

  const [currentVal, setCurrentVal] = useReference("/ingredients");
  console.log(currentVal);
  let sortedIngredients: any[] = [];
  let ingredientsArray = listToArray(currentVal);
  for (let i = 0; i < ingredientsArray.length; i++) {
    sortedIngredients[i] = ingredientsArray[i].name;
  }
  console.log(sortedIngredients.sort());

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Card
        containerStyle={{
          width: cardWidth,
          backgroundColor: "#EF3762",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 20,
            backgroundColor: "#ddfafC",
          }}
        ></View>
        <TextInput
          style={styles.titleInput}
          placeholder="Nome"
          textAlign={"center"}
          placeholderTextColor={"white"}
          onChangeText={(value) => setRecipeName(value)}
        />

        <Card.Divider color="white" width={1} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 5,
          }}
        >
          <View
            style={{
              width: width * 0.6,
              height: width * 0.6,
              marginBottom: width / 15,
              backgroundColor: "#FF4984",
              borderStyle: "dashed",
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "white",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              name="image"
              type="feather"
              color={"white"}
              tvParallaxProperties={undefined}
            />
          </View>
          <TextInput
            style={{
              color: "white",
              width: width * 0.6,
              backgroundColor: "#FF4984",
              borderStyle: "dashed",
              borderWidth: 1,
              borderColor: "white",
              marginBottom: width / 15,
              height: width * 0.6,
              justifyContent: "center",
              alignItems: "center",
            }}
            placeholder={"Descrição"}
            placeholderTextColor={"white"}
            textAlign={"center"}
            onChangeText={(value) => setRecipeDescription(value)}
          ></TextInput>
        </View>

        <View style={{ marginBottom: 10 }}>
          <StarCounter />
        </View>
        <Card.Divider color="white" width={1} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 5,
          }}
        >
          <View
            style={{
              width: width * 0.6,
              height: width / 6,
              borderWidth: 1,
              borderStyle: "dashed",
              borderColor: "white",
              borderRadius: 50,
            }}
          ></View>

          <View
            style={{
              width: width / 6,
              height: width / 6,
              borderWidth: 1,
              borderStyle: "dashed",
              borderColor: "white",
              borderRadius: 50,
            }}
          ></View>

          <View
            style={{
              width: width / 6,
              height: width / 6,
              borderWidth: 1,
              borderStyle: "dashed",
              borderColor: "white",
              borderRadius: 50,
            }}
          ></View>
        </View>
      </Card>

      <Card
        containerStyle={{
          width: cardWidth,
          backgroundColor: "#EF3762",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 20,
            backgroundColor: "#ddfafC",
          }}
        ></View>
        <Text style={styles.ingredientText}>INGREDIENTES</Text>

        <Card.Divider color="white" width={1} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 5,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignContent: "center",
              alignItems: "center",
              backgroundColor: "#FF4984",
              borderRadius: 30,
              borderWidth: 1,
              borderStyle: "dashed",
              borderColor: "white",
              width: 100,
              height: 30,
            }}
            onPress={() => alert("HOLLA")}
          >
            <Icon
              name="plus"
              type={"feather"}
              color={"white"}
              size={15}
              tvParallaxProperties={undefined}
            />
            <Text style={{ color: "white", marginRight: 5 }}>Adicionar</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 10, marginBottom: 10, alignItems: "center" }}>
          <SearchableDropdown
            onTextChange={(text: any) => console.log(text)}
            //On text change listner on the searchable input
            onItemSelect={(item: any) => alert(JSON.stringify(item))}
            //onItemSelect called after the selection from the dropdown
            containerStyle={{ padding: 2 }}
            //suggestion container style
            textInputStyle={{
              //inserted text style
              padding: 12,
              height: 40,
              color: "white",
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "#fff",
              backgroundColor: "#FF4984",
            }}
            itemStyle={{
              //single dropdown item style
              padding: 10,
              marginTop: 4,
              borderRadius: 5,
              backgroundColor: "#FF4984",
              borderColor: "#FF4984",
              borderWidth: 1,
            }}
            itemTextStyle={{
              //text style of a single dropdown item
              color: "#fff",
            }}
            itemsContainerStyle={{
              //items container style you can pass maxHeight
              //to restrict the items dropdown hieght
              maxHeight: "61.8%",
            }}
            items={ingredientsArray}
            //mapping of item array
            defaultIndex={2}
            //default selected item index
            placeholder={
              String.fromCodePoint(0x1f34b) + "   Pesquisar Ingrediente  "
            }
            placeholderTextColor={"#feeef3"}
            //place holder for the search input
            resetValue={false}
            //reset textInput Value with true and false state
            underlineColorAndroid="transparent"
            //To remove the underline from the android input
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",

            marginBottom: 5,
          }}
        >
          <Text
            style={{
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              color: "#ffe3e3",
            }}
          >
            Não encontrou?
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 13,
                marginLeft: 4,
              }}
            >
              Cadastrar ingrediente.
            </Text>
          </TouchableOpacity>
        </View>

        <Card.Divider color="white" width={1} />
      </Card>

      <Card
        containerStyle={{
          width: cardWidth,
          backgroundColor: "#EF3762",
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 20,
            backgroundColor: "#ddfafC",
          }}
        ></View>
        <Text style={styles.ingredientText}>MODO DE PREPARO</Text>

        <Card.Divider color="white" width={1} />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
          }}
        >
          <TextInput
            style={{
              color: "white",
              width: width * 1.3,
              backgroundColor: "#FF4984",
              borderStyle: "dashed",
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "white",
              height: width * 0.6,
              justifyContent: "center",
              alignItems: "center",
            }}
            placeholder={"Insira um texto"}
            placeholderTextColor={"white"}
            textAlign={"center"}
            onChangeText={(value) => setRecipeDirections(value)}
          ></TextInput>
        </View>

        <View style={{ marginBottom: 15 }}></View>
        <Card.Divider color="white" width={1} />
      </Card>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 20,
          marginBottom: 40,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            backgroundColor: "#005b00",
            width: 140,
            height: 40,
            borderRadius: 20,
            marginRight: 20,
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
          onPress={handleRecipeCreate}
        >
          <Icon
            name={"save"}
            type={"material"}
            color={"white"}
            tvParallaxProperties={undefined}
          ></Icon>
          <Text style={{ color: "white", margin: 10 }}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#9d0909",
            flexDirection: "row",
            marginLeft: 20,
            width: 140,
            height: 40,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={discardRecipe}
        >
          <Icon
            name={"delete"}
            type={"material"}
            color={"white"}
            tvParallaxProperties={undefined}
          ></Icon>
          <Text style={{ color: "white", margin: 10 }}>Descartar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleInput: {
    height: 40,
    margin: 15,
    marginBottom: 20,
    backgroundColor: "#FF4984",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    borderStyle: "dashed",
    color: "white",
  },
  cardText: {
    color: "white",
    flex: 1,
    flexWrap: "wrap",
    textAlign: "justify",
    marginLeft: 15,
  },
  ingredientText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  textInput: {
    color: "white",
  },
  container: {
    flex: 1,

    backgroundColor: "#ddfafC",
  },
});

export default Recipes;
