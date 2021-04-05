import React, { useRef } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Text, View, SectionList, StyleSheet } from "react-native";

import { defaultState } from "../../config";
import { ConcertListItem } from "./ConcertListItem";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.homeBody}>
        <ScrollView>
          <SectionList
            sections={defaultState}
            renderItem={({ item }) => (
              <ConcertListItem item={item} navigation={navigation} />
            )}
            renderSectionHeader={({ section }) => (
              <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
          />
        </ScrollView>
      </View>

      <View style={styles.homeFooter}>
        <Text style={styles.homeFooterText}>(C)2020 Globoticket</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    //height: 470, replace with
    flex: 1,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    backgroundColor: "rgba(247, 247, 247)",
    borderBottomColor: "steelblue",
    borderBottomWidth: StyleSheet.hairlineWidth,
    fontSize: "2.5vh",
  },
  homeBody: { flex: 15 },
  homeFooter: {
    flex: 1,
    borderTopColor: "grey",
    borderTopWidth: StyleSheet.hairlineWidth,
    backgroundColor: "steelblue",
    alignSelf: "stretch",
    justifyContent: "flex-end",
  },
  homeFooterText: {
    fontSize: "2vh",
    textAlign: "center",
    color: "white",
    marginBottom: "0.5vh",
  },
});
