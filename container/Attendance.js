import { Button, StyleSheet, Text, View, Image } from "react-native";

const Attendance = () => {
  return (
    <View>
      <Text style={styles.heading}>Attendance</Text>
    </View>
  );
};

export default Attendance;

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: 600,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
