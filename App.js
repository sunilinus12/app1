import { StatusBar } from 'expo-status-bar';
import React from "react";

import { StyleSheet, TextInput, SafeAreaView,Button,Text,Image, View, ImageBackground} from 'react-native';



export default function App() {

  const [num, onChangeNumber] = React.useState(null);
  const show =()=>{
    console.log("clicked \n the value is: "+num);
  }
  const Bgmi = () =>{
  return(
        <View>
       
        <ImageBackground source={require('./assets/pic1.jpg')}  style={styles.imgb}>
        <Text style={styles.text}>
        {num}
        </Text>          
        
        
             
       
          </ImageBackground>
        </View>

  )
}
  
  

  return (
    <SafeAreaView style={{paddingTop:50,paddingLeft:10,paddingRight:10}}>
     
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={num}
        placeholder="Placeholder"
        maxLength={5}
      />
       <Button title="Done" onPress={show}  />
      
        
     <Bgmi/>
    </SafeAreaView>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{

    height:40,
    margin:12,
    borderWidth:1,
    padding:5,
    
  },
  imgb:{
    width:320 ,height:550,
    position:'absolute',

  },
  text: {
    color: "white",
    fontSize: 22,
    position:'relative',
    top:100,
    width:250,
    paddingLeft:50,
    
    fontWeight: "400",
    textAlign: "center",
    
  },
});
