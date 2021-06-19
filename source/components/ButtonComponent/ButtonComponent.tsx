import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableRipple } from 'react-native-paper';
import Icon from '../CustomIcon/Icon';

interface ButtonConfigProps {
    children: string;
    onPress: () => void;
    icon?: string;
    disabled?: boolean;
    prefixIcon?: string;
    type?: "primary" | "secondary" | "tertiary";
    theme?: "primary" | "secondary";
    style?: any;
}

export default function ButtonComponent(props: ButtonConfigProps) {
    const variantStyleName = 
    (props.theme == undefined || props.theme == "primary") && (props.type == undefined || props.type == "primary") ? "themePrimaryTypePrimary" :
    (props.theme == "secondary") && (props.type == undefined || props.type == "primary") ? "themeSecondaryTypePrimary" :
    (props.theme == undefined || props.theme == "primary") && (props.type == "secondary") ? "themePrimaryTypeSecondary" :
    (props.theme == "secondary") && (props.type == "secondary") ? "themeSecondaryTypeSecondary" :
    "typeTertiary"
    const variantFontStyle = 
    ((props.theme == undefined || props.theme == "primary") && (props.type == undefined || props.type == "primary")) ? "themePrimaryColor" :
    (props.theme == "secondary" && (props.type == undefined || props.type == "primary")) ? "themeSecondaryColor" :
    ((props.theme == undefined || props.theme == "primary") && (props.type == "secondary" || props.type == "tertiary")) ? "themePrimaryColor2" :  
    "themeSecondaryColor2"
    return (
        <View style={[
            props.style,
            styles.button,
            styles[variantStyleName]
            ]}>
            <TouchableRipple borderless={true} style={styles.buttonRipple}
                onPress={() => props.onPress()}
                rippleColor="rgba(0, 0, 0, .32)">
                    <React.Fragment>
                        {props.icon && 
                        <Text style={[
                            styles.Icon, 
                            styles[variantFontStyle]
                            ]}>
                            <Icon name={props.icon} />
                        </Text>}
                        <Text style={[
                            styles.buttonText,
                            styles[variantFontStyle]
                            ]}>
                            {props.children}
                        </Text>
                    </React.Fragment>
            </TouchableRipple>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 32,
        borderRadius: 6,
    },
    themePrimaryTypePrimary: {
        backgroundColor: "#3A7CE6",
    },
    themeSecondaryTypePrimary: {
        backgroundColor: "#F2BF27",
    },
    themePrimaryTypeSecondary: {
        backgroundColor: "#F9F9F9",
        borderWidth: 1,
        borderColor: "#3A7CE6"
    },
    themeSecondaryTypeSecondary: {
        backgroundColor: "#F9F9F9",
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "#F2BF27"
    },
    typeTertiary: {
        backgroundColor: "#F9F9F9",
    },
    buttonRipple: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    Icon: {
        paddingRight: 10
    },
    buttonText: {
        fontSize: 14,
        textAlign: "center",
        textAlignVertical: "center",
    },
    themePrimaryColor: {
        color: "#fff"
    },
    themePrimaryColor2: {
        color: "#1341E8"
    },
    themeSecondaryColor: {
        color: "#191919"
    },
    themeSecondaryColor2: {
        color: "#F2BF27"
    }
})