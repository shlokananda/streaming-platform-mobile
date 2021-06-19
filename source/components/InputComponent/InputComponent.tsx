import React from 'react'
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from '../CustomIcon/Icon';
import { styles } from './InputComponentStyle';

interface InputConfigProps {
    value: string;
    onChange: (val: string) => void;
    placeholder?: string;
    disabled?: boolean;
    prefixIcon?: string;
    size?: "small" | "large";
    style?: any;
}

export default function InputComponent(props: InputConfigProps) {
    const {value, onChange} = props;
    return (
        <View style={[props.style, props.size == "large" ? styles.largeInputContainer : styles.smallInputContainer, props.disabled ? styles.disabledInputContainer : styles.inputContainer]}>
            {props.prefixIcon && (
                <Text style={styles.prefix}>
                    <Icon style={props.disabled ? styles.disabledPrefixIcon : styles.prefixIcon} name={props.prefixIcon} />
                </Text>
            )}
            <TextInput
                style={styles.input} editable={!props.disabled}
                placeholder={props.placeholder}
                placeholderTextColor={styles.placeholder.color}
                onChangeText={text => onChange(text)}
                value={value} />
        </View>
    )
}