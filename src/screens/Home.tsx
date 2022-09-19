import React from "react";
import { View, Image } from "react-native";
import { Card } from "react-native-elements";

const Home = ({ navigation }: { navigation: any }) => {
  // error
  return (
    <View style={{ backgroundColor: "#A7FFFB", flex: 1 }}>
      <Card>
        <Card.Image
          style={{
            height: 315,
            alignItems: "center",
            justifyContent: "center",
          }}
          source={require("../../assets/Home.png")}
        />
      </Card>
      <Card>
        <Card.Image
          style={{
            height: 315,
            alignItems: "center",
            justifyContent: "center",
          }}
          source={require("../../assets/Home.png")}
        />
      </Card>
    </View>
  );
};
export default Home;
