import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const Attendance = () => {
  const data = [
    { label: "SEM EVE 2023", value: "1" },
    { label: "SEM ODD 2023", value: "2" },
    { label: "SEM EVE 2022", value: "3" },
    { label: "SEM ODD 2022", value: "4" },
  ];
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
