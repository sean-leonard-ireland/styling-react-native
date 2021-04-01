import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  image: {
    //height: 200,
    //width: 280,
    height: "35vh",
    display: "flex",
    alignItems: "stretch",
  },

  imageThumb: {
    display: "flex",
    height: "6vh",
    width: "7vh",
  },

  container: {
    backgroundColor: "white",
    height: 480,
    margin: 20,
    padding: 20,
  },
  imageThumbContainer: {
    display: "flex",
    marginTop: "2vh",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});

export const DetailsScreen = ({ route }) => {
  const { name, date } = route.params.item;

  const [img1, img2, img3] = [
    require("./../../img/img-1.jpg"),
    require("./../../img/img-2.jpg"),
    require("./../../img/img-3.jpg"),
  ];

  return (
    <ScrollView style={styles.container}>
      <Image resizeMode="cover" style={styles.image} source={img3} />
      <View style={styles.imageThumbContainer}>
        <Image resizeMode="contain" style={styles.imageThumb} source={img1} />
        <Image resizeMode="contain" style={styles.imageThumb} source={img2} />
        <Image resizeMode="contain" style={styles.imageThumb} source={img3} />
        <Image resizeMode="contain" style={styles.imageThumb} source={img1} />
        <Image resizeMode="contain" style={styles.imageThumb} source={img2} />
        <Image resizeMode="contain" style={styles.imageThumb} source={img3} />
        <Image resizeMode="contain" style={styles.imageThumb} source={img1} />
        <Image resizeMode="contain" style={styles.imageThumb} source={img2} />
        <Image resizeMode="contain" style={styles.imageThumb} source={img3} />
        <Image resizeMode="contain" style={styles.imageThumb} source={img1} />
        <Image resizeMode="contain" style={styles.imageThumb} source={img2} />
        <Image resizeMode="contain" style={styles.imageThumb} source={img3} />
        <Image resizeMode="contain" style={styles.imageThumb} source={img1} />
        <Image resizeMode="contain" style={styles.imageThumb} source={img2} />
        <Image resizeMode="contain" style={styles.imageThumb} source={img3} />

        <Image resizeMode="contain" style={styles.imageThumb} source={img2} />
        <Image resizeMode="contain" style={styles.imageThumb} source={img3} />
      </View>
      <Text>
        <h1>{name}</h1>
        <h2>
          {date.toLocaleDateString("en-us", {
            day: "numeric",
            weekday: "long",
            month: "long",
            year: "numeric",
          })}
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
          tellus fringilla, tempus magna ut, accumsan lectus. Sed pellentesque,
          mi non tempor auctor, nisl sem cursus sem, sed ultricies augue metus
          non ex. Morbi venenatis suscipit nunc vel facilisis. Sed sit amet
          dictum mauris, quis blandit velit.
        </p>
      </Text>

      <Button title="Purchase Tickets" onPress={() => {}}></Button>
    </ScrollView>
  );
};
