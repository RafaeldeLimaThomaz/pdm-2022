import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInputStyle: {
    //inserted text style
    padding: 12,
    height: 40,
    color: "white",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#fff",
    backgroundColor: "#FF4984",
  },
  itemStyle: {
    //single dropdown item style
    padding: 10,
    marginTop: 4,
    borderRadius: 5,
    backgroundColor: "#FF4984",
    borderColor: "#FF4984",
    borderWidth: 1,
  },
  itemTextStyle: {
    //text style of a single dropdown item
    color: "#fff",
  },
  itemsContainerStyle: {
    //items container style you can pass maxHeight
    //to restrict the items dropdown hieght
    maxHeight: "50%",
  },
});

export default styles;
