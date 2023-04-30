import { Image, StyleSheet, Text, View } from "react-native";

const Login = () => {
  return (
    <View>
      <View style={styles.header}>
        <Image
          source={require("../assets/jiit_logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.login_container}>
        <Text
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 20,
            fontSize: 30,
            // fontFamily: "Roboto-Regular",
          }}
        >
          Login
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000",
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "stretch",
  },
  login_container: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 60,
    marginTop: -100,
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 60,
  },
});
