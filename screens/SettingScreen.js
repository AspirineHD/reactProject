import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'


const SettingScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <View style={styles.container}>
                <Text style={{fontSize:24, fontWeight:'bold', margin:25}}>Setting Screen</Text>
                <View style={{flexDirection:'column'}}>
                    <Button
                        title="Go to Home Tab"
                        onPress={() => navigation.navigate('Home')}
                    />
                    <View style={{marginTop:20}}>
                        <Button title="Open News Screen"/>
                    </View>
                    <View style={{marginTop:20}}>
                        <Button 
                            title="Open Profile Screen"
                            onPress={() => navigation.navigate('Profile')}
                        />
                    </View>
                </View>
                
            </View>
            <View style={{justifyContent:'flex-end'}}>
                <Text style={{fontSize:12}}>www.tni.ac.th</Text>
             </View>
        </SafeAreaView>
    );
};

export default SettingScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
});
