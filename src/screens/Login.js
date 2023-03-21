import { StyleSheet, Text, View, Alert, Image } from "react-native";
import React, { useState } from "react";
import CustomInput from "./../components/CustomInput/CustomInput";
import CustomButton from "./../components/CustomButton/CustomButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const login = () => {
    signInWithEmailAndPassword(auth, email, password).then((UserCredential) => {
      const user = UserCredential._tokenResponse.email;
      const myuserId = auth.currentUser.uid;
    });
  };

  function renderHeader() {
    return (
      <View
        style={{ marginTop: 50, marginHorizontal: 15, alignItems: "center" }}
      >
        <Image
          source={require("../../assets/loginHeader.gif")}
          style={{ width: 300, height: 300 }} resizeMode='contain'
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Login</Text>
      </View>
    );
  }

  function renderInput() {
    return (
      <View style={{ marginLeft: "auto", marginRight: "auto", width: "70%",marginTop:40 }}>
        <CustomInput
          placeHolder={"E-mail"}
          style={{ borderBottomWidth: 1 }}
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          placeHolder={"Register"}
          style={{ borderBottomWidth: 1 }}
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
      </View>
    );
  }

  function renderButton() {
    return (
      <View
        style={{
          marginTop: 50,
          justifyContent: "center",
          alignItems: "center",
        
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center",gap:20 }}>
          <CustomButton
            item={"Forget Password"}
            onPress={login}
            style={{ margin: 15 }}
            type="TERTTARY"
          />
          <CustomButton
            item={"LOGIN"}
            bgcolors="#89CFF0"
            radius={30}
            onPress={login}
            style={{ width: 120 }}
          />
        </View>
        <Text
          style={{
            marginVertical:10,
            height: 1,
            width: "90%",
            borderWidth: 0.8,
            borderColor: "gray",
          }}
        />

        <View
          style={{  flexDirection: "row", alignItems: "center",justifyContent:'center',gap:20 }}
        >
          <CustomButton
            item={"Register now"}
            type="TERTTARY"
            onPress={() => navigation.navigate("Register")}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <FontAwesome name="facebook" size={24} color="blue" />
            <FontAwesome5 name="google-plus-g" size={24} color="black" style={{marginLeft:10}} />
            <FontAwesome5 name="twitter" size={24} color="blue"  style={{marginLeft:10}}/>
          </View>
        </View>
        <Text
          style={{
            height: 1,
            width: "90%",
            borderWidth: 0.8,
            borderColor: "gray",
          }}
        />
      </View>
    );
  }
  return (
    <View style={{ backgroundColor: "transparent" ,}}>
      {renderHeader()}
      {renderInput()}
      {renderButton()}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
