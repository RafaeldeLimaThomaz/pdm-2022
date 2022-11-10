import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import useReference from "../hooks/useReference";
import useAuth from "../hooks/useAuth";
import useList from "../hooks/useList";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Card, Icon } from "react-native-elements";

const Home = ({}: { navigation: any }) => {
  // error
  // ============================================ Auth Example
  const { user, login, logout } = useAuth();

  const handleLogin = () => {
    login("79thomaz@gmail.com", "123456");
  };

  const handleLogout = () => {
    logout();
  };

  // ============================================ Single Reference Example
  const [myRef, setMyRef] = useReference(
    "myref/1",
    "optional default val (loading..)"
  );

  const handleUpdate = () => {
    setMyRef("RandVal: " + (1.0 + Math.random()));
  };

  // ============================================ List Example
  const books = useList("books");

  const handleListCreate = () => {
    books.create({ author: "name" });
  };

  const handleListDelete = () => {
    if (books.data) {
      // getting first key as an example
      const key = Object.keys(books.data)[0];

      // any valid key can be used to delete
      books.remove(key);
    }
  };

  const handleListUpdate = () => {
    if (books.data) {
      // getting first key as an example
      const key = Object.keys(books.data)[0];

      const updatedObject = { author: "name" + Math.random() };

      // any valid key can be used to update
      books.update(key, updatedObject);
    }
  };

  return (
    <View style={styles.container}>
      <Card
        containerStyle={{
          backgroundColor: "#e5fffc",
          borderRadius: 10,
        }}
      >
        {/* <Text>User: {user?.email}</Text> */}
        <View
          style={{
            marginTop: 70,
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/easyCakeHome.png")}
            style={{ width: 240, height: 120 }}
          ></Image>
        </View>
        <View
          style={{
            alignItems: "center",
            marginTop: -60,
          }}
        >
          <TextInput
            style={{
              backgroundColor: "white",
              width: 300,
              height: 40,
              borderRadius: 5,
              marginTop: 100,
              margin: 5,
              borderWidth: 1,
              borderColor: "green",
            }}
            placeholder={"    Usuário, número de celular ou email"}
          ></TextInput>

          <TextInput
            style={{
              backgroundColor: "white",
              width: 300,
              height: 40,
              margin: 5,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "green",
            }}
            placeholder={"    Senha"}
          ></TextInput>

          <TouchableOpacity onPress={handleLogin} style={styles.buttons}>
            <Text style={{ color: "white", alignItems: "center" }}>LOGIN</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              margin: 20,
            }}
          >
            <Text style={{ color: "#69957c" }}>Ainda não tem uma conta?</Text>
            <TouchableOpacity>
              <Text style={{ fontWeight: "bold", color: "#0d4a27" }}>
                {" "}
                Cadastrar.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <TouchableOpacity onPress={handleLogout} style={styles.loginButtons}>
        <Text style={{ color: "white", alignItems: "center" }}>LOGOUT</Text>
      </TouchableOpacity> */}
        {/* <Text>Single Ref: {myRef}</Text>

      <TouchableOpacity onPress={handleUpdate} style={styles.loginButtons}>
        <Text style={{ color: "white", alignItems: "center" }}>
          UPDATE REFERENCE
        </Text>
      </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={handleListCreate} style={styles.loginButtons}>
        <Text style={{ color: "white", alignItems: "center" }}>
          LIST CREATE
        </Text>
      </TouchableOpacity>

      <Text>List: {JSON.stringify(books.data)}</Text>

      <TouchableOpacity onPress={handleListDelete} style={styles.loginButtons}>
        <Text style={{ color: "white", alignItems: "center" }}>
          LIST DELETE
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleListUpdate} style={styles.loginButtons}>
        <Text style={{ color: "white", alignItems: "center" }}>
          LIST UPDATE
        </Text>
      </TouchableOpacity> */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "green" }}>
            ----------------------------------
          </Text>
          <Text style={{ color: "green" }}>OU</Text>
          <Text style={{ color: "green" }}>
            ----------------------------------
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            marginTop: 20,
            alignContent: "space-between",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={handleLogin} style={styles.facebookButton}>
            <Icon
              name={"facebook"}
              type={"entypo"}
              tvParallaxProperties={undefined}
              color={"white"}
            ></Icon>
            <Text
              style={{ color: "white", alignItems: "center", marginLeft: 20 }}
            >
              Logar com Facebook
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogin} style={styles.googleButton}>
            <Icon
              name={"google"}
              type={"font-awesome"}
              tvParallaxProperties={undefined}
              color={"white"}
            ></Icon>
            <Text style={{ color: "white", alignItems: "center" }}>
              Logar com Google
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c7ffff",
    alignItems: "center",
  },
  buttons: {
    marginTop: 15,
    width: 300,
    height: 40,
    backgroundColor: "green",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  facebookButton: {
    flexDirection: "row",
    marginTop: 15,
    width: 300,
    height: 40,
    backgroundColor: "#3c5a9a",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 5,
  },

  googleButton: {
    flexDirection: "row",
    marginTop: 15,
    width: 300,
    height: 40,
    backgroundColor: "#252424",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 5,
  },
});
