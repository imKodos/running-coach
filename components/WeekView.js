import { Entypo, Feather } from "@expo/vector-icons";
import { MotiView } from "@motify/components";
import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";

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
    <LinearGradient
      style={styles.container}
      colors={["dodgerblue", "blue", "black"]}
    >
      <WeekCard></WeekCard>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
});

export default WeekView;
