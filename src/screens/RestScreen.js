import { StyleSheet, Text, View ,Image} from 'react-native'
import React, { useEffect ,useState} from 'react'
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const RestScreen = () => {


    const [timer,setTimer]=useState(3)

    const navigation=useNavigation()

    const startTime=()=>{
        setTimeout(()=>{
            if(timer<=0){
                navigation.goBack()
                clearTimeout(timer)
            }
            setTimer(timer-1)

        },1000)
       
        
        }
  
    

    useEffect(()=>{
            startTime();
            return ()=>clearTimeout(timer)
        })
   
  return (
    <SafeAreaView>
      <Image
        
        source={{
          uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
        }}
        style={{ width: "100%",maxHeight:420,height:350}}
      />
      <Text style={styles.textStyle}>
        Take A Break!
      </Text>

      <Text style={styles.textStyle}>{timer}</Text>
      

    </SafeAreaView>
  )
}

export default RestScreen

const styles = StyleSheet.create({

    textStyle:{fontSize:35,fontFamily:'OSWB',textAlign:'center',marginTop:50}
})