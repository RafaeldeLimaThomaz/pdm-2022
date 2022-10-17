import React from "react";
import { useWindowDimensions, View, Image } from "react-native";

const Home = ({}: { navigation: any }) => {
  // error

  return (
    <View style={{ backgroundColor: "#5CE1E6", flex: 1 }}>
      <Image
        source={require("../../assets/HomeScreen.gif")}
        style={{
          width: useWindowDimensions().width,
          height: useWindowDimensions().height * 0.9,
        }}
      ></Image>
    </View>
  );
};
export default Home;
