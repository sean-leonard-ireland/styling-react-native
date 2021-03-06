import React from "react";
import { Image, StyleSheet } from "react-native";

const img = require("../../img/logo.png");

export const Logo = () => (
  <Image resizeMode={"contain"} source={img} style={styles.logo} />
);

const styles = StyleSheet.create({
  logo: {
    height: "16VH",
    borderBottomColor: "darksteelblue",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
