import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import StarCounter from "../components/StarCounter";
import { Card, Icon } from "react-native-elements";

const Recipes = ({}: { navigation: any }) => {
  const [title, onChangeText] = React.useState("");
  const [description, onChangeNumber] = React.useState("");
  const cardWidth = useWindowDimensions().width * 0.9;
  const width = useWindowDimensions().width * 0.6;

  return (
    <SafeAreaView style={styles.container}>
      <Card
        containerStyle={{
          width: cardWidth,
          backgroundColor: "#EF3762",
          borderRadius: 10,
        }}
      >
        <TextInput
          style={styles.titleInput}
          placeholder="Nome"
          placeholderTextColor={"white"}
          onChangeText={onChangeText}
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
            onChangeText={() => {}}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleInput: {
    height: 40,
    margin: 15,
    backgroundColor: "#FF4984",
    borderWidth: 1,
    borderColor: "white",
    borderStyle: "dashed",
    padding: 10,
    color: "white",
  },
  cardText: {
    color: "white",
    flex: 1,
    flexWrap: "wrap",
    textAlign: "justify",
    marginLeft: 15,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ddfafC",
  },
});

export default Recipes;
