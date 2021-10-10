import React, { useState } from 'react'
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import InputComponent from '../../components/InputComponent/InputComponent'
import { images } from '../../InternalAssets/Images/ImageSource';

let styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover', // or 'stretch'
    }
  });

function HomeView() {
    const [value4, setvalue4] = useState("");
    return (
    <View style={{flex: 1}}>
        <ImageBackground source={images.home_bg} style={styles.backgroundImage} >
            <StatusBar
            animated={true}
            backgroundColor="#C7E7F9"
            barStyle={'dark-content'}
            showHideTransition={'none'} />
            <ScrollView style={{ padding: 10 }}>
                <InputComponent size="large" value={value4} onChange={text => setvalue4(text)} placeholder="Search artist, songs, or albums" prefixIcon="search" />
            </ScrollView>
        </ImageBackground>
        
    </View>
    )
}

export default HomeView
