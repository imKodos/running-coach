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
  Image,
} from "react-native";

function WeekCard() {
  const data = [
    { key: "1", job: "week 1" },
    // {key: '2', job: 'bb'},
    // {key: '3', job: 'cc'},
    // {key: '4', job: 'ddddddddddddddd'},
    // {key: '5', job: 'eeeeeeeeeeeeeeeeee'},
    // {key: '6', job: 'fffffffffffffffffff'},
    // {key: '7', job: 'ggggggggggggggggg'},
  ];

  const _colors = {
    active: `#FCD259ff`,
    inactive: `#FCD25900`,
  };
  const _spacing = 10;

  const ref = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const [viewPosition, setViewPosition] = React.useState(0);
  const [selRunIdx, setSelRunIdx] = React.useState(null);

  function renderRunCards() {
    const runCards = [];
    for (let i = 0; i <= 2; i++) {
      runCards.push(
        <TouchableOpacity
          key={"runCard" + i}
          style={[
            styles.audioCard,
            selRunIdx === i ? styles.audioCardSel : styles.audioCardDefault,
          ]}
          onPress={() => {
            if (selRunIdx === i) {
              //if this was previously selected, unselect
              setSelRunIdx(null);
              return;
            }
            setSelRunIdx(i);
          }}
        >
          <Text>run {i} test</Text>
          <Image
            source={require("../assets/unchecked.png")}
            style={{ height: 50, width: 50 }}
          />
        </TouchableOpacity>
      );
    }
    return runCards;
  }

  React.useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
      viewOffset: viewPosition === 0.5 || viewPosition === 1 ? 0 : _spacing,
      viewPosition: 0.5, //0 beginning, 0.5 middle, 1 is end
    });
  }, [index]);

  return (
    //   set the container as a column flex
    <View style={styles.container}>
      <View style={styles.weekHeader}>
        <View style={styles.leftArrowView}>
          <TouchableOpacity
            onPress={() => {
              if (index === 0) {
                return;
              }
              setIndex(index - 1);
            }}
          >
            <View
              style={{
                width: 45,
                padding: _spacing,
                backgroundColor: "#FCD259",
                borderRadius: _spacing,
                marginRight: _spacing,
              }}
            >
              <Feather name="arrow-left" size={24} color="#36303F" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.centerTextView}>
          <Text style={{ textAlign: "center" }}>test</Text>
        </View>
        <View style={styles.rightArrowView}>
          <TouchableOpacity
            style={{ alignSelf: "flex-end" }}
            onPress={() => {
              if (index === data.length - 1) {
                return;
              }
              setIndex(index + 1);
            }}
          >
            <View
              style={{
                width: 45,
                padding: _spacing,
                backgroundColor: "#FCD259",
                borderRadius: _spacing,
              }}
            >
              <Feather name="arrow-right" size={24} color="#36303F" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>{renderRunCards()}</View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    margin: 20,
    // borderRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,

    height: "90%",
  },
  weekHeader: {
    flex: 0.15,
    flexDirection: "row",
    borderBottomWidth: 1.5,
    borderBottomColor: "black",
    backgroundColor: "#BEBEBE",
  },
  leftArrowView: {
    flex: 1,
    marginLeft: 20,
    alignSelf: "center",
  },
  centerTextView: {
    flex: 1,
    alignSelf: "center",
  },
  rightArrowView: {
    marginRight: 20,
    alignSelf: "center",
    flex: 1,
  },
  contentContainer: {
    margin: 20,
    flex: 1,
  },
  audioCard: {
    backgroundColor: "#BEBEBE",
    margin: 10,
    borderRadius: 15,
    justifyContent: "center",
    paddingLeft: 10,
  },
  audioCardSel: {
    flex: 2,
    backgroundColor: "white",
  },
  audioCardDefault: {
    flex: 1,
    backgroundColor: "#BEBEBE",
  },
});

export default WeekCard;
