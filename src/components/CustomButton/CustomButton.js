import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomButton = ({
  item,
  bgcolors,
  fgColors,
  padding,
  marginVertical,
  onPress,
  type,
  fontSize,
  borderWidth,
  radius,
  brColor,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          ...styles.container,
          backgroundColor: bgcolors || {},
          padding: padding || 10,
          marginVertical: marginVertical || 7,
          borderWidth: type === "TERTTARY" ? 0 : borderWidth,
          borderColor: brColor,
          borderRadius: radius || 0,
          ...style
        }}
      >
        <Text
          style={
            type === "TERTTARY"
              ? {
                  ...styles.subTitle,
                  fontSize: fontSize || 17,
                  color: fgColors || "gray",
                }
              : {
                  ...styles.subTitle,
                  color: fgColors || 'white',
                  fontSize: fontSize || 17,
                }
          }
        >
          {item}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  subTitle: { fontWeight: "bold", fontSize: 17 },
});
