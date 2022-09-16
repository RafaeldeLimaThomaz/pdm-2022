import React from "react";
import { Text, View, StyleSheet, ScrollView, Button } from "react-native";
import { Card, Icon } from "react-native-elements";

const Recipes = ({ navigation }: { navigation: any }) => {
  // error
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Card.Title>DESTINO PORTUGAL</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require("../../assets/1.png")}
          />
          <Text style={{ marginBottom: 10 }}>
            Um dos destinos mais procurados onde boa parte da arquitetura do
            país data dos séculos XVI a XIX.
          </Text>
          <Button
            icon={
              <Icon
                name="airplane-outline"
                type="ionicon"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
                tvParallaxProperties={undefined}
              />
            }
            title="RESERVE AGORA"
            onPress={() => {
              alert("Reservado!");
            }}
          />
        </Card>
        <Card>
          <Card.Title>DESTINO ESPANHA</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require("../../assets/1.png")}
          />
          <Text style={{ marginBottom: 10 }}>
            A Espanha é um país em movimento, com mais de vinte séculos de
            história.
          </Text>
          <Button
            icon={
              <Icon
                name="airplane-outline"
                type="ionicon"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
                tvParallaxProperties={undefined}
              />
            }
            title="RESERVE AGORA"
            onPress={() => {
              alert("Reservado!");
            }}
          />
        </Card>
        <Card>
          <Card.Title>DESTINO ESPANHA</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require("../../assets/1.png")}
          />
          <Text style={{ marginBottom: 10 }}>
            A Espanha é um país em movimento, com mais de vinte séculos de
            história.
          </Text>
          <Button
            icon={
              <Icon
                name="airplane-outline"
                type="ionicon"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
                tvParallaxProperties={undefined}
              />
            }
            title="RESERVE AGORA"
            onPress={() => {
              alert("Reservado!");
            }}
          />
        </Card>
        <Card>
          <Card.Title>DESTINO ESPANHA</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require("../../assets/1.png")}
          />
          <Text style={{ marginBottom: 10 }}>
            A Espanha é um país em movimento, com mais de vinte séculos de
            história.
          </Text>
          <Button
            icon={
              <Icon
                name="airplane-outline"
                type="ionicon"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
                tvParallaxProperties={undefined}
              />
            }
            title="RESERVE AGORA"
            onPress={() => {
              alert("Reservado!");
            }}
          />
        </Card>
        <Card>
          <Card.Title>DESTINO ESPANHA</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require("../../assets/1.png")}
          />
          <Text style={{ marginBottom: 10 }}>
            A Espanha é um país em movimento, com mais de vinte séculos de
            história.
          </Text>
          <Button
            icon={
              <Icon
                name="airplane-outline"
                type="ionicon"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
                tvParallaxProperties={undefined}
              />
            }
            title="RESERVE AGORA"
            onPress={() => {
              alert("Reservado!");
            }}
          />
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
});
export default Recipes;
