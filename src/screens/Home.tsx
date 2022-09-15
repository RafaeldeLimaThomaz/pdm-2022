import React from "react";
import { Button } from "react-native";
const Home = ({ navigation }: { navigation: any }) => {
  // error
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate("Profile", { name: "Jane" })}
    />
  );
};
export default Home;
