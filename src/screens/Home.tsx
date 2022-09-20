import React from "react";
import { useWindowDimensions, View } from "react-native";
import { Card } from "react-native-elements";

const Home = ({ navigation }: { navigation: any }) => {
  // error
  const height = useWindowDimensions().width * 0.8;
  return (
    <View style={{ backgroundColor: "#A7FFFB", flex: 1 }}>
      <Card>
        <Card.Image
          style={{
            height: height,
            alignItems: "center",
            justifyContent: "center",
          }}
          source={require("../../assets/Home.png")}
        />
      </Card>
      <Card>
        <Card.Image
          style={{
            height: height,
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
