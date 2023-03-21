import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import CustomInput from "./../components/CustomInput/CustomInput";
import CustomButton from "./../components/CustomButton/CustomButton";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [checkPass, setCheckPass] = useState("");
  const navigation=useNavigation()

  const register = () => {

  

    if (email === "" || password === "" || phone === "" || userName === "") {
      Alert.alert("Invalid Details", "Please fill all the details", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
    createUserWithEmailAndPassword(auth, email, password).then(
      (UserCredential) => {
        const user = UserCredential._tokenResponse.email;
        const myUserUid = auth.currentUser.uid;
        console.log(user), console.log(UserCredential);
        setDoc(doc(db, "users", `${myUserUid}`), {
          email: user,
          phone: phone,
          password: password,
          userName: userName,
        });
      }
    );
  };

  function renderHeader() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30, fontFamily: "OSWB" }}>
          Create Accaount
        </Text>
        <Text style={{ fontSize: 15, color: "gray" }}>Create New Acoount</Text>
      </View>
    );
  }

  function renderInput() {
    return (
      <View style={{ marginLeft: "auto", marginRight: "auto", width: "70%" }}>
        <CustomInput
          placeHolder={"Username"}
          style={{ borderBottomWidth: 1 }}
          value={userName}
          setValue={setUserName}
        />
        <CustomInput
          placeHolder={"E-mail"}
          style={{ borderBottomWidth: 1 }}
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          placeHolder={"Password"}
          style={{ borderBottomWidth: 1 }}
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeHolder={"Password Again"}
          style={{ borderBottomWidth: 1 }}
          value={checkPass}
          setValue={setCheckPass}
          secureTextEntry={true}
        />
        <CustomInput
          placeHolder={"Phone"}
          style={{ borderBottomWidth: 1 }}
          value={phone}
          setValue={setPhone}
        />
      </View>
    );
  }

  function renderButton() {
    return(
      <View>
      <CustomButton
        item={"Create Accoount "}
        bgcolors="blue"
        radius={18}
        style={{width:'100%'}}
        onPress={register}
      />

      <CustomButton
        item={"Already have an account ? "}
        fontSize={15}
        radius={18}
        style={{width:'100%'}}

        type="TERTTARY"
        onPress={()=>navigation.navigate('Login')}
      />
      </View>
    )
  }

  return (
    <View>
      <View
        style={{
          marginTop: 50,
        
          alignItems: "center",
          justifyContent: "center",
          gap:30
        }}
      >
        {renderHeader()}

        {renderInput()}
        {renderButton()}
       
       
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
