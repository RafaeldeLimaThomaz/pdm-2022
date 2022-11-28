import { View, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useContext, useState } from "react";
import { ModalContext } from "../../../components/AppModal";
import SearchableDropdown from "react-native-searchable-dropdown";
import useReference from "../../../hooks/useReference";
import listToArray from "../../../services/listToArray";

import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";
interface AddIngredientModalProps {
  onAdd: Function;
}

export default function AddIngredientModal({ onAdd }: AddIngredientModalProps) {
  const appModal = useContext(ModalContext);

  const [selectedIgredient, setSelectedIgredient] = useState(null);
  const [selectedMeasure, setSelectedMeasure] = useState("ml");

  const [currentVal, setCurrentVal] = useReference("/ingredients");
  if (currentVal == null) return <Text>Loading...</Text>;
  let ingredientsArray = listToArray(currentVal);
  console.log(ingredientsArray);

  const handleCancel = () => {
    appModal.hide();
  };

  const handleAdd = () => {
    // console.log("Selected ingredient: ", selectedIgredient);
    onAdd({ selectedIgredient, quantity: 3, measureUnit: "ml" });
    appModal.hide();
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <SearchableDropdown
        selectedItems={selectedIgredient}
        onItemSelect={(item: any) => setSelectedIgredient(item)}
        containerStyle={{ padding: 2 }}
        textInputStyle={styles.textInputStyle}
        itemStyle={styles.itemStyle}
        itemTextStyle={styles.itemTextStyle}
        itemsContainerStyle={styles.itemsContainerStyle}
        items={ingredientsArray}
        defaultIndex={2}
        placeholder={
          String.fromCodePoint(0x1f34b) + "   Pesquisar Ingrediente  "
        }
        placeholderTextColor={"#feeef3"}
        resetValue={false}
        underlineColorAndroid="transparent"
      />

      <TextInput
        style={{
          width: 180,
          height: 40,
          backgroundColor: "#FF4984",
          margin: 10,
          padding: 10,
          borderRadius: 10,
          color: "white",
        }}
        keyboardType="numeric"
        placeholder={"Quantidade"}
        placeholderTextColor={"#ffd3e1"}
      ></TextInput>
      <Picker
        selectedValue={selectedMeasure}
        style={{
          width: 180,
          backgroundColor: "#FF4984",
          color: "white",
        }}
        onValueChange={(itemValue, itemIndex) => setSelectedMeasure(itemValue)}
      >
        <Picker.Item label="  gramas" value="grama" />
        <Picker.Item label="  ml" value="ml" />
        <Picker.Item label="  colher de chá" value="colher chá" />
        <Picker.Item label="  colher de sopa" value="colher sopa" />
        <Picker.Item label="  pacote" value="pacote" />
        <Picker.Item label="  caixa" value="caixa" />
      </Picker>

      <TouchableOpacity
        onPress={handleCancel}
        style={{
          width: 180,
          height: 30,
          marginTop: 30,
          margin: 5,
          backgroundColor: "green",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white" }}>Adicionar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleAdd}
        style={{
          width: 180,
          height: 30,
          margin: 2,
          backgroundColor: "#ab1a48",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white" }}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}
