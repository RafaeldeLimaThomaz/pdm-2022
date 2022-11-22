import { View, Text, Button } from "react-native";
import React, { useContext, useState } from "react";
import { ModalContext } from "../../../components/AppModal";
import SearchableDropdown from "react-native-searchable-dropdown";
import useReference from "../../../hooks/useReference";
import listToArray from "../../../services/listToArray";

import styles from "./styles";

interface AddIngredientModalProps {
  onAdd: Function;
}

export default function AddIngredientModal({ onAdd }: AddIngredientModalProps) {
  const appModal = useContext(ModalContext);

  const [selectedIgredient, setSelectedIgredient] = useState(null);

  const [currentVal, setCurrentVal] = useReference("/ingredients");
  if (currentVal == null) return <Text>Loading...</Text>;
  let ingredientsArray = listToArray(currentVal);

  const handleCancel = () => {
    appModal.hide();
  };

  const handleAdd = () => {
    // console.log("Selected ingredient: ", selectedIgredient);
    onAdd({ selectedIgredient, quantity: 3, measureUnit: "ml" });
    appModal.hide();
  };

  return (
    <View>
      <SearchableDropdown
        // onTextChange={(text: any) => console.log(text)}
        //On text change listner on the searchable input
        selectedItems={selectedIgredient}
        onItemSelect={(item: any) => setSelectedIgredient(item)}
        //onItemSelect called after the selection from the dropdown
        containerStyle={{ padding: 2 }}
        //suggestion container style
        textInputStyle={styles.textInputStyle}
        itemStyle={styles.itemStyle}
        itemTextStyle={styles.itemTextStyle}
        itemsContainerStyle={styles.itemsContainerStyle}
        items={ingredientsArray}
        //mapping of item array
        defaultIndex={2}
        //default selected item index
        placeholder={
          String.fromCodePoint(0x1f34b) + "   Pesquisar Ingrediente  "
        }
        placeholderTextColor={"#feeef3"}
        //place holder for the search input
        resetValue={false}
        //reset textInput Value with true and false state
        underlineColorAndroid="transparent"
        //To remove the underline from the android input
      />
      <Button title="Cancelar" onPress={handleCancel} />
      <Button title="Adicionar" onPress={handleAdd} />
    </View>
  );
}
