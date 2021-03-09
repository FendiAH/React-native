import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

const DescriptionBox = (props) => {
  return (
    <View style={styles.textBox}>
      <ScrollView>
        <Text style={styles.textView}>{props.text}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    flex: 2,
    backgroundColor: "white",
    paddingTop: 16,
  },
  textView: {
    height: "130",
  },
});

export default DescriptionBox;
