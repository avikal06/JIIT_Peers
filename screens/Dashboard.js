import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Default from "../container/Default";
import Attendance from "../container/Attendance";
import { useEffect, useState } from "react";
import Result from "../container/Result";
import Schedule from "../container/Schedule";

const Dashboard = ({ navigation }) => {
  const [screen, setScreen] = useState(1);

  return (
    <View>
      <View style={styles.header}>
        <Image source={require("../assets/user.png")} style={styles.logo} />
        <Text
          style={{
            color: "#fff",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: 18,
            marginTop: 10,
            marginBottom: 50,
          }}
        >
          Username
        </Text>
      </View>
      <View style={styles.dashboard_container}>
        <View style={styles.switch_container}>
          {screen === 1 ? <Default /> : null}
          {screen === 2 ? <Attendance /> : null}
          {screen === 3 ? <Result /> : null}
          {screen === 4 ? <Schedule /> : null}
        </View>
        <View style={styles.nav_container}>
          <View style={styles.navbar}>
            <Pressable
              onPress={() => {
                setScreen(1);
              }}
            >
              <Entypo name="home" size={24} color="white" />
            </Pressable>
            <Pressable
              onPress={() => {
                setScreen(2);
              }}
            >
              <FontAwesome5 name="tasks" size={24} color="white" />
            </Pressable>
            <Pressable
              onPress={() => {
                setScreen(3);
              }}
            >
              <FontAwesome name="tasks" size={24} color="white" />
            </Pressable>
            <Pressable
              onPress={() => {
                setScreen(4);
              }}
            >
              <MaterialIcons name="schedule" size={24} color="white" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const ht = Dimensions.get("window").height * 0.6 + 90;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000",
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "stretch",
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginLeft: "auto",
    marginRight: "auto",
  },
  dashboard_container: {
    width: "100%",
    height: ht,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    marginTop: -90,
  },
  switch_container: {
    width: "100%",
    marginTop: 10,
    // padding: 30,
  },
  nav_container: {
    position: "absolute",
    alignItems: "center",
    width: "100%",
    left: 0,
    bottom: 20,
  },
  navbar: {
    flexDirection: "row",
    backgroundColor: "#000",
    width: "90%",
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: "space-between",
    borderRadius: 40,
    shadowColor: "#000",
    shadowRadius: 10,
    shadowOffset: { height: 1 },
    shadowOpacity: 0.2,
  },
});
