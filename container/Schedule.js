import { Button, StyleSheet, Text, View, Image } from "react-native";

const Schedule = () => {
  return (
    <View>
      <Text style={styles.heading}>Schedule</Text>
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: 600,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
