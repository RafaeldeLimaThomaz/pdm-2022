import React from "react";
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

const Recipes = ({}: { navigation: any }) => {
  const [title, LonChangeText] = React.useState("");
  const [description, onChangeNumber] = React.useState("");
  const cardWidth = useWindowDimensions().width * 0.9;
  const width = useWindowDimensions().width * 0.6;

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
          onChangeText={undefined}
          value={title}
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
            onChangeText={undefined}
            value={description}
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

        <View style={{ marginBottom: 10 }}></View>
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
            onChangeText={undefined}
            value={description}
          ></TextInput>
        </View>

        <View style={{ marginBottom: 15 }}></View>
        <Card.Divider color="white" width={1} />
      </Card>
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
  container: {
    flex: 1,

    backgroundColor: "#ddfafC",
  },
});

export default Recipes;
