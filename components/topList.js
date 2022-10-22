import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TopList = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>DISCOVER A WORLD OF NATIONAL TRUST</Text>
    </View>
  )
}

export default TopList

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#659136",
        width: "100%",
        height: "auto",
    },
    textStyle: {
        color: "white",
        textAlign: "center",
        marginTop: 60,
        marginBottom: 20,
        fontSize: 17,
        fontWeight: "bold"
    }
})