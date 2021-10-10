import React from 'react';
 import { SafeAreaView } from 'react-native';
 import { setCustomText } from 'react-native-global-props';
import BaseNavigation from './source/nav-containers/BaseNavigation/BaseNavigation';




 const App = () => {
  
  // Setup Default Font
   const customTextProps = { 
      style: { 
        fontFamily: "Barkentina",
        color: "#191919"
      }
    }
    setCustomText(customTextProps);


   const backgroundStyle = {
    height: "100%"
   };


   return (
    <SafeAreaView style={backgroundStyle}>
      <BaseNavigation/>
    </SafeAreaView>
   );
 };
 export default App;
