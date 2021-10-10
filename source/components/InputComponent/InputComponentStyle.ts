import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    smallInputContainer: {
        height: 34,
    },
    largeInputContainer: {
        height: 40,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: "#e0e0e0",
        backgroundColor: "#F9F9F9",
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    disabledInputContainer: {
        borderWidth: 1,
        borderColor: "#C2C2C2",
        backgroundColor: "#DEDEDE",
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    prefix: {
        paddingHorizontal: 10,
    },
    placeholder: {
        color: "#808080"
    },
    prefixIcon: {
        fontSize: 24,
        color: "#5C5C5C"
    },
    disabledPrefixIcon: {
        fontSize: 24,
        color: "#A8A8A8"
    },
    input: {
        color: "#191919",
        width: "90%",
        height: 34,
        paddingVertical: 8,
        fontFamily: "Barkentina"
    },
  });
