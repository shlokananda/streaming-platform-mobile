import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import CardComponent from '../../components/CardComponent/CardComponent';
import InputComponent from '../../components/InputComponent/InputComponent'

function ComponentsView() {
    const [value, setvalue] = useState("Disabled Small Input");
   const [value2, setvalue2] = useState("Small Input");
   const [value3, setvalue3] = useState("Disabled Large Input");
   const [value4, setvalue4] = useState("Disabled Large Input");
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
         flexRowAlign: {
           width: 300,
          flexDirection: "row",
          justifyContent: "space-between"
         },
         buttonStyle: {
           width: "45%"
         }
      })
    return (
        <View style={{height: "100%", backgroundColor: "#C7E7F9", padding: 20}}>
                   {/* <Text style={marginBottom}>Input Components</Text>
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
                        <ButtonComponent style={[sectionMarginBottom, style.buttonStyle]} theme="primary" type="tertiary" onPress={()=>console.log('Play')}>PLAY</ButtonComponent>
                    </View> */}
                    <Text style={marginBottom}>Cards Components</Text>
                    <View style={style.flexRowAlign}>
                      <CardComponent />
                      <CardComponent />
                    </View>
        </View>
    )
}

export default ComponentsView
