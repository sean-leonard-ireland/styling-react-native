import React from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    //padding: 10,
    //height: 44,  replace with flex
    borderBottomColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 1,
    flexDirection: "row",
  },

  tab: {
    //width: 68, replace with flex
    backgroundColor: "black",
    //padding: 12,
    //position: "absolute",
    //left: 0,
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  tabCenter: {
    //width: 272, , replace with flex
    padding: 12,
    //position: "absolute",
    //right: 0,
    flex: 5,
  },

  tabText: {
    color: "white",
    //fontSize: 14,
    fontSize: "2vh",
    whiteSpace: "nowrap",
  },
});

export const ConcertListItem = ({ navigation, item }) => {
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate("Details", { item })}
    >
      <View style={styles.item}>
        <View style={styles.tab}>
          <Text style={styles.tabText}>
            {item.date.toLocaleDateString("en-us", {
              day: "2-digit",
              month: "short",
            })}
          </Text>
        </View>

        <View style={styles.tabCenter}>
          <Text>{item.name}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
