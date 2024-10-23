import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={styles.mainContainer}>
    {/** Navbar */}
      <View style={styles.navContainer}>
        <Text style={styles.navText}>What to eat</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
  },
  navContainer: {
    height: 50,
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"
  },
  navText: {
    fontSize: 28,
    fontWeight: "bold"
  }
})
