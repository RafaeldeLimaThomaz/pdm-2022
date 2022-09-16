import React from "react";
import { Text, View, StyleSheet } from "react-native";
const TimeLine = ({ navigation }: { navigation: any }) => {
  // error
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HOLLLA!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },

  text: {
    fontWeight: "bold",
  },
});
export default TimeLine;
