import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";
import { Card } from "react-native-elements";

const RecipeDetails = ({ navigation }: { navigation: any }) => {
  const width = useWindowDimensions().width * 0.6;
  const cardWidth = useWindowDimensions().width * 0.9;

  return (
    <View style={styles.container}>
      <Card
        containerStyle={{
          width: cardWidth,
          backgroundColor: "#EF3762",
          borderRadius: 10,
        }}
      >
        <Card.Title style={{ color: "white" }}>MARTA ROCHA</Card.Title>
        <Card.Divider color="white" width={1} />
        <View
          style={{ flexDirection: "column", justifyContent: "space-between" }}
        >
          <Text style={styles.textTitle}>Ingredientes</Text>
          <Text style={styles.textBody}> • 01 Copo de suco </Text>
          <Text style={styles.textBody}> • 200 g de ovo </Text>
          <Text style={styles.textBody}> • 100 ml de ureia </Text>
          <Text style={styles.textBody}> • Xanadu </Text>
        </View>

        <View style={{ marginBottom: 10 }}></View>

        <Card.Divider color="white" width={1} />
        <Text style={styles.textTitle}>Modo de Preparo</Text>
        <Text style={styles.textBody}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ddfafC",
  },
  textTitle: {
    color: "white",
    fontWeight: "bold",
    margin: 10,
    textAlign: "center",
  },
  textBody: {
    color: "white",
    margin: 5,
    textAlign: "justify",
    lineHeight: 30,
  },
});

export default RecipeDetails;
