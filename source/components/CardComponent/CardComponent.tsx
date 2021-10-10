import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { images } from '../../InternalAssets/Images/ImageSource'

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#fff",
        borderRadius: 10,
        height: 180,
        width: 144,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 1
    },
    cardCoverImage: {
        height: 124,
        width: 124,
        overflow: "hidden",
        borderRadius: 10,
    },
    cardInfo: {
        marginTop: 5,
        display:"flex",
        flexDirection: "column",
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 14
    },
    cardSubTitle: {
        fontSize: 12,
        color: "#5c5c5c"
    }
})

function CardComponent() {
    return (
        <View style={styles.cardContainer}>
            <Image style={styles.cardCoverImage} source={images.home_bg} />
            <View style={styles.cardInfo}>
                <Text numberOfLines={1} style={styles.cardTitle}>Card Name - Title Heading Goes Here</Text>
                <Text style={styles.cardSubTitle}>Card Title</Text>
            </View>
        </View>
    )
}

export default CardComponent
