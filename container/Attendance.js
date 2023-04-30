import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import AttendanceTable from "../components/AttendanceTable";

const Attendance = () => {
  const data = [
    { label: "SEM EVE 2023", value: "1" },
    { label: "SEM ODD 2023", value: "2" },
    { label: "SEM EVE 2022", value: "3" },
    { label: "SEM ODD 2022", value: "4" },
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <View>
      <Text style={styles.heading}>Attendance</Text>
      {renderLabel}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select semester" : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? "blue" : "black"}
            name="book"
            size={20}
          />
        )}
      />
      <AttendanceTable />
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
    marginTop: 30,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  icon: {
    marginRight: 10,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
