import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Button,
  useWindowDimensions,
} from "react-native";
import { Card, Icon } from "react-native-elements";

const Recipes = ({ navigation }: { navigation: any }) => {
  // error
  const width = useWindowDimensions().width * 0.8;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Card containerStyle={{ width: width }}>
          <Card.Title>MARTA ROCHA</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ marginBottom: width / 15 }}
            source={require("../../assets/1.png")}
          />

          <Button
            title="ABRIR"
            onPress={() => {
              alert("Reservado!");
            }}
          />
        </Card>

        <Card containerStyle={{ width: width }}>
          <Card.Title>DOIS AMORES</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ marginBottom: width / 15 }}
            source={require("../../assets/1.png")}
          />

          <Button
            title="ABRIR"
            onPress={() => {
              alert("Reservado!");
            }}
          />
        </Card>

        <Card containerStyle={{ width: width }}>
          <Card.Title>RED VELVET</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ marginBottom: width / 15 }}
            source={require("../../assets/1.png")}
          />

          <Button
            title="ABRIR"
            onPress={() => {
              alert("Reservado!");
            }}
          />
        </Card>

        <Card containerStyle={{ width: width }}>
          <Card.Title>DESTINO PORTUGAL</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ marginBottom: width / 15 }}
            source={require("../../assets/1.png")}
          />

          <Button
            title="ABRIR"
            onPress={() => {
              alert("Reservado!");
            }}
          />
        </Card>

        <Card containerStyle={{ width: width }}>
          <Card.Title>DESTINO PORTUGAL</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ marginBottom: width / 15 }}
            source={require("../../assets/1.png")}
          />

          <Button
            title="ABRIR"
            onPress={() => {
              alert("Reservado!");
            }}
          />
        </Card>

        <Card containerStyle={{ width: width }}>
          <Card.Title>DESTINO PORTUGAL</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ marginBottom: width / 15 }}
            source={require("../../assets/1.png")}
          />

          <Button
            title="ABRIR"
            onPress={() => {
              alert("Reservado!");
            }}
          />
        </Card>

        <Card containerStyle={{ width: width }}>
          <Card.Title>DESTINO PORTUGAL</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ marginBottom: width / 15 }}
            source={require("../../assets/1.png")}
          />

          <Button
            title="ABRIR"
            onPress={() => {
              alert("Reservado!");
            }}
          />
        </Card>

        <Card containerStyle={{ width: width }}>
          <Card.Title>DESTINO PORTUGAL</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ marginBottom: width / 15 }}
            source={require("../../assets/1.png")}
          />

          <Button
            title="ABRIR"
            onPress={() => {
              alert("Reservado!");
            }}
          />
        </Card>

        <Card containerStyle={{ width: width }}>
          <Card.Title>DESTINO PORTUGAL</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ marginBottom: width / 15 }}
            source={require("../../assets/1.png")}
          />

          <Button
            title="ABRIR"
            onPress={() => {
              alert("Reservado!");
            }}
          />
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#88fada",
  },
});
export default Recipes;
