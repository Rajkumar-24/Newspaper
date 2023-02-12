import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { useContext, useState } from "react";
import React from "react";
import { SceneMap, TabView } from "react-native-tab-view";
import DiscoverScreen from "../Screens/DiscoverScreen";
import TopNavigation from "./TopNavigation";
import { NewsContext } from "../API/context";
import NewsScreen from "../Screens/NewsScreen";

const NPaperTabs = () => {
  const layout = useWindowDimensions();

  const { index, setIndex } = useContext(NewsContext);
  const [routes] = useState([
    { key: "first", title: "Discover" },
    { key: "second", title: "News" },
  ]);

  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
};

export default NPaperTabs;

const styles = StyleSheet.create({});
