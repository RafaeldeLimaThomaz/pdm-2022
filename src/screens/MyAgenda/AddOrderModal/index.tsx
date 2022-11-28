import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
import { ModalContext } from "../../../components/AppModal";
import SearchableDropdown from "react-native-searchable-dropdown";
import styles from "./styles";
import useReference from "../../../hooks/useReference";
import listToArray from "../../../services/listToArray";

interface AddOrderModalProps {
  onAdd: Function;
}

export default function AddOrderModal({ onAdd }: AddOrderModalProps) {
  const appModal = useContext(ModalContext);
  const [selectedIgredient, setSelectedIgredient] = useState(null);

  const [currentVal, setCurrentVal] = useReference("/recipes");
  if (currentVal == null) return <Text>Loading...</Text>;
  let ingredientsArray = listToArray(currentVal);
  console.log(ingredientsArray);

  const handleCancel = () => {
    appModal.hide();
  };

  return (
    <View>
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
        placeholder={String.fromCodePoint(0x1f4dc) + "   Pesquisar Receita  "}
        placeholderTextColor={"#feeef3"}
        resetValue={false}
        underlineColorAndroid="transparent"
      />
    </View>
  );
}
