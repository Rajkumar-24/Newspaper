import { StyleSheet, Text, View, StatusBar } from "react-native";
import Context from "./API/context";
import NPaperTabs from "./components/NPaperTabs";
import { useContext } from "react";
import { NewsContext } from "./API/context";
function App() {
  const { darkTheme } = useContext(NewsContext);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? "#282c35" : "white",
      }}
    >
      <NPaperTabs />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
