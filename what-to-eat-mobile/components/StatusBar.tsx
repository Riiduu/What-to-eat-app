import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StatusBar() {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>What to eat</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    fontSize: 28,
    fontWeight: "bold"
  }
})
