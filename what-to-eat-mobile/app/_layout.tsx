// Custom status Bar
import StatusBar from "@/components/StatusBar";

import { SafeAreaView, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView style={style.mainContainer}>
      <StatusBar />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  }
})