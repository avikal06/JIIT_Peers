import { Image, StyleSheet, Text, TextInput, View, Button } from "react-native";

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
            marginBottom: 60,
            // fontFamily: "Roboto-Regular",
          }}
        >
          Login
        </Text>
        <View style={styles.text_input_container}>
          <Text style={{ fontWeight: 600 }}>Enrollment No.</Text>
          <TextInput placeholder="0123456" style={styles.text_input} />
        </View>
        <View style={styles.text_input_container}>
          <Text style={{ fontWeight: 600 }}>Password</Text>
          <TextInput
            placeholder="********"
            style={styles.text_input}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.btn_login}>
          <Button title="Login" color="#fff" />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000",
    width: "100%",
    height: "35%",
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
    paddingLeft: 40,
    paddingRight: 40,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 60,
  },
  text_input_container: {
    flexDirection: "column",
    shadowColor: "#000",
    shadowOffset: { height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  text_input: {
    marginTop: 5,
  },
  btn_login: {
    marginTop: 50,
    width: "100%",
    backgroundColor: "#000",
    borderRadius: 10,
    padding: 5,
  },
});
