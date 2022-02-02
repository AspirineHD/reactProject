import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <View style={styles.container}>
                <Text style={{fontSize:24, fontWeight:'bold', margin:25}}>You are on Profile Screen</Text> 
            </View>
            <View style={{justifyContent:'flex-end'}}>
                <Text style={{fontSize:12}}>www.tni.ac.th</Text>
             </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
});
