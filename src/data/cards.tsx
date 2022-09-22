import { ReactElement } from "react";
import { Text } from "react-native";
import TextBold from "../components/TextBold";

export interface CardDataProps {
  id: string;
  title: string;
  image: any;
  text: ReactElement;
}

const cards: Array<CardDataProps> = [
  {
    id: "1",
    title: "MARTA ROCHA",
    image: require("../../assets/martaRocha.png"),
    text: (
      <Text>
        Combinação deliciosa de creme de <TextBold>ovos</TextBold>, crocante de{" "}
        <TextBold>nozes</TextBold>, suspiro com <TextBold>ameixa</TextBold> e/ou{" "}
        <TextBold>damasco </TextBold>
        caramelizados
      </Text>
    ),
  },
  {
    id: "2",
    title: "DOIS AMORES",
    image: require("../../assets/doisAmores.png"),
    text: (
      <Text>
        Massa de pão-de-ló de <TextBold>chocolate</TextBold>, com recheio de
        brigadeiro
        <TextBold> branco</TextBold> e brigadeiro <TextBold>preto</TextBold>,
        com opcional de <TextBold>morangos</TextBold>
      </Text>
    ),
  },
  {
    id: "3",
    title: "RED VELVET",
    image: require("../../assets/redVelvet.png"),
    text: <Text></Text>,
  },
  {
    id: "4",
    title: "RAFAELLO",
    image: require("../../assets/doisAmores.png"),
    text: <Text></Text>,
  },
  {
    id: "5",
    title: "LIMÃO SICILIANO C/ FRUTAS VERMELHAS",
    image: require("../../assets/redVelvet.png"),
    text: <Text></Text>,
  },
];

export default cards;
