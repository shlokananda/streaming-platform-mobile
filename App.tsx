 import React, { useState } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 import { setCustomText } from 'react-native-global-props';
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
import ButtonComponent from './source/components/ButtonComponent/ButtonComponent';
import InputComponent from './source/components/InputComponent/InputComponent';


 const App = () => {
   const [value, setvalue] = useState("Disabled Small Input");
   const [value2, setvalue2] = useState("Small Input");
   const [value3, setvalue3] = useState("Disabled Large Input");
   const [value4, setvalue4] = useState("Large Input");

   const customTextProps = { 
    style: { 
      fontFamily: "Barkentina"
    }
  }
  setCustomText(customTextProps);


   const backgroundStyle = {
     backgroundColor: "#F0F0F0",
     height: "100%",
     padding: 20
   };
   const marginBottom = {
     marginBottom: 10
   }
   const sectionMarginBottom = {
     marginBottom: 40
   }
   const style = StyleSheet.create({
      flexRow: {
        flexDirection: "row",
        justifyContent: "space-between"
      },
      buttonStyle: {
        width: "45%"
      }
   })

   return (
     <SafeAreaView style={backgroundStyle}>
       <Text style={marginBottom}>Input Components</Text>
       <InputComponent style={marginBottom} value={value} disabled={true} onChange={text => setvalue(text)} placeholder="Search Songs" prefixIcon="search" />
       <InputComponent style={marginBottom} value={value2} disabled={false} onChange={text => setvalue2(text)} placeholder="Search Songs" prefixIcon="search" />
       <InputComponent style={marginBottom} size="large" disabled={true} value={value3} onChange={text => setvalue3(text)} placeholder="Search Songs" prefixIcon="search" />
       <InputComponent style={sectionMarginBottom} size="large" value={value4} onChange={text => setvalue4(text)} placeholder="Search Songs" prefixIcon="search" />
       <Text style={marginBottom}>Button Components</Text>
       <View style={style.flexRow}>
          <ButtonComponent style={[marginBottom, style.buttonStyle]} theme="primary" icon="play" onPress={()=>console.log('Play')}>PLAY</ButtonComponent>
          <ButtonComponent style={[marginBottom, style.buttonStyle]} theme="primary" onPress={()=>console.log('Play')}>PLAY</ButtonComponent>
       </View>
       <View style={style.flexRow}>
          <ButtonComponent style={[marginBottom, style.buttonStyle]} theme="secondary" icon="play" onPress={()=>console.log('Play')}>PLAY</ButtonComponent>
          <ButtonComponent style={[marginBottom, style.buttonStyle]} theme="secondary" onPress={()=>console.log('Play')}>PLAY</ButtonComponent>
       </View>
       <View style={style.flexRow}>
          <ButtonComponent style={[marginBottom, style.buttonStyle]} theme="primary" type="secondary" icon="play" onPress={()=>console.log('Play')}>PLAY</ButtonComponent>
          <ButtonComponent style={[marginBottom, style.buttonStyle]} theme="primary" type="secondary" onPress={()=>console.log('Play')}>PLAY</ButtonComponent>
       </View>
       <View style={style.flexRow}>
          <ButtonComponent style={[marginBottom, style.buttonStyle]} theme="secondary" type="secondary" icon="play" onPress={()=>console.log('Play')}>PLAY</ButtonComponent>
          <ButtonComponent style={[marginBottom, style.buttonStyle]} theme="secondary" type="secondary" onPress={()=>console.log('Play')}>PLAY</ButtonComponent>
       </View>
       <View style={style.flexRow}>
          <ButtonComponent style={[marginBottom, style.buttonStyle]} theme="primary" type="tertiary" icon="play" onPress={()=>console.log('Play')}>PLAY</ButtonComponent>
          <ButtonComponent style={[marginBottom, style.buttonStyle]} theme="primary" type="tertiary" onPress={()=>console.log('Play')}>PLAY</ButtonComponent>
       </View>
       
     </SafeAreaView>
   );
 };
 export default App;