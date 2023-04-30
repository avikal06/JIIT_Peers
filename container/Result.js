import { Button, StyleSheet, Text, View, Image } from "react-native";

const Result = () => {
  return (
    <View>
      <Text style={styles.heading}>Result</Text>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: 600,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
