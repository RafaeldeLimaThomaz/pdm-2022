import React from "react";
import { View, StyleSheet } from "react-native";
import CountDown from "react-native-countdown-component";

const Timer = ({ navigation }: { navigation: any }) => {
  // error
  const [isPlaying, setIsPlaying] = React.useState(true);
  return (
    <View style={styles.container}>
      <CountDown
        until={50}
        timeToShow={["D", "H", "M", "S"]}
        timeLabels={{ d: "D", h: "H", m: "M", s: "S" }}
        onFinish={() => alert("Terminado!")}
        onPress={() => alert("Contagem Regressiva!")}
        size={30}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
export default Timer;
