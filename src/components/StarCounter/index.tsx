import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import Stars from "react-native-stars";

export default function StarCounter() {
  return (
    <Stars
      default={3}
      count={5}
      half={true}
      fullStar={
        <Icon
          name={"star"}
          color={"white"}
          size={20}
          type="entypo"
          style={styles.myStarStyle}
          tvParallaxProperties={undefined}
        />
      }
      emptyStar={
        <Icon
          name={"star-outline"}
          type="material-community"
          color={"white"}
          size={20}
          style={{ ...styles.myStarStyle, ...styles.myEmptyStarStyle }}
          tvParallaxProperties={undefined}
        />
      }
      halfStar={
        <Icon
          name={"star-half"}
          type="material-community"
          color={"white"}
          size={20}
          style={styles.myStarStyle}
          tvParallaxProperties={undefined}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  myStarStyle: {
    color: "yellow",
    backgroundColor: "transparent",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: "white",
  },
});
