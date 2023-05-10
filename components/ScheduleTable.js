import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";

const ScheduleTable = ({ timetable }) => {
  return (
    <ScrollView style={styles.scrollContainer}>
      {timetable.map((d, i) => {
        return (
          <View
            style={
              i % 2 == 0
                ? { ...styles.container, backgroundColor: "#eee" }
                : { ...styles.container, backgroundColor: "#fff" }
            }
            key={i}
          >
            <View style={{ flexDirection: "row" }}>
              <Text>{d.subjectdesc}</Text>
            </View>
          </View>
        );
      })}
      <View style={{ ...styles.container, backgroundColor: "#fff" }}>
        <View>
          <Text style={{ fontSize: 16, marginBottom: 3 }}></Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text></Text>
            <Text style={{ marginLeft: 20 }}></Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 35,
          }}
        ></Text>
      </View>
      <View style={{ ...styles.container, backgroundColor: "#fff" }}>
        <View>
          <Text style={{ fontSize: 16, marginBottom: 3 }}></Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text></Text>
            <Text style={{ marginLeft: 20 }}></Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 35,
          }}
        ></Text>
      </View>
    </ScrollView>
  );
};

export default ScheduleTable;

const styles = StyleSheet.create({
  scrollContainer: {
    width: "100%",
    height: "75%",
    marginTop: 20,
  },
  container: {
    width: "100%",
    flexDirection: "column",
    padding: 20,
  },
});
