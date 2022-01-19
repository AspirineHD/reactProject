import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const AboutScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>เกี่ยวกับเรา</Text>
            <Button
                title='Go to About Page agaon....'
                onPress={() => navigation.push('About')}
            />
            <Button
                title='Go to Home Page'
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title='Go back'
                onPress={() => navigation.goBack()}
            />
            <Button
                title='Go back to first screen in stack'
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}

export default AboutScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
