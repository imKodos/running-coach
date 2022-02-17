import { Entypo, Feather } from "@expo/vector-icons";
import { MotiView } from "@motify/components";
import * as React from "react";

import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import WeekCard from "./WeekCard";

const { width, height } = Dimensions.get("screen");

function WeekView() {
  return (
    <View style={styles.container}>
      <WeekCard></WeekCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "blue",
  },
});

export default WeekView;
