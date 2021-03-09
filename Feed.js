import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import Category from "./Category";
import Title from "./Title";

const Feed = (props) => {
  return (
    <ScrollView showHorizontalScrollIndicator={false}>
      <View>
        <Title title={props.title} />
      </View>
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          {props.data.map((item) => {
            return <Category name="item.title" imageUri={item.imageUri} />;
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollList: {
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    paddingHorizontal: 20,
  },
});

export default Feed;
