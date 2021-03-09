import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Footer = (props) => {
  return (
    <View>
      <Text style={styles.firstLine}> { props.title }</Text>
      <Text style={styles.secondLine}>{ props.website }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  firstLine: {
    fontSize: 12,
    textAlign: "center",
    color: "grey",
  },
  secondLine: {
    fontSize: 10,
    textAlign: "center",
    color: "grey",
  },
});

export default Footer;
