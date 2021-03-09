import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Footer = () => {
  return (
    <View>
      <Text style={styles.firstLine}> Lyrica Classical Entertainment</Text>
      <Text style={styles.secondLine}>www.lyricaclassic.org</Text>
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
