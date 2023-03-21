import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState, useContext } from "react";
import fitness from "../../constant/fitness";
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { FitnessItems } from "../../Context";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const {
    completed,
    setCompleted,
    workout,
    setWorkout,
    calories,
    setCalories,
    minutes,
    setMinutes,
  } = useContext(FitnessItems);

  const [fitnessData, setFitnessData] = useState(fitness);

  const navigation = useNavigation();

  const CaloryData = [
    {
      id: "0",
      name: "WORKOUTS",
      data: workout,
    },
    {
      id: "1",
      name: "KCAL",
      data: calories,
    },
    {
      id: "2",
      name: "MINUTES",
      data: minutes,
    },
  ];

  function renderHeader() {
    return (
      <View
        style={{
          padding: 10,
          backgroundColor: "#CD853F",
          height: 200,
          width: "100%",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontFamily: "Roboto-Regular",
            }}
          >
            HOME WORKOUT
          </Text>
          <Pressable style={{backgroundColor:'transparent',alignItems:'center',justifyContent:'center'}}
          onPress={()=>navigation.navigate('Profile')}>
            <MaterialCommunityIcons name="account" size={30} color="black" />
            <Text>Profile</Text>
          </Pressable>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 15,
          }}
        >
          {CaloryData.map((data, key) => (
            <View style={{ padding: 10, alignItems: "center" }} key={key}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "RobotoCondensed-Bold",
                  color: "white",
                }}
              >
                {Math.round(data.data)}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "RobotoCondensed-Bold",
                  color: "white",
                }}
              >
                {data.name}
              </Text>
            </View>
          ))}
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: "90%",
              height: 120,
              marginTop: 20,
              borderRadius: 7,
            }}
            source={{
              uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            }}
            resizeMode='cover'
          />
        </View>
      </View>
    );
  }
  function renderImage() {
    return (
      <View style={{ marginTop: 85, marginHorizontal: 10 }}>
        {fitnessData.map((item, key) => (
          <Pressable
            style={{
              margin: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            key={key}
            onPress={() =>
              navigation.navigate("WorkOut", {
                description: item.description,
                image: item.image,
                excersises: item.excersises,
              })
            }
          >
            <Image
              source={{ uri: item.image }}
              style={{ height: 150, borderRadius: 8, width: "100%" }}
            />
            <View style={{ position: "absolute", left: 15, top: 15 }}>
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                  fontFamily: "RobotoCondensed-Bold",
                }}
              >
                {item.name}
              </Text>
            </View>
            <View style={{ position: "absolute", bottom: 15, left: 20 }}>
              <MaterialCommunityIcons
                name="lightning-bolt"
                size={24}
                color="white"
              />
            </View>
          </Pressable>
        ))}
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} vertical>
      {renderHeader()}
      {renderImage()}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 12,
  },
});
