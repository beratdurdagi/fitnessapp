import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const CustomInput = ({
  value,
  setValue,
  placeHolder,
  secureTextEntry,
  fg,
  borderWidth,
  padding,
  radius,
  style,
  marginVertical,
  paddingHorizontal,
 
}) => {
  return (
    <View
      style={{
        opacity:1,
        width: "100%",
        paddingHorizontal: paddingHorizontal || 10,
        marginVertical: marginVertical || 15,
       
        borderWidth: borderWidth || 0,
        padding: padding || 0,
        paddingHorizontal: 5,
        borderRadius: radius || 0,
        
      }}
    >
      <TextInput
        style={{padding:padding || 0,...style}}
        placeholder={placeHolder}
        placeholderTextColor={fg || "gray"}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={setValue}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
 
  Input: { padding: 10, fontFamily: "OSWB" },
});
