import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import CustomButton from "./../components/CustomButton/CustomButton";
import { FitnessItems } from "../../Context";

const FitScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [index, setIndex] = useState(0);
  const [data, setData] = useState(route.params.excersises);

  const { completed,
    setCompleted,
    workout,
    setWorkout,
    calories,
    setCalories,
    minutes,
    setMinutes}=useContext(FitnessItems)

  const currenData = data[index];



  function renderHeader() {
    return (
      <Image
        source={{ uri: currenData.image }}
        style={{ width: "100%", height: "70%", maxHeight: 400 }}
      />
    );
  }

  function renderBody() {
    return ( 
      <View
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 30, fontFamily: "OSWB", marginVertical: 15 }}>
          {currenData.name}
        </Text>
        <Text style={{ fontSize: 30, fontFamily: "OSWB" }}>
          {currenData.sets}x
        </Text>
      </View>
    );
  }

  const onPrevButton = () => {
    if (index <= 0) {
      navigation.goBack();
    }
    setIndex(index - 1);
  };

  const onScipButton = () => {
    if (index >= data.length - 1) {
      navigation.navigate('Home');
    }
    setIndex(index + 1);
  };

  function renderButton() {
    return (
      <View>
        {index+1 >= data.length ? (
          <CustomButton
          item={"Done"}
          bgcolors={"blue"}
          marginVertical={20}
          radius={20}
          padding={12}
          style={{ width: 300, marginLeft: "auto", marginRight: "auto" }}
          onPress={() => {
            navigation.navigate("Home");
            
          }}
        />
       
        ): (
          <View>
               <CustomButton
          item={"Done"}
          bgcolors={"blue"}
          marginVertical={20}
          radius={20}
          padding={12}
          style={{ width: 300, marginLeft: "auto", marginRight: "auto" }}
          onPress={() => {
            navigation.navigate("Rest");
            setCompleted([...completed,currenData.name])
            setWorkout(workout+1)
            setCalories(calories+6.3)
            setMinutes(minutes+2.5)
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}/>
          </View>
        
        ) }
         <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            padding: 10,
          }}
        >
          <CustomButton
            onPress={onPrevButton}
            item={"Prev"}
            bgcolors="green"
            padding={10}
            radius={25}
            style={{ width: 100, marginLeft: 15, marginRight: 15 }}
          />
          <CustomButton
            onPress={onScipButton}
            item={"skip"}
            bgcolors="green"
            padding={10}
            radius={25}
            style={{ marginLeft: 15, width: 100 }}
          />
          </View>
        
        
      </View>
    );
  }
  return (
    <SafeAreaView>
      {renderHeader()}
      {renderBody()}
      {renderButton()}
    </SafeAreaView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({});
