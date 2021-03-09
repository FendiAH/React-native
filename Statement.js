import React from "react";
import { Text, StyleSheet } from "react-native";

const Statement = (props) => {
  return <Text style={styles.statement}> {props.statement} </Text>;
};

const styles = StyleSheet.create({
  statement: {
    fontSize: 16,
    fontWeight: "200",
    fontStyle: "italic",
  },
});

export default Statement;
