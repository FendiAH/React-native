import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Title = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0000",
    paddingTop: 20,
    margin: 10,
  },
  title: {
    textDecorationLine: "underline",
    textShadowOffset: { width: 3, height: 3 },
    textShadowColor: "black",
    fontSize: 24,
    fontWeight: "700",
    paddingHorizontal: 20,
    color: "#b8860b",
  },
});

export default Title;
