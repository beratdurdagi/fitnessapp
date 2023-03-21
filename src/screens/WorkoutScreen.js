import { StyleSheet, Text, View, Image, Pressable ,ScrollView} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useState,useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FitnessItems } from "../../Context";


import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton/CustomButton";

const WorkoutScreen = () => {
  const { completed,
    setCompleted,
    workout,
    setWorkout,
    calories,
    setCalories,
    minutes,
    setMinutes}=useContext(FitnessItems)
  const route = useRoute();
  const navigation = useNavigation();
  const [data, setData] = useState(route.params);

  function renderHeader() {
    return (
      <View>
        <Image
          source={{ uri: data.image }}
          style={{ width: "100%", height: 200 }}
        />
        <Pressable style={{ position: "absolute", top: 25, left: 15 }}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="white"
            onPress={() => navigation.goBack()}
          />
        </Pressable>
      </View>
    );
  }

  function renderBody() {
    return (
      <View style={{ backgroundColor: "white" }}>
        {data.excersises.map((item, index) => (
          <Pressable
          
            key={index}
            style={{
              margin: 15,
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => console.warn("pressed:", item.id)}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 75, height: 75 }}
            />
            <View style={{ marginLeft: 5,width:170 }}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "black" }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontFamily: "Roboto-Regular",
                  fontSize: 17,
                  color: "gray",
                }}
              >
                X{item.sets}
              </Text>
            </View>
            {completed.includes(item.name) ? (
              <AntDesign
              name="checkcircle"
              size={24}
              color="green"
              onPress={() => navigation.goBack()}
            />

            ) : (null)}
          </Pressable>
        ))}
      </View>
    );
  }

  function renderButton() {
    return (
      
        <CustomButton
          item={"Start"}
          bgcolors="#1F75FE"
          fontSize={15}
          style={{marginLeft:'auto',marginRight:'auto',width:150}}
          marginVertical={15}
          radius={10}
          padding={10}
          onPress={()=>{navigation.navigate('Fit',{excersises:data.excersises }),setCompleted([])}}
        />
      
    );
  }

  return (
    <ScrollView  vertical showsVerticalScrollIndicator={false}>
      {renderHeader()}
      {renderBody()}
      {renderButton()}
    </ScrollView>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
});
