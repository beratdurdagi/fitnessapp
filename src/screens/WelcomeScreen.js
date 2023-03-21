import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import CustomButton from "./../components/CustomButton/CustomButton";
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation=useNavigation()
  return (
    <ImageBackground
    style={{flex:1,justifyContent:'center',alignItems:'center'}}
      source={require("../../assets/welcomeimage.jpg")}
      imageStyle={{ width: "100%", height: "100%", margin: "auto" }}
     
    >
      <CustomButton item={"Login"} bgcolors={"gray"} style={{width:150}} radius={15} marginVertical={15} onPress={()=>navigation.navigate('Login')}  />
      <CustomButton item={"Register"} bgcolors={"gray"} style={{width:150}} radius={15} marginVertical={15} onPress={()=>navigation.navigate('Register')}  />
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
