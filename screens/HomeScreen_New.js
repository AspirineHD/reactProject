import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// import {
//     HeaderButtons,
//     HeaderButton,
//     Item,
//     HiddenItem,
//     OverflowMenu,
//   } from 'react-navigation-header-buttons';

// const IoniconsHeaderButton = (props) => (
//     // the `props` here come from <Item ... />
//     // you may access them and pass something else to `HeaderButton` if you like
//     <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
//   );

// import Ionicons from 'react-native-vector-icons/Ionicons'

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <View style={styles.container}>
                <Text style={{fontSize:24, fontWeight:'bold', margin:25}}>Home Screen</Text>
                <View style={{flexDirection:'column'}}>
                    <Button
                        title="Go to Setting Tab"
                        onPress={() => navigation.navigate('Setting')}
                    />
                    <View style={{marginTop:20}}>
                        <Button title="Open News Screen"/>
                    </View>
                </View>
                
            </View>
            <View style={{justifyContent:'flex-end'}}>
                <Text style={{fontSize:12}}>www.tni.ac.th</Text>
             </View>
        </SafeAreaView>
    );
};

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})
