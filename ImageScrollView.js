import React from "react";
import { ScrollView, Image, Text, StyleSheet } from "react-native";

const ImageScrollView = (props) => {
  return (
    <ScrollView>
      <Image source={props.imageSource} style={styles.image} />
      <Text style={styles.textStyle}>{props.textDescription}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 300,
    width: 200,
    resizeMode: "cover",
    borderRadius: 3,
  },
  textStyle: {
    color: "#696969",
    fontSize: 14,
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default ImageScrollView;
